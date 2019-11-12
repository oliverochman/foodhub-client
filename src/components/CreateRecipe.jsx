import React, { Component } from 'react'
import { Message, Header } from 'semantic-ui-react'
import CreateRecipeForm from './CreateRecipeForm'
import axios from 'axios'
import '../css/create-article.css'

class CreateRecipe extends Component {
  state = {
    title: '',
    ingredients: '',
    directions: '',
    responseMessage: false,
    message: '',
    error: false
  }

  submitRecipeHandler = (e) => {
    e.preventDefault();
    const path = 'http://localhost:3000/v1/recipes'
    const { title, ingredients, directions } = this.state
    axios.post(path, { title, ingredients, directions })
      .then(response => {
        console.log(response)
        this.setState({
          message: response.data.message,
          responseMessage: true,
          error: false
        })
      })
      .catch(error => {
        this.setState({
          message: error.response.data.error_message,
          responseMessage: true,
          error: true
        })
      })
  }


  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let createRecipeForm, messages
    let { message, responseMessage, error } = this.state

    if (responseMessage) {
      messages = (
        <Message style={{ color: error ? 'red' : 'green' }}>
          <p id="response-message">{message}</p>
        </Message>
      )
    }

    createRecipeForm = (
      <CreateRecipeForm
        inputHandler={this.inputHandler}
        submitRecipeHandler={this.submitRecipeHandler}
      />
    )

    return (
      <div className="create-wrapper">
        <Header as='h1' className="create-recipe">Create Your Own Recipe</Header>
        <Header sub>All input fields are mandatory in order to submit a recipe.</Header>
        {createRecipeForm}
        {messages}
      </div>
    )
  }
}

export default CreateRecipe
