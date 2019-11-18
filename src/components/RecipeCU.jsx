import React, { Component } from "react"
import { Header } from "semantic-ui-react"
import { submitRecipe, editRecipe } from "../modules/requestRecipes"
import RecipeForm from "./RecipeForm"
import "../css/create-recipe.css"
import AlertMessage from './AlertMessage'

class RecipeCU extends Component {
  state = {
    message: null,
    error: false
  }

  submitRecipeHandler = async event => {
    event.preventDefault()
    let { title, directions, ingredients, image } = event.target
    let response

    if (this.props.edit) {
      response = await editRecipe(
        title.value,
        ingredients.value,
        directions.value,
        image.files[0],
        this.props.recipeId
      )
    } else {
      response = await submitRecipe(
        title.value,
        ingredients.value,
        directions.value,
        image.files[0]
      )
    }

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
    let edit = this.props.edit
    let header = edit
      ? "Make some changes to your recipe!"
      : "Create Your Own Recipe"
    let subHeader = edit
      ? "All input fields are mandatory in order to update your recipe."
      : "All input fields are mandatory in order to submit a recipe."
    let messages
    let { message, error } = this.state

    if(message) {
      messages = (
        <AlertMessage 
        message={message}
        error={error}
        />
      )
    }

    return (
      <div className="create-wrapper">
        <Header as="h1" className={edit ? "edit-recipe" : "create-recipe"} style={{ textAlign: 'center' }}>
          {header}
        </Header>
        <Header sub>{subHeader}.</Header>
        {messages}
        <RecipeForm
          submitRecipeHandler={this.submitRecipeHandler}
          edit={edit}
        />
      </div>
    );
  }
}

export default RecipeCU