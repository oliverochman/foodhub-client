import React, { Component } from 'react';
import ListRecipes from './components/ListRecipes';
import CreateRecipe from './components/CreateRecipe';
import SingleRecipe from './components/SingleRecipe';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/recipe/:id' component={SingleRecipe} />
        <ListRecipes />
        <CreateRecipe />
      </>
    );
  }
}

export default App;