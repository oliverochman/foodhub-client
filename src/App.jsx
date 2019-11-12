import React, { Component } from 'react';
import ListRecipes from './components/ListRecipes';
import CreateRecipe from './components/CreateRecipe';

class App extends Component {
  render() {
    return (
      <>
        <ListRecipes />
        <CreateRecipe />
      </>
    );
  }
}

export default App;