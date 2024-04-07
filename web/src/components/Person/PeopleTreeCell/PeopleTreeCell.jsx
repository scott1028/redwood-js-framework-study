import { useState } from 'react'

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

const idTOLabel_x2 = {
  0: '刪除',
  1: '宗親',
  2: '配偶',
}

const idTOLabel_x3 = {
  0: null,
  1: '廣一',
  2: '廣二',
  3: '廣三',
  4: '廣四',
  5: '廣五',
  6: '良房',
}

const idTOLabel_x4 = {
  0: null,
  1: '壽字輩',
  2: '仕字輩',
  3: '添字輩',
  4: '江字輩',
  5: '乾字輩',
  6: '坤字輩',
  7: '寬字輩',
  8: '盛字輩',
  9: '永字輩',
  10: '和字輩',
  11: '發字輩',
  12: '登字輩',
  13: '雲字輩',
  14: '朝字輩',
  15: '富字輩',
  16: '貴字輩',
  17: '創字輩',
  18: '新字輩',
  19: '傳字輩',
  20: '康字輩',
  21: '祥字輩',
}

const idTOLabel_x5 = {
  0: null,
  1: '男',
  2: '女',
}

const idTOLabel_q1 = {
  0: null,
  1: '嫡生',
  2: '入嗣',
  3: '承鼎',
  4: '收養',
  5: '託養',
}

const idTOLabel_q2 = {
  0: null,
  1: '失婚',
  2: '出嗣',
  3: '失蹤',
  4: '幼亡',
}

const idTOLabel_n1 = {
  0: null,
  1: '入嫁',
  2: '出嫁',
  3: '入贅',
  4: '出贅',
  5: '平婚',
}

const idTOLabel_n2 = {
  0: null,
  1: '離婚',
  2: '改嫁',
  3: '失蹤',
  4: '早逝',
}

export const Loading = () => <div>Loading...</div>

const idKey = 'x1'
const parentIdKey = 'p0'
const mariedId1Key = 'm1'
const mariedId2Key = 'm2'
const mariedId3Key = 'm3'

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
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: 72,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <div style={{ flex: 1, overflow: 'auto' }}>
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
      </div>
      <div style={{ width: 'fit-content' }}>
        {viewDetail && (
          <div
            style={{
              border: '1px solid blue',
              overflow: 'auto',
              paddingLeft: 5,
              paddingRight: 20,
              paddingBottom: 5,
            }}
          >
            {/* <pre>{ JSON.stringify(viewDetail, null, 2) }</pre> */}
            <div>(1) 索引：{viewDetail.x1}</div>
            <div>
              (2) 類別：{viewDetail.x2} {idTOLabel_x2[viewDetail.x2]}
            </div>
            <div>
              (3) 房序：{viewDetail.x3} {idTOLabel_x3[viewDetail.x3]}
            </div>
            <div>
              (4) 世代：{viewDetail.x4} {idTOLabel_x4[viewDetail.x4]}
            </div>
            <div>
              (5) 性別：{viewDetail.x5} {idTOLabel_x5[viewDetail.x5]}
            </div>
            <div>(6) 排行：{viewDetail.x6}</div>
            <div>(7) 名字：{viewDetail.name}</div>
            <div>(8) 出生：西元 {viewDetail.x8}</div>
            <div>(9) 享年：{viewDetail.x9}</div>
            <div>
              (10) 父親：{viewDetail.p1}{' '}
              {register.has(viewDetail.p1) && register.get(viewDetail.p1).name}
            </div>
            <div>(11) 母親：{viewDetail.p2}</div>
            <div>(12) 婚配：{viewDetail.m1}</div>
            <div>(13) 婚配：{viewDetail.m2}</div>
            <div>(14) 婚配：{viewDetail.m3}</div>
            <div>(15) 承鼎：{viewDetail.p0}</div>
            <div>
              (16) 屬性：{viewDetail.q1} {idTOLabel_q1[viewDetail.q1]}
            </div>
            <div>
              (17) 註記：{viewDetail.q2} {idTOLabel_q2[viewDetail.q2]}
            </div>
            <div>(18) 婚主：{viewDetail.m0}</div>
            <div>
              (19) 屬性：{viewDetail.n1} {idTOLabel_q1[viewDetail.n1]}
            </div>
            <div>
              (20) 註記：{viewDetail.n2} {idTOLabel_q2[viewDetail.n2]}
            </div>
            <div>(21) 祿位：{viewDetail.h1}</div>
            <div>(22) 備註：{viewDetail.note}</div>
            <br />
            <button onClick={() => onViewDetail(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
