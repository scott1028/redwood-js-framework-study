// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout}>
        <Route path="/peopleReport6" page={PeopleReport6Page} name="peopleReport6" />
        <Route path="/peopleReport5" page={PeopleReport5Page} name="peopleReport5" />
        <Route path="/peopleReport4" page={PeopleReport4Page} name="peopleReport4" />
        <Route path="/peopleReport3" page={PeopleReport3Page} name="peopleReport3" />
        <Route path="/peopleReport2" page={PeopleReport2Page} name="peopleReport2" />
        <Route path="/peopleReport1" page={PeopleReport1Page} name="peopleReport1" />
        <Route path="/peopleMemorialList" page={PeopleMemorialListPage} name="peopleMemorialList" />
        <Route path="/peopleMemorialTablet" page={PeopleMemorialTabletPage} name="peopleMemorialTablet" />
        <Route path="/peopleMemorialList/{z1:int}" page={PeopleMemorialListPage} name="peopleMemorialListBy" />
        <Route path="/peopleMemorialTablet/{z1:int}" page={PeopleMemorialTabletPage} name="peopleMemorialTabletBy" />
        <Route path="/peopleTree/{x1:int}" page={PeopleTreePage} name="personTree" />
        <Route path="/people/new" page={PersonNewPersonPage} name="newPerson" />
        <Route path="/people/{x1:Int}/edit" page={PersonEditPersonPage} name="editPerson" />
        <Route path="/people/{x1:Int}" page={PersonPersonPage} name="person" />
        <Route path="/people" page={PersonPeoplePage} name="people" />
        <Route path="/" redirect="/peopleTree/1" name="root" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
