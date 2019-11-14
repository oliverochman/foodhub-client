import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'
import RecipeCard from './RecipeCard'
import EditRecipeForm from './components/EditRecipeForm'


class EditRecipe extends Component {

  state = {
    recipe: null,
    message: null,
    edit_recipe: true,
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
    return (
      <div className="edit-wrapper">
        <Header as='h1' className="edit-recipe">Make some changes to your recipe!</Header>
        <Header sub>All input fields are mandatory in order to update your recipe.</Header>
        {messages}
        <EditRecipeForm
          submitRecipeHandler={this.submitRecipeHandler}
        />
      </div>
    )
  }
}

export default EditRecipe