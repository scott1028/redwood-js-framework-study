import Person from 'src/components/Person/Person'

export const QUERY = gql`
  query FindPersonByX1($x1: Int!) {
    person: person(x1: $x1) {
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

export const Empty = () => <div>Person not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ person }) => {
  return <Person person={person} />
}
