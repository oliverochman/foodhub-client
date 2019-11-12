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
    this.setState({
      recipes: result
    })
  }

  render() {
    let renderListRecipes
    const recipeData = this.state.recipes

    if (recipeData !== []) {
      renderListRecipes = recipeData.map(recipe => {
        return (
          <div key={recipe.id}>
            {recipe.title}
            {recipe.ingredients}
            {recipe.instructions}
          </div>
        )
      })
    } else {
      return (
        renderListRecipes = (
          <div>
            No recipes available.
          </div>
        )
      )
    }
    return (
      <>
        <p>Test</p>
        {renderListRecipes}
      </>
    )
  }
}
export default ListRecipes;