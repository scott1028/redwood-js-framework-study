import { render } from '@redwoodjs/testing/web'

import PeopleReport6Page from './PeopleReport4Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleReport4Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleReport4Page />)
    }).not.toThrow()
  })
})
