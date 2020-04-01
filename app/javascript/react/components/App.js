import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import ApplicantListContainer from './ApplicantListContainer'

export const App = (props) => {
  return(
  <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/applicants" component={ApplicantListContainer}/>
          <Route exact path="/applicants/new" component={NewApplicantContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
