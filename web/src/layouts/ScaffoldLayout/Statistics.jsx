import { useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/Person/PeopleTreeCell'

const Statistics = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  let count_kind1 = 0
  let count_kind2 = 0
  let count_male = 0
  let count_female = 0
  let count_gen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let n = 0

  people.forEach((person) => {
    switch (person.x3) {
      case 1:
        count_gen[1] += 1
        break
      case 2:
        count_gen[2] += 1
        break
      case 3:
        count_gen[3] += 1
        break
      case 4:
        count_gen[4] += 1
        break
      case 5:
        count_gen[5] += 1
        break
      case 6:
        count_gen[6] += 1
        break
      case 7:
        count_gen[7] += 1
        break
      case 8:
        count_gen[8] += 1
        break
      case 9:
        count_gen[9] += 1
        break
      case 10:
        count_gen[10] += 1
        break
      case 11:
        count_gen[11] += 1
        break
      case 12:
        count_gen[12] += 1
        break
    }
  })

  return (
    <>
      <span>
        (
        {[
          count_gen[1],
          count_gen[2],
          count_gen[3],
          count_gen[4],
          count_gen[5],
          count_gen[6],
          count_gen[7],
          count_gen[8],
          count_gen[9],
          count_gen[10],
          count_gen[11],
          count_gen[12],
        ].join(', ')}
        )
      </span>
    </>
  )
}

/*
  people.forEach((person) => {
    if (person.x2 === 1) {
      count_gen[1] += 1
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
        {[
          count_kind1,
          count_kind2,
          count_male,
          count_female,
        ].join(', ')}
      </span>
    </>
  )
}
*/

export default Statistics
