import { useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/Person/PeopleTreeCell'

const Statistics = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  let count_kind1 = 0
  let count_kind2 = 0
  let count_male = 0
  let count_female = 0

  people.forEach((person) => {
    if (person.x2 === 1) {
      count_kind1 += 1
      if (person.x6 === 1) {
        count_male += 1
      } else if (person.x6 === 2) {
        count_female += 1
      }
    } else if (person.x2 === 2) {
      count_kind2 += 1
      if (person.x6 === 1) {
        count_male += 1
      } else if (person.x6 === 2) {
        count_female += 1
      }
    }
  })

  return (
    <>
      <span>
        {[count_kind1, count_kind2, count_male, count_female].join(', ')}
      </span>
    </>
  )
}

export default Statistics
