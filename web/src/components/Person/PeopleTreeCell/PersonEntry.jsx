import { Fragment, useState } from 'react'

import './PersonEntry.css'

// treeView style, ref: https://iamkate.com/code/tree-views/
const PersonEntry = ({ id, parentId, childrenItems, wife, name, m0 }) => {
  const [isExpanded, setExpand] = useState(true)
  console.log('wife:', wife, 'name:', name, m0)
  return (
    <li>
      <summary
        className={childrenItems?.length > 0 ? 'is-expandable' : ''}
        open={isExpanded}
        onClick={() => setExpand((prevState) => !prevState)}
        role="presentation"
      >
        name: {name ?? id}
        {m0 && <>, wife: {wife.name ?? m0}</>}{' '}
        {parentId && (
          <>
            (id: {id}, parentId: {parentId})
          </>
        )}{' '}
      </summary>
      {isExpanded && childrenItems?.length > 0 && (
        <ul className="tree">
          {childrenItems?.map((child) => (
            <PersonEntry
              {...child}
              key={child.id}
              id={child.id}
              parentId={child.parentId}
              wife={child.wife}
              childrenItems={child.childrenItems}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default PersonEntry
