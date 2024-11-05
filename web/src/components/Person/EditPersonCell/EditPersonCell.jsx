import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PersonForm from 'src/components/Person/PersonForm'

export const QUERY = gql`
  query EditPersonByX1($x1: Int!) {
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
      b1
      b2
      b3
      dt
    }
  }
`

export const UPDATE_PERSON_MUTATION = gql`
  mutation UpdatePersonMutation($x1: Int!, $input: UpdatePersonInput!) {
    updatePerson(x1: $x1, input: $input) {
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
      b1
      b2
      b3
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ person }) => {
  const [updatePerson, { loading, error }] = useMutation(
    UPDATE_PERSON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Person updated', { duration: 750 })
        navigate(routes.people())
      },
      onError: (error) => {
        toast.error(error.message, { duration: 750 })
      },
    }
  )

  const onSave = (input, id) => {
    updatePerson({ variables: { x1: id, input } })
  }

  return (
    <div className="rw-segment" style={ {width:300} }>
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Person {person?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PersonForm
          person={person}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
