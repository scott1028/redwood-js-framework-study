export const schema = gql`
  type Position {
    id: Int!
    x10: Int
    x11: Int
    x12: Int
    x3: Int
    x4: Int
    x5: Int
    name: String
    personal: Int
    checked: Boolean
    deleted: Boolean
    note: String
    person: Person
  }

  type Query {
    positions: [Position!]! @requireAuth
    position(id: Int!): Position @requireAuth
  }

  input CreatePositionInput {
    x10: Int
    x11: Int
    x12: Int
    x3: Int
    x4: Int
    x5: Int
    name: String
    personal: Int
    checked: Boolean
    deleted: Boolean
    note: String
  }

  input UpdatePositionInput {
    x10: Int
    x11: Int
    x12: Int
    x3: Int
    x4: Int
    x5: Int
    name: String
    personal: Int
    checked: Boolean
    deleted: Boolean
    note: String
  }

  type Mutation {
    createPosition(input: CreatePositionInput!): Position! @requireAuth
    updatePosition(id: Int!, input: UpdatePositionInput!): Position!
      @requireAuth
    deletePosition(id: Int!): Position! @requireAuth
  }
`
