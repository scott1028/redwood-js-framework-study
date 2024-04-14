import { Fragment, useState } from 'react'

import Button from '@mui/material/Button'
import styled from 'styled-components'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';

import './PersonEntry.css'
import { useScaffoldContext } from '../../../layouts/ScaffoldLayout/contexts'
import {
  idTOLabel_x2,
  idTOLabel_x3,
  idTOLabel_x4,
  idTOLabel_x5,
  idTOLabel_q1,
  idTOLabel_q2,
  idTOLabel_n1,
  idTOLabel_n2,
} from '../PersonForm/PersonForm'

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

    & + span {
      position: relative;
      left: 1px;
    }
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
    x5,
    x6,
    x9,
    note,
    viewDetail,
    onViewDetail,
  } = props
  const [options] = useScaffoldContext()
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
          <span style={{ display: 'inline-block' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zoom: 0.75, height: 18, width: 18, overflow: 'hidden', marginRight: 8 }}>
              {childrenItems.length === 0 ? <SquareOutlinedIcon /> : isExpanded ? <IndeterminateCheckBoxOutlinedIcon /> : <AddBoxOutlinedIcon />}
            </span>
          </span>
          {options.option1 && x6}
          {options.option2 && <>{idTOLabel_x5[x5]} </>}
          {name ?? id}
          <>({id})</>({options.option4 && x9})
          {maried1 && (
            <>
              {', '}
              {maried1.name ?? m1}
              {options.option3 && <>({m1})</>}
            </>
          )}
          {maried2 && (
            <>
              {', '}
              {maried2.name ?? m2}
              {options.option3 && <>({m2})</>}
            </>
          )}
          {maried3 && (
            <>
              {', '}
              {maried2.name ?? m2}
              {options.option3 && <>({m3})</>}
            </>
          )}
          {options.option5 && (
            <>
              {' -- '}
              {note}{' '}
            </>
          )}
          {/* TODO: search "option1" in source code your find where it defined */}
          {/*options.option1 && '上方 option1 已經打勾'*/}
          {/*options.option2 && '上方 option2 已經打勾'*/}
        </span>
        <StyledButton
          variant="outlined"
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            onViewDetail({
              ...restProps,
              maried1,
              maried2,
              maried3,
              childrenItems,
            })
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
