import { Fragment, useState } from 'react'

import './userEntry.css'

// treeView style, ref: https://iamkate.com/code/tree-views/
const UserEntry = ({ id, parentId, childrenItems }) => {
  const [isExpanded, setExpand] = useState(true)
  return (
    <li>
      <summary
        className={childrenItems?.length > 0 && 'is-expandable'}
        open={isExpanded}
        onClick={() => setExpand((prevState) => !prevState)}
        role="presentation"
      >
        id: {id} {parentId && <>(parentId: {parentId})</>}
      </summary>
      {isExpanded && childrenItems?.length > 0 && (
        <ul className="tree">
          {childrenItems?.map((child) => (
            <UserEntry
              key={child.id}
              id={child.id}
              parentId={child.parentId}
              childrenItems={child.childrenItems}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default UserEntry
