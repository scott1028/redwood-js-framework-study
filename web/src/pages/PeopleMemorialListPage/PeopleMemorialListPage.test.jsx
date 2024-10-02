import { render } from '@redwoodjs/testing/web'

import PeopleMemorialListPage from './PeopleMemorialListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleMemorialListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleMemorialListPage />)
    }).not.toThrow()
  })
})
