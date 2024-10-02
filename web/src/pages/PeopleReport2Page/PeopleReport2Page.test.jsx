import { render } from '@redwoodjs/testing/web'

import PeopleReport2Page from './PeopleReport2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleReport2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleReport2Page />)
    }).not.toThrow()
  })
})
