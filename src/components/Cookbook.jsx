import React, { Component } from "react"
import { withRouter } from "react-router"
import { Message, Header, Grid } from "semantic-ui-react"
import "../css/create-recipe.css"
import { fetchFavorites } from '../modules/requestFavorites'

class Cookbook extends Component {
  state = {
    favoriteRecipes: [],
    message: null,
    error: false, 
  }
  componentDidMount() {
    this.renderFavorites()
  }

  async renderFavorites() {
    const response = await fetchFavorites()
    debugger;
    this.setState({
      favoriteRecipes: response
    })
  }

  render() {
    let renderFavoriteRecipeList
    const recipeData = this.state.favoriteRecipes
    let message

    if (recipeData.length > 0) {
      renderFavoriteRecipeList = recipeData.map(recipe => {
        return (
          <div name={`recipe-${recipe.id}`}>
            <p name="recipe-title"> {recipe.title}</p> 
          </div>
        )
      })
    } else {
      message = (
        <Message style={{ color: "red" }}>
          <Header as="p" id="message" style={{ color: "#4C5966" }}>
            After you have added a recipe you can always access it in your Cookbook
          </Header>
        </Message>
      )
    }

    return (
      <div>
        <h1>My Cookbook</h1>
        {message}
        {renderFavoriteRecipeList}
      </div>
    )
  }
}
export default Cookbook