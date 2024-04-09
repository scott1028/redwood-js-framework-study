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
      <Set wrap={ScaffoldLayout} title="People" titleTo="people" buttonLabel="New Person" buttonTo="newPerson" homeButtonLabel="TreeView" homeButtonTo="root">
        <Route path="/peopleTree/{x1:int}" page={PersonPersonTreePage} name="peopleTree" />
        <Route path="/peopleTree" page={PersonPersonTreePage} name="peopleTree" />
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
