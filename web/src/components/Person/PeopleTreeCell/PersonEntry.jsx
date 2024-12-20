import { Fragment, useState } from 'react'

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined'
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined'
import Button from '@mui/material/Button'
import styled from 'styled-components'

import './PersonEntry.css'
import { useScaffoldContext } from '../../../layouts/ScaffoldLayout/contexts/optionContext'
import {
  // idTOLabel_x2,
  // idTOLabel_x3,
  // idTOLabel_x4,
  idTOLabel_x6,
  idTOLabel_x81,
  idTOLabel_x82,
  idTOLabel_x83,
  // idTOLabel_q1,
  // idTOLabel_q2,
  // idTOLabel_n1,
  // idTOLabel_n2,
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
  --size: 24px;
  height: var(--size);
  line-height: var(--size);
  display: flex;
  align-items: center;

  ${StyledLi}:last-child > & {
    align-items: flex-start;

    & > .line-left {
      left: 0px;

      & + span {
        position: relative;
        left: 1px;
      }
    }
  }

  & > span:not(.line):not(.line-left) {
    height: var(--size);
    line-height: var(--size);
    display: inline-block;
  }
`

const StyledButton = styled(Button)`
  && {
    display: none;
    margin-left: 10px;
    height: var(--size);
    line-height: var(--size);
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

const StyledExpandableWrapper = styled('span')`
  display: inline-block;
  vertical-align: bottom;
`

const StyledPresentationSpan = styled(({ isNotAutoWrap: _, ...props }) => (
  <span {...props} />
))`
  white-space: ${(props) => (props.isNotAutoWrap ? 'nowrap' : 'normal')};
`

function year_x81(x8) {
  if (x8 > 999) {
    return ((x8 + 6) % 10) + 1
  } else {
    return ((x8 + 7) % 10) + 1
  }
}

function year_x82(x8) {
  if (x8 > 999) {
    return ((x8 + 8) % 12) + 1
  } else {
    return ((x8 + 11) % 12) + 1
  }
}

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
  const [isExpanded, setExpand] = useState(options.isExpandedByDefault)
  return (
    <StyledLi>
      <StyledSpan className="item-wrapper">
        <span className="line"></span>
        <span className="line-left"></span>
        <StyledPresentationSpan
          isNotAutoWrap={options.isNotAutoWrap}
          className={`${viewDetail && viewDetail.id === id ? 'is-viewed' : ''}`}
          onClick={() => {
            if (!childrenItems?.length) {
              return
            }
            setExpand((prevState) => !prevState)
          }}
          role="presentation"
        >
          <StyledExpandableWrapper>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
          </StyledExpandableWrapper>
          {options.option5 && x5}
          {options.option6 && x6 && <>{idTOLabel_x6[x6]} </>}
          {name ?? id} {options.option1 && <>({id})</>}
          {(options.option8 || options.option81 || options.option82) && x8 && (
            <>
              {'('}
              {options.option8 && <>{x8}</>}
              {options.option81 && <>{idTOLabel_x81[year_x81(x8)]}</>}
              {options.option81 && <>{idTOLabel_x82[year_x82(x8)]}</>}
              {options.option82 && <>{idTOLabel_x83[year_x82(x8)]}</>}
              {')'}
            </>
          )}
          {options.option9 && x9 && <>({x9})</>}
          {options.option22 && (
            <>{[z1, z2, z3].join('') ? `(${[z1, z2, z3].join('-')})` : ''}</>
          )}
          {maried1 && (
            <>
              {', '}
              {maried1.name ?? m1} {options.option1 && <>({m1})</>}
              {(options.option8 || options.option81 || options.option82) &&
                maried1.x8 && (
                  <>
                    {'('}
                    {options.option8 && <>{maried1.x8}</>}
                    {options.option81 && (
                      <>{idTOLabel_x81[year_x81(maried1.x8)]}</>
                    )}
                    {options.option81 && (
                      <>{idTOLabel_x82[year_x82(maried1.x8)]}</>
                    )}
                    {options.option82 && (
                      <>{idTOLabel_x83[year_x82(maried1.x8)]}</>
                    )}
                    {')'}
                  </>
                )}
              {options.option9 && maried1.x9 && <>({maried1.x9})</>}
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
              {maried2.name ?? m2} {options.option1 && <>({m2})</>}
              {(options.option8 || options.option81 || options.option82) &&
                maried2.x8 && (
                  <>
                    {'('}
                    {options.option8 && <>{maried2.x8}</>}
                    {options.option81 && (
                      <>{idTOLabel_x81[year_x81(maried2.x8)]}</>
                    )}
                    {options.option81 && (
                      <>{idTOLabel_x82[year_x82(maried2.x8)]}</>
                    )}
                    {options.option82 && (
                      <>{idTOLabel_x83[year_x82(maried2.x8)]}</>
                    )}
                    {')'}
                  </>
                )}
              {options.option9 && maried2.x9 && <>({maried2.x9})</>}
              {options.option22 && (
                <>
                  {[maried2.z1, maried2.z2, maried2.z3].join('')
                    ? `(${[maried2.z1, maried2.z2, maried2.z3].join('-')})`
                    : ''}
                </>
              )}
            </>
          )}
{/*
          {maried3 && (
            <>
              {', '}
              {maried3.name ?? m3} {options.option1 && <>({m3})</>}
              {(options.option8 || options.option81 || options.option82) &&
                maried3.x8 && (
                  <>
                    {'('}
                    {options.option8 && <>{maried3.x8}</>}
                    {options.option81 && (
                      <>{idTOLabel_x81[year_x81(maried3.x8)]}</>
                    )}
                    {options.option81 && (
                      <>{idTOLabel_x82[year_x82(maried3.x8)]}</>
                    )}
                    {options.option82 && (
                      <>{idTOLabel_x83[year_x82(maried3.x8)]}</>
                    )}
                    {')'}
                  </>
                )}
              {options.option9 && maried3.x9 && <>({maried3.x9})</>}
              {options.option22 && (
                <>
                  {[maried3.z1, maried3.z2, maried3.z3].join('')
                    ? `(${[maried3.z1, maried3.z2, maried3.z3].join('-')})`
                    : ''}
                </>
              )}
            </>
          )}
*/}
          {options.option21 && <>{note ? ` -- ${note} ` : ''}</>}
          {/* TODO: search "option1" in source code your find where it defined */}
          {/*options.option1 && '上方 option1 已經打勾'*/}
        </StyledPresentationSpan>
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
      {childrenItems?.length > 0 && (
        <ul
          className="tree"
          style={
            !isExpanded ? { visibility: 'hidden', height: 0, widht: 0 } : {}
          }
        >
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
