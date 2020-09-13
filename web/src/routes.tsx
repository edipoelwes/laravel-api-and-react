import React from 'react'
import {Switch, Route} from 'react-router-dom';
import List from './pages/List'
import Form from './pages/Form'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={List}/>
      <Route path='/forms' component={Form}/>
    </Switch>
  )
}

export default Routes