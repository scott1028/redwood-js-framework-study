import { render } from '@redwoodjs/testing/web'

import PeopleMemorialTabletPage from './PeopleMemorialTabletPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PeopleMemorialTabletPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleMemorialTabletPage />)
    }).not.toThrow()
  })
})
