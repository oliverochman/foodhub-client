import React, { Component } from 'react';
import ListRecipes from './components/ListRecipes';
import CreateRecipe from './components/CreateRecipe';
import SingleRecipe from './components/SingleRecipe';
import EditRecipe from './components/EditRecipe';
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
          <CreateRecipe />
        </BrowserRouter>    
      </>
    );
  }
}

export default App;