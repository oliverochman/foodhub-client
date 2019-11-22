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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRecipe(this.props.match.params.id)
    }
  }

  componentDidMount() {
    this.fetchRecipe(this.props.match.params.id)
  }

  fetchRecipe = async (recipeId) => {
    let response = await getSingleRecipe(recipeId)
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

  closeEditForm = () => {
    this.setState({
      renderEditForm: false
    })
    this.fetchRecipe()
  }

  closeForkForm = (recipeId) => {
    this.setState({
      renderForkForm: false
    })
    this.fetchRecipe(recipeId)
  }

  render() {
    let { recipe, message, error } = this.state
    let showSingleRecipe, messages, edit, fork

    if (message) {
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
          <RecipeCU edit closeEditForm={this.closeEditForm} recipe={recipe} />
          :
          <Button color='teal' name="edit-recipe" onClick={this.renderEditForm}><Icon name='edit' /> Edit this recipe</Button>
      }
      if (this.props.currentUser.attributes.id !== recipe.user_id && this.props.currentUser.isSignedIn) {
        fork = this.state.renderForkForm ?
          <RecipeCU fork closeForkForm={this.closeForkForm} recipe={recipe} />
          :
          <Button color='teal' name="fork-recipe" onClick={this.renderForkForm}><Icon name='plus' /> Fork this recipe</Button>
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
      <div id="test">
        <div>
          {messages}
        </div>
        <div className="single-card-bg" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          {showSingleRecipe}
        </div>
      </div>
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