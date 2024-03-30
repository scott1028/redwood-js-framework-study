import { Link, routes } from '@redwoodjs/router'

import Users from 'src/components/User/Users'

export const QUERY = gql`
  query FindUsers {
    users {
      id
      parentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.newUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ users }) => {
  console.debug('users:', users);
  const register = new Map();
  users.sort((nextUser, currUser) => (currUser.parentId ?? -1) - (nextUser.parentId ?? -1)).forEach(user => {
    const userNode = { ...user, children: [] };
    if (!userNode.parentId) {
      register.set(user.id, userNode);
    } else {
      register.get(userNode.parentId).children.push(userNode);
      register.set(userNode.id, userNode);
    }
  });
  console.debug('register:', register);
  return <Users users={users} />
}
