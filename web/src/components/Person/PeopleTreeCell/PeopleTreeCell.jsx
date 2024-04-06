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
const wifeId1Key = 'm1'
const wifeId2Key = 'm2'
const wifeId3Key = 'm3'

export const Success = ({ people: _users, rootId }) => {
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
      [wifeId1Key]: wifeId1,
      [wifeId2Key]: wifeId2,
      [wifeId3Key]: wifeId3,
    } = user
    const restProperties = READABLE_PROPERTY_KEYS.map((key) => ({
      [key]: user[key],
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
    const userNode = {
      ...restProperties,
      id,
      parentId,
      childrenItems: [],
      wifeId1,
      wifeId2,
      wifeId3,
      wife1: null,
      wife2: null,
      wife3: null,
    }
    register.set(userNode.id, userNode)
  })
  // map relationship
  users.forEach((user) => {
    const {
      [idKey]: id,
      [parentIdKey]: parentId,
      [wifeId1Key]: wifeId1,
      [wifeId2Key]: wifeId2,
      [wifeId3Key]: wifeId3,
    } = user
    const userNode = register.get(id)
    if (parentId) {
      register.set(id, userNode)
      register.get(parentId).childrenItems.push(userNode)
    }
    if (wifeId1) {
      userNode.wife1 = register.get(wifeId1)
    }
    if (wifeId2) {
      userNode.wife2 = register.get(wifeId2)
    }
    if (wifeId3) {
      userNode.wife3 = register.get(wifeId3)
    }
  })
  const items = Object.values(Object.fromEntries(register)).filter((user) => {
    if (rootId) {
      return String(user.id) === rootId
    }
    return !user.parentId
  })
  return (
    <ul className="tree tree-padding tree-vertical-lines tree-horizontal-lines tree-summaries tree-markers tree-buttons">
      {items.map((item) => (
        <PersonEntry
          {...item}
          key={item.id}
          id={item.id}
          parentId={item.parentId}
          childrenItems={item.childrenItems}
        />
      ))}
    </ul>
  )
}
