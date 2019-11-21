import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'
import { submitFavorite } from '../modules/requestFavorites'
import '../css/single-recipe.css'
import RecipeCard from './RecipeCard'
import RecipeCU from './RecipeCU'
import { connect } from 'react-redux'
import AlertMessage from './AlertMessage'

class SingleRecipe extends Component {

  state = {
    recipe: null,
    message: null,
    error: false, 
    renderEditForm: false,
    renderForkForm: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRecipe()
    }
  }

  componentDidMount() {
    this.fetchRecipe()
  }

  fetchRecipe = async() => {
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

  submitRecipeAsFavorite = async () => {
    let response = await submitFavorite(this.state.recipe.id)

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

  renderEditForm = () => {
    this.setState({
      renderEditForm: true
    })
  }

  renderForkForm = () => {
    this.setState({
      renderForkForm: true
    })
  }

  render() {
    let { recipe, message, error } = this.state
    let showSingleRecipe, messages, edit, fork

    if(message) {
      messages = (
        <AlertMessage 
          message={message}
          error={error}
        />
      )
    }
    
    if (recipe) {
      if (this.props.currentUser.attributes.id === recipe.user_id) {
        edit = this.state.renderEditForm ?
          <RecipeCU edit recipe={recipe} />
          :
          <Button name="edit-recipe" onClick={this.renderEditForm}>Edit Recipe</Button>
      }
      if (this.props.currentUser.attributes.id !== recipe.user_id && this.props.currentUser.isSignedIn) {
        fork = this.state.renderForkForm ?
          <RecipeCU fork recipe={recipe} />
          :
          <Button name="fork-recipe" onClick={this.renderForkForm}>Fork Recipe</Button>
      }
      showSingleRecipe = (
        <RecipeCard
          recipe={recipe}
          linked={false}
          setRecipeAsFavorite={this.submitRecipeAsFavorite}
          isSignedIn={this.props.currentUser.isSignedIn}
        >
          {edit}
          {fork}
        </RecipeCard>
      )
    }

    return (
      <>
        {messages}
        {showSingleRecipe}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps
)(SingleRecipe);