import React, { Component } from 'react'
import { Header, Message } from 'semantic-ui-react'
import { editRecipe } from '../modules/requestRecipes'
import RecipeCard from './RecipeCard'
import EditRecipeForm from './EditRecipeForm'


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
    let response = await editRecipe(title.value, ingredients.value, directions.value, image.files[0], this.props.recipeId)
    debugger;
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
    let { message, error } = this.state
    let messages
    
    if (message) {
      messages = (
        <Message className="create-message" size="small" style={{ color: error ? 'red' : 'green' }}>
          <Header
            as='p'
            id="response-message"
            style={{ color: error ? 'red' : 'green' }}>
            {this.state.message}
          </Header>
        </Message>
      )
    }

    return (
      <div className="edit-wrapper">
        <Header as='h1' className="edit-recipe">Make some changes to your recipe!</Header>
        <Header sub>All input fields are mandatory in order to update your recipe.</Header>
        <EditRecipeForm
          submitRecipeHandler={this.submitRecipeHandler}
        />
        {messages}
      </div>
    )
  }
}

export default EditRecipe