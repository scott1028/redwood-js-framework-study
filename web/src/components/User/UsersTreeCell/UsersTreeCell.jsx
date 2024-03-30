import UserEntry from './UserEntry'

import './userEntry.css'

export const QUERY = gql`
  query FindUsers {
    users {
      id
      parentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ users: _users }) => {
  const register = new Map()
  const users = [..._users].sort((nextUser, currUser) => {
    if (nextUser.parentId && currUser.parentId) {
      return (nextUser.id ?? 0) - (currUser.id ?? 0)
    }
    return (nextUser.parentId ?? 0) - (currUser.parentId ?? 0)
  })
  // cache map
  users.forEach((user) => {
    const { id, parentId } = user
    const userNode = { id, parentId, childrenItems: [] }
    register.set(userNode.id, userNode)
  })
  // map relationship
  users.forEach((user) => {
    const { id, parentId } = user
    const userNode = register.get(id)
    if (parentId) {
      register.set(id, userNode)
      register.get(parentId).childrenItems.push(userNode)
    }
  })
  const items = Object.values(Object.fromEntries(register)).filter(
    (user) => !user.parentId
  )
  return (
    <ul className="tree tree-padding tree-vertical-lines tree-horizontal-lines tree-summaries tree-markers tree-buttons">
      {items.map((item) => (
        <UserEntry
          key={item.id}
          id={item.id}
          parentId={item.parentId}
          childrenItems={item.childrenItems}
        />
      ))}
    </ul>
  )
}
