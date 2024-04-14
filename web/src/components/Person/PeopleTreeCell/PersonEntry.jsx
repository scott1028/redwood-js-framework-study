import { Fragment, useState } from 'react'

import Button from '@mui/material/Button'
import styled from 'styled-components'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined'
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined'

import './PersonEntry.css'
import { useScaffoldContext } from '../../../layouts/ScaffoldLayout/contexts'
import {
  idTOLabel_x2,
  idTOLabel_x3,
  idTOLabel_x4,
  idTOLabel_x6,
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
    x5,
    x6,
    name,
    x8,
    x9,
    m1,
    m2,
    m3,
    note,
    z1,
    z2,
    z3,
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
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zoom: 0.75,
                height: 18,
                width: 18,
                overflow: 'hidden',
                marginRight: 8,
              }}
            >
              {childrenItems.length === 0 ? (
                <SquareOutlinedIcon />
              ) : isExpanded ? (
                <IndeterminateCheckBoxOutlinedIcon />
              ) : (
                <AddBoxOutlinedIcon />
              )}
            </span>
          </span>
          {options.option5 && x5}
          {options.option6 && <>{idTOLabel_x6[x6]} </>}
          {name ?? id}
          {options.option1 && <>({id})</>}
          {options.option8 && <>({x8})</>}
          {options.option9 && <>({x9})</>}
          {options.option22 && (
            <>{[z1, z2, z3].join('') ? `(${[z1, z2, z3].join('-')})` : ''}</>
          )}
          {maried1 && (
            <>
              {', '}
              {maried1.name ?? m1}
              {options.option1 && <>({m1})</>}
              {options.option8 && <>({maried1.x8})</>}
              {options.option9 && <>({maried1.x9})</>}
              {options.option22 && (
                <>
                  {[maried1.z1, maried1.z2, maried1.z3].join('')
                    ? `(${[maried1.z1, maried1.z2, maried1.z3].join('-')})`
                    : ''}
                </>
              )}
            </>
          )}
          {maried2 && (
            <>
              {', '}
              {maried2.name ?? m2}
              {options.option1 && <>({m2})</>}
              {options.option8 && <>({maried2.x8})</>}
              {options.option9 && <>({maried2.x9})</>}
              {options.option22 && (
                <>
                  {[maried2.z1, maried2.z2, maried2.z3].join('')
                    ? `(${[maried2.z1, maried2.z2, maried2.z3].join('-')})`
                    : ''}
                </>
              )}
            </>
          )}
          {maried3 && (
            <>
              {', '}
              {maried3.name ?? m3}
              {options.option1 && <>({m3})</>}
              {options.option8 && <>({maried3.x8})</>}
              {options.option9 && <>({maried3.x9})</>}
              {options.option22 && (
                <>
                  {[maried3.z1, maried3.z2, maried3.z3].join('')
                    ? `(${[maried3.z1, maried3.z2, maried3.z3].join('-')})`
                    : ''}
                </>
              )}
            </>
          )}
          {options.option21 && <>{note ? ` -- ${note} ` : ''}</>}
          {/* TODO: search "option1" in source code your find where it defined */}
          {/*options.option1 && '上方 option1 已經打勾'*/}
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
