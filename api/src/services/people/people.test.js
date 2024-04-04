import {
  people,
  person,
  createPerson,
  updatePerson,
  deletePerson,
} from './people'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('people', () => {
  scenario('returns all people', async (scenario) => {
    const result = await people()

    expect(result.length).toEqual(Object.keys(scenario.person).length)
  })

  scenario('returns a single person', async (scenario) => {
    const result = await person({ x1: scenario.person.one.x1 })

    expect(result).toEqual(scenario.person.one)
  })

  scenario('creates a person', async (scenario) => {
    const result = await createPerson({
      input: {
        x2: 4901039,
        x3: 3237281,
        x4: 3580782,
        x5: 6489786,
        x6: 9106585,
        name: 'String',
        x8: 3995054,
        x9: 5539752,
        p1: 8034784,
        p2: 3154371,
        m1: 1692156,
        m2: 5503684,
        m3: 7059772,
        p0: scenario.person.two.p0,
        q1: 582651,
        q2: 7169774,
        m0: 5537542,
        n1: 1760708,
        n2: 7314322,
        h1: 1723863,
        note: 'String',
      },
    })

    expect(result.x2).toEqual(4901039)
    expect(result.x3).toEqual(3237281)
    expect(result.x4).toEqual(3580782)
    expect(result.x5).toEqual(6489786)
    expect(result.x6).toEqual(9106585)
    expect(result.name).toEqual('String')
    expect(result.x8).toEqual(3995054)
    expect(result.x9).toEqual(5539752)
    expect(result.p1).toEqual(8034784)
    expect(result.p2).toEqual(3154371)
    expect(result.m1).toEqual(1692156)
    expect(result.m2).toEqual(5503684)
    expect(result.m3).toEqual(7059772)
    expect(result.p0).toEqual(scenario.person.two.p0)
    expect(result.q1).toEqual(582651)
    expect(result.q2).toEqual(7169774)
    expect(result.m0).toEqual(5537542)
    expect(result.n1).toEqual(1760708)
    expect(result.n2).toEqual(7314322)
    expect(result.h1).toEqual(1723863)
    expect(result.note).toEqual('String')
  })

  scenario('updates a person', async (scenario) => {
    const original = await person({ x1: scenario.person.one.x1 })
    const result = await updatePerson({
      x1: original.x1,
      input: { x2: 3969865 },
    })

    expect(result.x2).toEqual(3969865)
  })

  scenario('deletes a person', async (scenario) => {
    const original = await deletePerson({
      x1: scenario.person.one.x1,
    })
    const result = await person({ x1: original.x1 })

    expect(result).toEqual(null)
  })
})
