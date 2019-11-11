import React, { Component } from 'react'
import CreateArticleForm from './CreateArticleForm'

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
        <CreateArticleForm
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
