import React, { Component } from 'react'
import { Message, Header } from 'semantic-ui-react'
import { submitRecipe } from '../modules/requestRecipes'
import CreateRecipeForm from './CreateRecipeForm'
import '../css/create-article.css'

class CreateRecipe extends Component {
  state = {
    message: null,
    error: false
  }

  submitRecipeHandler = async (event) => {
    event.preventDefault();
    let { title, directions, ingredients, image } = event.target
    let response = await submitRecipe(title.value, ingredients.value, directions.value, image.files[0])

    if (response.message) {
      this.setState({
        message: response.message
      })
    } else {
      this.setState({
        message: response.error,
        error: true
      })
    }
  }

  render() {
    let messages
    let { message, error } = this.state

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

    return (
      <div className="create-wrapper">
        <Header as='h1' className="create-recipe">Create Your Own Recipe</Header>
        <Header sub>All input fields are mandatory in order to submit a recipe.</Header>
        {messages}
        <CreateRecipeForm
          submitRecipeHandler={this.submitRecipeHandler}
        />
      </div>
    )
  }
}

export default CreateRecipe
