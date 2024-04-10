import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import PositionForm from 'src/components/Position/PositionForm'

const CREATE_POSITION_MUTATION = gql`
  mutation CreatePositionMutation($input: CreatePositionInput!) {
    createPosition(input: $input) {
      id
    }
  }
`

const NewPosition = () => {
  const [createPosition, { loading, error }] = useMutation(
    CREATE_POSITION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Position created')
        navigate(routes.positions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createPosition({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Position</h2>
      </header>
      <div className="rw-segment-main">
        <PositionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPosition
