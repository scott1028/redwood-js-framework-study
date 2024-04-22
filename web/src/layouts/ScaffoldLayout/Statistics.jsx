import { useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/Person/PeopleTreeCell'

const Statistics = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  let totalMYanPeople = 0
  let totalFYanPeople = 0
  let totalNonMYanPeople = 0
  let totalNonFYanPeople = 0
  people.forEach((person) => {
    if (person.x2 === 1) {
      if (person.x6 === 1) {
        totalMYanPeople += 1
      } else if (person.x6 === 2) {
        totalFYanPeople += 1
      }
    } else if (person.x2 === 2) {
      if (person.x6 === 1) {
        totalNonMYanPeople += 1
      } else if (person.x6 === 2) {
        totalNonFYanPeople += 1
      }
    }
  })
  return (
    <>
      <span>
        {[
          totalMYanPeople,
          totalFYanPeople,
          totalNonMYanPeople,
          totalNonFYanPeople,
        ].join(',')}
      </span>
    </>
  )
}

export default Statistics
