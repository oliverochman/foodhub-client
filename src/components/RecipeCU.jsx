import React, { Component } from "react"
import { submitRecipe, editRecipe, forkRecipe } from "../modules/requestRecipes"
import { withRouter } from "react-router"
import RecipeForm from "./RecipeForm"
import "../css/create-recipe.css"

class RecipeCU extends Component {
  state = {
    message: null,
    error: false
  }

  submitRecipeHandler = async event => {
    event.preventDefault()
    const { history } = this.props
    let { title, directions, ingredients, image } = event.target
    let response

    if (this.props.edit) {
      response = await editRecipe(
        title.value,
        ingredients.value,
        directions.value,
        image.files[0],
        this.props.recipe.id
      )
    } else if (this.props.fork) {
      response = await forkRecipe(
        title.value,
        ingredients.value,
        directions.value,
        image.files[0],
        this.props.recipe.id
      )
    } else {
      response = await submitRecipe(
        title.value,
        ingredients.value,
        directions.value,
        image.files[0],
        setTimeout(() => { history.push('/')}, 3000)
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
    let fork = this.props.fork
    let messages
    let { message, error } = this.state

    return (
      <div className="create-wrapper">
        {messages}
        <RecipeForm
          submitRecipeHandler={this.submitRecipeHandler}
          edit={edit}
          fork={fork}
          recipe={(edit || fork) && this.props.recipe}
          message={message}
          error={error}
        />
      </div>
    );
  }
}

export default withRouter(RecipeCU)