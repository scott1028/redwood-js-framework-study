import { styled } from '@mui/material/styles'

import { truncate } from 'src/lib/formatters'

import { useScaffoldContext } from '../../layouts/ScaffoldLayout/contexts/optionContext'

import TableHeaders from './TableHeaders'

export const QUERY = gql`
  query FindPeopleRelationship {
    people {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const Td = styled('td')({
  height: 30,
  textAlign: 'center',
  // paddingLeft: 8,
  // paddingRight: 8,
})

const Table = styled('table', {
  shouldForwardProp: () => true,
})({
  height: 'fit-content',
})

export const Success = ({ people, z1 = -1 }) => {
  const [options] = useScaffoldContext()
  const {
    noX1InMemoTablet: x1,
    noX3InMemoTablet: x3,
    noX4InMemoTablet: x4,
    noP0InMemoTablet: p0,
    noM0InMemoTablet: m0,
  } = options

  /* x => {
      return x;
    }

    function (x) {
      return x;
    }
   */
  // google js's "Object.fromEntries"
  // Object.fromEntries
  // people -> map()
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));
  /*
   {
      12321312: { x1: '...', x2: '...', ...      }
    }
   */
  // ex:peopleMap[x1] === person

  const filteredPeople = people
    .filter((person) => person.z1 === +z1)
    .sort((person1, person2) => person1.z3 - person2.z3)
  const filteredMalePeople = filteredPeople.filter((person) => person.x6 === 1)
  const filteredFemalePeople = filteredPeople.filter((person) => person.x6 === 2)
  const blackList = {
    x1,
    x3,
    x4,
    p0,
    m0,
  }
  window.blackList = blackList
  return (
    <div>
      {Array.from({ length: 32 * 13 }).map((_, rowIdx) => {
        const filteredFemalePeopleByRow = filteredMalePeople.filter(
          (person) => person.z2 === rowIdx + 1
        )
        const filteredMalePeopleByRow = filteredFemalePeople.filter(
          (person) => person.z2 === rowIdx + 1
        )
        if (
          !filteredMalePeopleByRow.length &&
          !filteredFemalePeopleByRow.length
        ) {
          return null
        }
        return (
          <div
            style={{ display: 'flex', gap: 16, marginBottom: 16 }}
            key={rowIdx}
          >
            {[filteredMalePeopleByRow, filteredFemalePeopleByRow].map(
              (outputPeople, columnIdx) => {
                const isReverse = columnIdx === 0
                return (
                  <Table border="1" key={columnIdx}>
                    <thead>
                      <tr>
                        <TableHeaders
                          isReverse={isReverse}
                          blackList={blackList}
                        />
                      </tr>
                    </thead>
                    <tbody>
                      {outputPeople.map((person, columnIdx) => {
                        const elements = [
                          <Td key={`z2-${person.z2}`}>
                            {truncate(person.z2)}
                          </Td>,
                          <Td key={`z3-${person.z3}`}>
                            {truncate(person.z3)}
                          </Td>,
                          <Td key={`label-${person.label}`}>
                            {truncate(person.label)}
                          </Td>,
                          <Td key={`b1-${person.b1}`}>
                            {truncate(person.b1) == 1 ? 'O' : ''}
                          </Td>,
                          ...(!x1
                            ? [
                                <Td key={`x1-${person.x1}`}>
                                  {truncate(person.x1)}
                                </Td>,
                              ]
                            : []),
                          ...(!x3
                            ? [
                                <Td key={`x3-${person.x3}`}>
                                  {truncate(person.x3)}
                                </Td>,
                              ]
                            : []),
                          ...(!x4
                            ? [
                                <Td key={`x4-${person.x4}`}>
                                  {truncate(person.x4)}
                                </Td>,
                              ]
                            : []),
                            ...(!p0
                              ? [
                                  <Td key={`p0-${person.p0}`}>
                                    {/* truncate(person.p0) */}
                                    {truncate(peopleMap[person.p0] ? peopleMap[person.p0].name : '')}
                                  </Td>,
                                ]
                              : []),
                            ...(!m0
                              ? [
                                  <Td key={`m0-${person.m0}`}>
                                    {/* truncate(person.m0) */}
                                    {/* {truncate(peopleMap[person.m0]?.name)} */}
                                    {truncate(peopleMap[person.m0] ? peopleMap[person.m0].name : '')}
                                  </Td>,
                                ]
                              : []),
                        ].map((element) => element)
                        return (
                          <tr key={`${rowIdx}-${columnIdx}`}>
                            {isReverse ? elements.toReversed() : elements}
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                )
              }
            )}
          </div>
        )
      })}
    </div>
  )
}
