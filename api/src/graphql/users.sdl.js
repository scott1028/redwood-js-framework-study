export const schema = gql`
  type User {
    id: Int!
    parentId: Int
    parent: User
    children: [User]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    parentId: Int
  }

  input UpdateUserInput {
    parentId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
