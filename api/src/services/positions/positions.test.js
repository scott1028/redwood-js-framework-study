import { positions, position, deletePosition } from './positions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('positions', () => {
  scenario('returns all positions', async (scenario) => {
    const result = await positions()

    expect(result.length).toEqual(Object.keys(scenario.position).length)
  })

  scenario('returns a single position', async (scenario) => {
    const result = await position({ id: scenario.position.one.id })

    expect(result).toEqual(scenario.position.one)
  })

  scenario('deletes a position', async (scenario) => {
    const original = await deletePosition({
      id: scenario.position.one.id,
    })
    const result = await position({ id: original.id })

    expect(result).toEqual(null)
  })
})
