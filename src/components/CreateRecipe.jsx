import React, { Component } from 'react'
import CreateRecipeForm from './CreateRecipeForm'

class CreateRecipe extends Component {
  state = {
    title: '',
    ingredients: '',
    description: '',
    renderCreateForm: false
  }

  render() {
    let createRecipeForm

    if (renderCreateForm) {

    } else {
      createRecipeForm = (
        <CreateRecipeForm
        />
      )
    }

    return (
      <div>
        {createRecipeForm}
      </div>
    )
  }
}

export default CreateRecipe
