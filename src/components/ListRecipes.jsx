import React, { Component } from 'react';
import { fetchRecipes } from '../modules/requestRecipes';
import { Message, Header } from 'semantic-ui-react'

class ListRecipes extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    fetchRecipes()
      .then(result => {
        this.setState({
          recipes: result
        })
      })
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
      message = (
        <Message style={{ color: 'red' }}>
          <Header
            as='p'
            id="message"
            style={{ color: 'green' }}>
            There are no recipes
        </Header>
        </Message>
      )
    }
    return (
      <>
        {renderListRecipes &&
          <div id="list">
            {renderListRecipes}
          </div>
        }
        {message}
      </>
    )
  }
}
export default ListRecipes;