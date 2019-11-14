import React, { Component } from 'react'
import ListRecipes from './components/ListRecipes'
import SingleRecipe from './components/SingleRecipe'
import Login from './components/Login'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import RecipeCU from './components/RecipeCU'
import Navbar from './components/Navbar'
import Logout from './components/Logout'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route exact path='/listrecipes' component={ListRecipes} />
            <Route exact path='/recipe/:id' component={SingleRecipe} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/create" component={RecipeCU} />
          </Switch>
        </BrowserRouter>   
      </>
    )
  }
}

export default App