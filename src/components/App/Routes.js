import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GroupFinder from '../GroupFinder'
import StartGroup from '../StartGroup'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={GroupFinder} />
    <Route path='/startgroup' component={StartGroup} />
  </Switch>
)

export default Routes