import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
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
          <Button color='teal' name="edit-recipe" onClick={this.renderEditForm}><Icon name='edit' /> Edit Recipe</Button>
      }
      if (this.props.currentUser.attributes.id !== recipe.user_id) {
        fork = this.state.renderForkForm ?
          <RecipeCU fork recipe={recipe} />
          :
          <Button color='teal' name="fork-recipe" onClick={this.renderForkForm}><Icon name='plus' /> Fork Recipe</Button>
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
        <div className="single-card-bg">
        {showSingleRecipe}
        </div>
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