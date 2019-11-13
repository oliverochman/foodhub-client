import React, { Component } from 'react'
import { Container, Header, Divider, Grid, Image, Message, Card } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'
import '../css/single-recipe.css'
import RecipeCard from './RecipeCard';


class SingleRecipe extends Component {

  state = {
    recipe: null,
    message: null,
    error: false
  }

  async componentDidMount() {
    let response = await getSingleRecipe(this.props.match.params.id)

    if (response.recipe) {
      this.setState({
        recipe: response.recipe
      })
    } else {
      this.setState({
        message: response.error,
        error: true
      })
    }
  }

  render() {
    let { recipe, message, error } = this.state
    let showSingleRecipe, messages

    if (message) {
      messages = (
        <Message className="create-message" size="small" style={{ color: error ? 'red' : 'green' }}>
          <Header
            as='p'
            id="response-message"
            style={{ color: error ? 'red' : 'green' }}>
            {message}
          </Header>
        </Message>
      )
    }

    if (recipe) {
      showSingleRecipe = (
        <RecipeCard 
          recipe={recipe}
          linked={false}
        />
      )
    }

    return (
      <div>
        {messages}
        {showSingleRecipe}
      </div>
    )
  }
}

export default SingleRecipe