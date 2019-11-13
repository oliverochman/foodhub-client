import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'
import RecipeCard from './RecipeCard'


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
      <div>
      </div>
    )
  }
}

export default EditRecipe