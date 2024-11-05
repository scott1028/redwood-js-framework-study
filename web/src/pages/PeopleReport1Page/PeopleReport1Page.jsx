import { useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/Person/PeopleTreeCell'

const PeopleReport1Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  // const peopleMap = Object.fromEntries(
  //   people.map((person) => [person.x1, person])
  // )
  // const peopleX21 = people.filter((person) => person.p0)

  let keyGEN = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let peopleLink = [keyGEN]

  keyGEN[0] = people[0]?.x1 ?? 0
  const peopleG01 = people.filter((person) => person.p0 === keyGEN[0])
  if (peopleG01.length === 0) peopleLink.push([...keyGEN])
  let indexG01 = 0
  while (indexG01 < peopleG01.length) {
    keyGEN[1] = peopleG01[indexG01].x1 ?? 0
    const peopleG02 = people.filter((person) => person.p0 === keyGEN[1])
    if (peopleG02.length === 0) peopleLink.push([...keyGEN])
    let indexG02 = 0
    while (indexG02 < peopleG02.length) {
      keyGEN[2] = peopleG02[indexG02].x1 ?? 0
      const peopleG03 = people.filter((person) => person.p0 === keyGEN[2])
      if (peopleG03.length === 0) peopleLink.push([...keyGEN])
      let indexG03 = 0
      while (indexG03 < peopleG03.length) {
        keyGEN[3] = peopleG03[indexG03].x1 ?? 0
        const peopleG04 = people.filter((person) => person.p0 === keyGEN[3])
        if (peopleG04.length === 0) peopleLink.push([...keyGEN])
        let indexG04 = 0
        while (indexG04 < peopleG04.length) {
          keyGEN[4] = peopleG04[indexG04].x1 ?? 0
          const peopleG05 = people.filter((person) => person.p0 === keyGEN[4])
          if (peopleG05.length === 0) peopleLink.push([...keyGEN])
          let indexG05 = 0
          while (indexG05 < peopleG05.length) {
            keyGEN[5] = peopleG05[indexG05].x1 ?? 0
            peopleLink.push([...keyGEN])
            indexG05++
          }
          indexG04++
        }
        indexG03++
      }
      indexG02++
    }
    indexG01++
  }

  // const addedPeople = [];
  // const people2 = [];
  // const root = people.find(person => person.x3 === 1);
  // let row = [];
  // let cursor = root;
  // row.push(cursor);
  // addedPeople.push(cursor);
  // while (true) {
  //   const person = people.find(person => person.p0 === cursor.x1 && !addedPeople.includes(person));
  //   if (!person) {
  //     people2.push(row);
  //     row = [];
  //   }
  //   row.push(person);
  //   cursor = person;
  // }
  // people.forEach(person => {
  // });
  window.peopleLink = peopleLink

  return (
    <table border="1">
      <thead>
        <tr>
          <td width="80"></td>
          <td width="80">1世</td>
          <td width="80">2世</td>
          <td width="80">3世</td>
          <td width="80">4世</td>
          <td width="80">5世</td>
          <td width="80">6世</td>
          <td width="80">7世</td>
          <td width="80">8世</td>
          <td width="80">9世</td>
          <td width="80">10世</td>
          <td width="80">11世</td>
          <td width="80">12世</td>
        </tr>
        <tr>{peopleLink.length}</tr>
      </thead>
      <tbody>
        {/*
          <tr>
            <td></td>
            <td>{peopleLink[0]?.keyGEN[1] ?? ''}</td>
            <td>{peopleLink[0]?.keyGEN[2] ?? ''}</td>
            <td>{peopleLink[0]?.keyGEN[3] ?? ''}</td>
            <td>{peopleLink[0]?.keyGEN[4] ?? ''}</td>
            <td>{peopleLink[0]?.keyGEN[5] ?? ''}</td>
          </tr>

          <tr>
            <td></td>
            <td>{peopleLink[1].keyGEN[1]}</td>
            <td>{peopleLink[1].keyGEN[2]}</td>
            <td>{peopleLink[1].keyGEN[3]}</td>
            <td>{peopleLink[1].keyGEN[4]}</td>
            <td>{peopleLink[1].keyGEN[5]}</td>
          </tr>
          <tr>
            <td></td>
            <td>{peopleLink[2].keyGEN[1]}</td>
            <td>{peopleLink[2].keyGEN[2]}</td>
            <td>{peopleLink[2].keyGEN[3]}</td>
            <td>{peopleLink[2].keyGEN[4]}</td>
            <td>{peopleLink[2].keyGEN[5]}</td>
          </tr>
          <tr>
            <td></td>
            <td>{peopleLink[3].keyGEN[1]}</td>
            <td>{peopleLink[3].keyGEN[2]}</td>
            <td>{peopleLink[3].keyGEN[3]}</td>
            <td>{peopleLink[3].keyGEN[4]}</td>
            <td>{peopleLink[3].keyGEN[5]}</td>
          </tr>
          <tr>
            <td></td>
            <td>{peopleLink[0].keyGEN[1]}</td>
            <td>{peopleLink[0].keyGEN[2]}</td>
            <td>{peopleLink[0].keyGEN[3]}</td>
            <td>{peopleLink[0].keyGEN[4]}</td>
            <td>{peopleLink[0].keyGEN[5]}</td>
          </tr>
*/}
      </tbody>
    </table>
  )
}

export default PeopleReport1Page
