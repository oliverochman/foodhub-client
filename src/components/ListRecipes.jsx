import React, { Component } from 'react';
import { getData } from '../modules/requestRecipes';
import { Container } from 'semantic-ui-react'

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
          <Container>
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </div>
          </Container>
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
        {renderListRecipes}
      </>
    )
  }
}
export default ListRecipes;