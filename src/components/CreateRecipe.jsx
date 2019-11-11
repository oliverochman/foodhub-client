import React, { Component } from 'react'
import CreateRecipeForm from './CreateRecipeForm'

class CreateRecipe extends Component {
  state = {
    title: '',
    ingredients: '',
    description: '',
    responseMessage: false
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.value]: e.target.value
    })
  }

  render() {
    let createRecipeForm, message
    let { responseMessage } = this.state

    if (renderErrorMessage) {
      message = (
        <p id="create-response">{responseMessage}</p>
      )
    }

    createRecipeForm = (
      <CreateRecipeForm
        inputHandler={this.inputHandler}
        submitRecipeHandler={this.submitRecipeHandler}
      />
    )

    return (
      <div>
        {createRecipeForm}
        {message}
      </div>
    )
  }
}

export default CreateRecipe
