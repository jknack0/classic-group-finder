import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StartGroup from '../StartGroup'
import Navigation from '../Navigation'
const Routes = () => (
  <Switch>
    <Route path='/' exact component={Navigation} />
    <Route path='/startgroup' component={StartGroup} />
  </Switch>
)

export default Routes