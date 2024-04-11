import { Fragment, useState } from 'react'

import Button from '@mui/material/Button'
import styled from 'styled-components'

import './PersonEntry.css'

const StyledLi = styled('li')`
  position: relative;
  left: 10px;
  padding-left: 20px;
  width: fit-content;
  border-left: 1px solid #bbb;
  position: relative;
  left: 10px;

  &:last-child {
    border-left: none;
  }
`

const StyledSpan = styled('span')`
  display: table;

  ${StyledLi}:last-child > & > .line-left {
    left: 0px;
  }
`

const StyledButton = styled(Button)`
  && {
    display: none;
    margin-left: 10px;
    height: 18px;
    line-height: 18px;
    padding: 0px 10px;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  ${StyledSpan}:hover && {
    display: inline-block;
  }

  @media print {
    &&&& {
      display: none;
    }
  }
`

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
    <StyledLi>
      <StyledSpan className="item-wrapper">
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
        <StyledButton
          variant="outlined"
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            onViewDetail(restProps)
          }}
        >
          Detail
        </StyledButton>
      </StyledSpan>
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
    </StyledLi>
  )
}

export default PersonEntry
