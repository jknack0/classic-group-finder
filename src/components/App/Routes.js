import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GroupFinder from '../GroupFinder'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={GroupFinder} />
  </Switch>
)

export default Routes