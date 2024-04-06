import { Fragment, useState } from 'react'

import './PersonEntry.css'

// treeView style, ref: https://iamkate.com/code/tree-views/
const PersonEntry = ({
  id,
  parentId,
  childrenItems,
  wife1,
  wife2,
  wife3,
  name,
  m1,
  m2,
  m3,
}) => {
  const [isExpanded, setExpand] = useState(true)
  return (
    <li>
      <summary
        className={childrenItems?.length > 0 ? 'is-expandable' : ''}
        open={isExpanded}
        onClick={() => setExpand((prevState) => !prevState)}
        role="presentation"
      >
        {name ?? id}
        {wife1 && <>, wife1: {wife1.name ?? m1}</>}{' '}
        {wife2 && <>, wife1: {wife2.name ?? m2}</>}{' '}
        {wife3 && <>, wife1: {wife3.name ?? m3}</>}{' '}
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
