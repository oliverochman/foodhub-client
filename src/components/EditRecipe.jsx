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
  async componentDidMount() {
    let response = await getSingleRecipe(this.props.match.params.id)

    if (response.recipe) {
      this.setState({
        recipe: response.recipe
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