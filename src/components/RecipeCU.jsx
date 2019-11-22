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
      setTimeout(() => { this.props.closeEditForm() }, 3000)
    } else if (this.props.fork) {
      response = await forkRecipe(
        title.value,
        ingredients.value,
        directions.value,
        image.files[0],
        this.props.recipe.id,
      )
      setTimeout(() => { this.props.closeForkForm(response.recipeId)}, 3000)
    } else {
      response = await submitRecipe(
        title.value,
        ingredients.value,
        directions.value,
        image.files[0],
        setTimeout(() => { history.push('/') }, 3000)
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
    let version
    if (this.props.fork) {
      version = 'fork'
    } else if (this.props.edit) {
      version = 'edit'
    } else {
      version = 'create'
    }
    let { edit, fork } = this.props
    let { message, error } = this.state
    let messages

    return (
      <div className="cu-bg">
        <div className="create-wrapper">
          {messages}
          <RecipeForm
            submitRecipeHandler={this.submitRecipeHandler}
            version={version}
            recipe={edit || fork ? this.props.recipe : false}
            message={message}
            error={error}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeCU)