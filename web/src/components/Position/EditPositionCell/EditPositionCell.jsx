import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PositionForm from 'src/components/Position/PositionForm'

export const QUERY = gql`
  query EditPositionById($id: Int!) {
    position: position(id: $id) {
      id
      x10
      x11
      x12
      x3
      x4
      x5
      name
      personal
      checked
      deleted
      note
    }
  }
`

const UPDATE_POSITION_MUTATION = gql`
  mutation UpdatePositionMutation($id: Int!, $input: UpdatePositionInput!) {
    updatePosition(id: $id, input: $input) {
      id
      x10
      x11
      x12
      x3
      x4
      x5
      name
      personal
      checked
      deleted
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ position }) => {
  const [updatePosition, { loading, error }] = useMutation(
    UPDATE_POSITION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Position updated')
        navigate(routes.positions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updatePosition({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Position {position?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PositionForm
          position={position}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
