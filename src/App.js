import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from "react-router-dom"
import CreateRecipe from './components/CreateRecipe'
import ListRecipes from './components/ListRecipes'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={ListRecipes} />
        <Route exact path="/create" component={CreateRecipe} />
      </Switch>
      </div>
    );
  }
}

export default App;