import React, { Component } from 'react';
import ListRecipes from './components/ListRecipes';
import CreateRecipe from './components/CreateRecipe';
import SingleRecipe from './components/SingleRecipe';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={ListRecipes} />
            <Route exact path='/recipe/:id' component={SingleRecipe} />
            <Route exact path="/create" component={CreateRecipe} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;