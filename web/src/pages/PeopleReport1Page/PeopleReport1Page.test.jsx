import { render } from '@redwoodjs/testing/web'

import PeopleReport1Page from './PeopleReport1Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleReport1Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleReport1Page />)
    }).not.toThrow()
  })
})
