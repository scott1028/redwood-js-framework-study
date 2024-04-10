import { people, person, deletePerson } from './people'

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

  scenario('deletes a person', async (scenario) => {
    const original = await deletePerson({
      x1: scenario.person.one.x1,
    })
    const result = await person({ x1: original.x1 })

    expect(result).toEqual(null)
  })
})
