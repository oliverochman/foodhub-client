import React, { Component } from 'react';
import { fetchRecipes } from '../modules/requestRecipes';
import { Message, Header, Card, Divider, Image } from 'semantic-ui-react';
import RecipeCard from './RecipeCard';

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
          <RecipeCard 
            key={recipe.id}
            recipe={recipe}
            linked
          />
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