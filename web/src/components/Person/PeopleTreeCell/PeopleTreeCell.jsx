import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import styled from 'styled-components'

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
]

export const QUERY = gql`
  query FindPeople {
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
      h1
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

const idKey = 'x1'
const parentIdKey = 'p0'
const mariedId1Key = 'm1'
const mariedId2Key = 'm2'
const mariedId3Key = 'm3'

const LeftSection = styled('div')`
  flex: 1;
  overflow: auto;
`

const RightSection = styled(Box)`
  width: fit-content;
  overflow: auto;

  @media print {
    display: none;
  }
`

const RightSectionContent = styled('div')`
  padding-left: 5px;
  padding-right: 20px;
  padding-bottom: 5px;
`

export const Success = ({ people: _users, rootId }) => {
  const [viewDetail, onViewDetail] = useState(null)
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
      <LeftSection>
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
      </LeftSection>
      {viewDetail && (
        <RightSection boxShadow={3} borderRadius={2} padding={2}>
          <RightSectionContent>
            <Detail person={viewDetail} key={viewDetail.id}>
              <div />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={() => onViewDetail(null)}>Close</Button>
                <Button color="primary" variant="contained" type="submit">
                  Save
                </Button>
              </div>
            </Detail>
          </RightSectionContent>
        </RightSection>
      )}
    </div>
  )
}
