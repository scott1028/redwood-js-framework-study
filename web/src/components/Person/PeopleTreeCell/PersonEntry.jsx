import { Fragment, useState } from 'react'

import './PersonEntry.css'

// treeView style, ref: https://iamkate.com/code/tree-views/
const PersonEntry = (props) => {
  const {
    id,
    // parentId,
    // childrenItems,
    // maried1,
    // maried2,
    // maried3,
    name,
    m1,
    m2,
    m3,
    viewDetail,
    onViewDetail,
  } = props
  const { maried1, maried2, maried3, childrenItems, ...restProps } = props
  const [isExpanded, setExpand] = useState(false)
  return (
    <li>
      <summary
        className={childrenItems?.length > 0 ? 'is-expandable' : ''}
        open={isExpanded}
      >
        <span
          className={`${viewDetail && viewDetail.id === id ? 'is-viewed' : ''}`}
          onClick={() => {
            onViewDetail(restProps)
            setExpand((prevState) => !prevState)
          }}
          role="presentation"
        >
          {childrenItems?.length > 0 && (
            <input type="checkbox" checked={isExpanded} />
          )}
          {name ?? id}
          <>({id})</>
          {maried1 && <>, {maried1.name ?? m1}</>}
          {maried2 && <>, {maried2.name ?? m2}</>}
          {maried3 && <>, {maried3.name ?? m3}</>}{' '}
        </span>
      </summary>
      {isExpanded && childrenItems?.length > 0 && (
        <ul className="tree">
          {childrenItems?.map((child) => (
            <PersonEntry
              {...child}
              key={child.id}
              id={child.id}
              parentId={child.parentId}
              maried={child.maried}
              childrenItems={child.childrenItems}
              viewDetail={viewDetail}
              onViewDetail={onViewDetail}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default PersonEntry
