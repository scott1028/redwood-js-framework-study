import { render } from '@redwoodjs/testing/web'

import PeopleTreePage from './PeopleTreePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleTreePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleTreePage />)
    }).not.toThrow()
  })
})
