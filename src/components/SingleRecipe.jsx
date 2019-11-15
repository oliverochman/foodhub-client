import React, { Component } from 'react'
import { Header, Message, Button } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'
import '../css/single-recipe.css'
import RecipeCard from './RecipeCard'
import RecipeCU from './RecipeCU'


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
    
    if (this.state.renderEditForm) {
      edit = <RecipeCU edit recipeId={recipe.id} />
    } else {
      edit = <Button name="edit-recipe" onClick={this.renderEditForm}>Edit Recipe</Button>
    }

    if (recipe) {
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

export default SingleRecipe