import { render } from '@redwoodjs/testing/web'

import PeopleReport3Page from './PeopleReport3Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleReport3Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleReport3Page />)
    }).not.toThrow()
  })
})
