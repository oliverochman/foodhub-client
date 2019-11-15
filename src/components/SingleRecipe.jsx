import React, { Component } from 'react'
import { Header, Message, Button } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'
import '../css/single-recipe.css'
import RecipeCard from './RecipeCard'
import RecipeCU from './RecipeCU'
import { connect } from 'react-redux'



class SingleRecipe extends Component {

  state = {
    recipe: null,
    message: null,
    error: false, 
    renderEditForm: false
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

  renderEditForm = () => {
    this.setState({
      renderEditForm: true
    })
  }

  render() {
    let { recipe, message, error } = this.state
    let showSingleRecipe, messages
    let edit

    if (message) {
      messages = (
        <Message className="create-message" size="small" style={{ color: error ? 'red' : 'green' }}>
          <Header
            as='p'
            id="response-message"
            style={{ color: error ? 'red' : 'green' }}>
            {message}
          </Header>
        </Message>
      )
    }
    
    
    if (recipe) {
      if (this.props.currentUser.attributes.id === recipe.user_id) {
        edit = this.state.renderEditForm ?
          <RecipeCU edit recipeId={recipe.id} />
          :
          <Button name="edit-recipe" onClick={this.renderEditForm}>Edit Recipe</Button>
      }
      
      showSingleRecipe = (
        <>
          <RecipeCard
            recipe={recipe}
            linked={false}
          />
          {edit}
        </>
      )
    }

    return (
      <div>
        {messages}
        {showSingleRecipe}
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