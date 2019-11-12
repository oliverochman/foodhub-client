import React, { Component } from 'react';
import { getData } from '../modules/requestRecipes';

class ListRecipes extends Component {
  state = {
    recipes: [],
    error_message: null
  }

  componentDidMount() {
    this.getRecipes()
  }

  async getRecipes() {
    let result = await getData()

    if (result) {
      debugger
      this.setState({
        recipes: result
      })
    }
  }

  render() {
    let renderListRecipes
    const recipeData = this.state.recipes
    let error_message

    if (recipeData.length < 0) {
      debugger
      error_message = <p id="error-message">This is an error</p>
    }

    if (recipeData.length > 0) {
      debugger
      renderListRecipes = recipeData.map(recipe => {
        return (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </div>
        )
      })
    } 

    return (
      <>
        {renderListRecipes}
        {error_message}
      </>
    )
  }
}
export default ListRecipes;