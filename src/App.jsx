import React, { Component } from 'react';
import ListRecipes from './components/ListRecipes';
import CreateRecipe from './components/CreateRecipe';
import SingleRecipe from './components/SingleRecipe';

class App extends Component {
  render() {
    return (
      <>
        <SingleRecipe />
        <ListRecipes />
        <CreateRecipe />
      </>
    );
  }
}

export default App;