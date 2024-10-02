import styled from 'styled-components'

import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { UPDATE_PERSON_MUTATION } from 'src/components/Person/EditPersonCell'
import { QUERY } from 'src/components/Person/PeopleTreeCell'
import PersonForm from 'src/components/Person/PersonForm'

const StyledPersonForm = styled(PersonForm)`
  & form {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr auto 1fr auto 1fr;
    grid-column-gap: 10px;

    & > * {
      display: flex;
      align-items: center;
    }
  }
`

export const Detail = ({ person, children }) => {
  const { refetch } = useQuery(QUERY)
  const [updatePerson, { loading, error }] = useMutation(
    UPDATE_PERSON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Person updated', { duration: 750 })
        refetch()
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
    <StyledPersonForm
      person={person}
      onSave={onSave}
      error={error}
      loading={loading}
    >
      {children}
    </StyledPersonForm>
  )
}

export default Detail
