import { render } from '@redwoodjs/testing/web'

import PeopleReport5Page from './PeopleReport5Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleReport4Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleReport5Page />)
    }).not.toThrow()
  })
})
