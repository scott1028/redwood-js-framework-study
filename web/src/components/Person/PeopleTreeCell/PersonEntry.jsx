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
      <span className="item-wrapper">
        <span className="line"></span>
        <span className="line-left"></span>
        <span
          className={`${viewDetail && viewDetail.id === id ? 'is-viewed' : ''}`}
          onClick={() => {
            if (!childrenItems?.length) {
              return
            }
            setExpand((prevState) => !prevState)
          }}
          role="presentation"
        >
          <input
            type="checkbox"
            checked={isExpanded}
            disabled={!childrenItems?.length}
          />
          {name ?? id}
          <>({id})</>
          {maried1 && (
            <>
              , {maried1.name ?? m1} ({m1})
            </>
          )}
          {maried2 && (
            <>
              , {maried2.name ?? m2} ({m2})
            </>
          )}
          {maried3 && (
            <>
              , {maried3.name ?? m3} ({m3})
            </>
          )}
        </span>
        <button
          className="detail-button"
          onClick={(e) => {
            e.stopPropagation()
            onViewDetail(restProps)
          }}
        >
          Detail
        </button>
      </span>
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
