import { useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/Person/PeopleTreeCell'

const Statistics = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  let totalMYenPeople = 0
  let totalFYenPeople = 0
  let totalNonMYenPeople = 0
  let totalNonFYenPeople = 0
  people.forEach((person) => {
    if (person.x2 === 1) {
      if (person.x6 === 1) {
        totalMYenPeople += 1
      } else if (person.x6 === 2) {
        totalFYenPeople += 1
      }
    } else if (person.x2 === 2) {
      if (person.x6 === 1) {
        totalNonMYenPeople += 1
      } else if (person.x6 === 2) {
        totalNonFYenPeople += 1
      }
    }
  })
  return (
    <>
      <span>
        {[
          totalMYenPeople,
          totalFYenPeople,
          totalNonMYenPeople,
          totalNonFYenPeople,
        ].join(',')}
      </span>
    </>
  )
}

export default Statistics
