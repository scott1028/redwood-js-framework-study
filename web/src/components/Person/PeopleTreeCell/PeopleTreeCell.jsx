import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import styled from 'styled-components'

import { useScaffoldContext } from '../../../layouts/ScaffoldLayout/contexts'
import Detail from '../components/Detail'

import PersonEntry from './PersonEntry'

const READABLE_PROPERTY_KEYS = [
  'x1',
  'x2',
  'x3',
  'x4',
  'x5',
  'x6',
  'name',
  'x8',
  'x9',
  'p1',
  'p2',
  'm1',
  'm2',
  'm3',
  'p0',
  'q1',
  'q2',
  'm0',
  'n1',
  'n2',
  'h1',
  'note',
  'z1',
  'z2',
  'z3',
  'label',
]

export const QUERY = gql`
  query FindPeopleTree {
    people {
      x1
      x2
      x3
      x4
      x5
      x6
      name
      x8
      x9
      p1
      p2
      m1
      m2
      m3
      p0
      q1
      q2
      m0
      n1
      n2
      note
      z1
      z2
      z3
      label
    }
  }
`

export const Loading = () => <div>Loading...</div>

const idKey = 'x1'
const parentIdKey = 'p0'
const mariedId1Key = 'm1'
const mariedId2Key = 'm2'
const mariedId3Key = 'm3'

const TopSection = styled('div')`
  flex: 1;
  overflow: auto;
`

const BottomSection = styled(Box)`
  height: 400px;
  overflow: auto;

  @media print {
    display: none;
  }
`

const RightSectionContent = styled('div')`
  padding-left: 5px;
  padding-bottom: 5px;
`

export const Success = ({ people: _users, rootId }) => {
  const [_options, _dispatch, getOnChange] = useScaffoldContext()
  const [viewDetail, _onViewDetail] = useState(null)
  const onViewDetail = (value) => {
    getOnChange('register1')(null, value?.x1)
    _onViewDetail(value)
  }
  const register = new Map()
  const users = [..._users].sort((nextUser, currUser) => {
    if (nextUser[parentIdKey] && currUser[parentIdKey]) {
      return (nextUser[idKey] ?? 0) - (currUser[idKey] ?? 0)
    }
    return (nextUser[parentIdKey] ?? 0) - (currUser[parentIdKey] ?? 0)
  })
  // cache map
  users.forEach((user) => {
    const {
      [idKey]: id,
      [parentIdKey]: parentId,
      [mariedId1Key]: mariedId1,
      [mariedId2Key]: mariedId2,
      [mariedId3Key]: mariedId3,
    } = user
    const restProperties = READABLE_PROPERTY_KEYS.map((key) => ({
      [key]: user[key],
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
    const userNode = {
      ...restProperties,
      id,
      parentId,
      childrenItems: [],
      mariedId1,
      mariedId2,
      mariedId3,
      maried1: null,
      maried2: null,
      maried3: null,
    }
    register.set(userNode.id, userNode)
  })
  // map relationship
  users.forEach((user) => {
    const {
      [idKey]: id,
      [parentIdKey]: parentId,
      [mariedId1Key]: mariedId1,
      [mariedId2Key]: mariedId2,
      [mariedId3Key]: mariedId3,
    } = user
    const userNode = register.get(id)
    if (parentId) {
      register.set(id, userNode)
      register.get(parentId).childrenItems.push(userNode)
    }
    if (mariedId1) {
      userNode.maried1 = register.get(mariedId1)
    }
    if (mariedId2) {
      userNode.maried2 = register.get(mariedId2)
    }
    if (mariedId3) {
      userNode.maried3 = register.get(mariedId3)
    }
  })
  const items = Object.values(Object.fromEntries(register)).filter((user) => {
    if (rootId) {
      return String(user.id) === rootId
    }
    return !user.parentId
  })
  return (
    <div className="people-tree-cell-wrapper">
      <TopSection>
        <ul className="tree tree-padding tree-vertical-lines tree-horizontal-lines tree-summaries tree-markers tree-buttons">
          {items.map((item) => (
            <PersonEntry
              {...item}
              key={item.id}
              id={item.id}
              parentId={item.parentId}
              childrenItems={item.childrenItems}
              viewDetail={viewDetail}
              onViewDetail={onViewDetail}
            />
          ))}
        </ul>
      </TopSection>
      {viewDetail && (
        <BottomSection boxShadow={3} borderRadius={2} padding={2}>
          <RightSectionContent>
            <Detail person={viewDetail} key={viewDetail.id}>
              {(refForm) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: -16,
                    paddingTop: 16,
                    paddingBottom: 8,
                    background: '#fff',
                    zIndex: 1,
                  }}
                >
                  <Button onClick={() => onViewDetail(null)}>Close</Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => refForm.current.requestSubmit()}
                  >
                    Save
                  </Button>
                </div>
              )}
            </Detail>
          </RightSectionContent>
        </BottomSection>
      )}
    </div>
  )
}
