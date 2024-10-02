// import { Link, routes } from '@redwoodjs/router'
// import { Metadata } from '@redwoodjs/web'

import PeopleMemorialTabletCell from 'src/components/PeopleMemorialTabletCell/PeopleMemorialTabletCell'
// import PeopleTreeCell from 'src/components/Person/PeopleTreeCell'

const PeopleMemorialTabletPage = ({ z1 = 1 }) => {
  // return (
  //   <>
  //     <Metadata
  //       title="PeopleMemorialTablet"
  //       description="PeopleMemorialTablet page"
  //     />

  //     <h1>PeopleMemorialTabletPage</h1>
  //     <p>
  //       Find me in{' '}
  //       <code>
  //         ./web/src/pages/PeopleMemorialTabletPage/PeopleMemorialTabletPage.jsx
  //       </code>
  //     </p>
  //     <p>
  //       My default route is named <code>peopleMemorialTablet</code>, link to me
  //       with `
  //       <Link to={routes.peopleMemorialTablet()}>PeopleMemorialTablet</Link>`
  //     </p>
  //   </>
  // )
  return <PeopleMemorialTabletCell z1={z1} />
}

export default PeopleMemorialTabletPage
