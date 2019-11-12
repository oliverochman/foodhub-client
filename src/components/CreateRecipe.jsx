import React, { Component } from 'react'
import { Message, Header } from 'semantic-ui-react'
import { submitRecipe } from '../modules/requestRecipes'
import CreateRecipeForm from './CreateRecipeForm'
import '../css/create-article.css'

class CreateRecipe extends Component {
  state = {
    title: '',
    ingredients: '',
    directions: '',
    message: null,
    error: false
  }

  

  render() {
    let messages
    let { message, error } = this.state

    if (message) {
      messages = (
        <Message style={{ color: error ? 'red' : 'green' }}>
          <p id="response-message">{message}</p>
        </Message>
      )
    }

    return (
      <div className="create-wrapper">
        <Header as='h1' className="create-recipe">Create Your Own Recipe</Header>
        <Header sub>All input fields are mandatory in order to submit a recipe.</Header>

        <CreateRecipeForm
        />
        {messages}
      </div>
    )
  }
}

export default CreateRecipe
