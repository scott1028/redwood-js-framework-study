export const schema = gql`
  type Person {
    x1: Int!
    x2: Int
    x3: Int
    x4: Int
    x5: Int
    x6: Int
    name: String
    x8: Int
    x9: Int
    p1: Int
    p2: Int
    m1: Int
    m2: Int
    m3: Int
    p0: Int
    q1: Int
    q2: Int
    m0: Int
    n1: Int
    n2: Int
    note: String
    z1: Int
    z2: Int
    z3: Int
    label: String
    b1: Int
    b2: Int
    b3: Int
    dt: DateTime
    parent: Person
    children: [Person]!
  }

  type Query {
    people: [Person!]! @requireAuth
    person(x1: Int!): Person @requireAuth
  }

  input CreatePersonInput {
    x2: Int
    x3: Int
    x4: Int
    x5: Int
    x6: Int
    name: String
    x8: Int
    x9: Int
    p1: Int
    p2: Int
    m1: Int
    m2: Int
    m3: Int
    p0: Int
    q1: Int
    q2: Int
    m0: Int
    n1: Int
    n2: Int
    note: String
    z1: Int
    z2: Int
    z3: Int
    label: String
    b1: Int
    b2: Int
    b3: Int
    dt: DateTime
  }

  input UpdatePersonInput {
    x2: Int
    x3: Int
    x4: Int
    x5: Int
    x6: Int
    name: String
    x8: Int
    x9: Int
    p1: Int
    p2: Int
    m1: Int
    m2: Int
    m3: Int
    p0: Int
    q1: Int
    q2: Int
    m0: Int
    n1: Int
    n2: Int
    note: String
    z1: Int
    z2: Int
    z3: Int
    label: String
    b1: Int
    b2: Int
    b3: Int
    dt: DateTime
  }

  type Mutation {
    createPerson(input: CreatePersonInput!): Person! @requireAuth
    updatePerson(x1: Int!, input: UpdatePersonInput!): Person! @requireAuth
    deletePerson(x1: Int!): Person! @requireAuth
  }
`
