import React, { Component } from 'react';
import ListRecipes from './components/ListRecipes';
import RecipeCU from './components/RecipeCU';
import SingleRecipe from './components/SingleRecipe';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ListRecipes} />
            <Route exact path='/recipe/:id' component={SingleRecipe} />
          </Switch>
          <RecipeCU />
        </BrowserRouter>    
      </>
    );
  }
}

export default App;