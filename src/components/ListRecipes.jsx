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
    let message
    
    if (recipeData.length > 0) {
      renderListRecipes = recipeData.map(recipe => {
        return (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </div>
        )
      })
    } else {
      message = <p id="message">There are no recipes</p>
    }

    return (
      <>
        {renderListRecipes}
        {message}
      </>
    )
  }
}
export default ListRecipes;