import React, { Component } from "react"
import { Header, List, Container, Image } from "semantic-ui-react"
import "../css/create-recipe.css"
import { fetchFavorites } from '../modules/requestFavorites'
import { Link } from "react-router-dom"

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
    const favouritesData = this.state.favoriteRecipes
    let message

    if (favouritesData.length > 0) {
      renderFavoriteRecipeList = favouritesData.map(recipe => {
        return (
          <List.Item key={recipe.id}>
            <Image avatar src={recipe.image} />
            <List.Content style={{ fontSize: '1.2rem' }}>
              <List.Header name="recipe-title">Title: {recipe.title}</List.Header>
              <List.Description name="recipe-ingredients">Ingredients: {recipe.ingredients}</List.Description>
              <Link id={`recipe-${recipe.id}`} to={`/recipe/${recipe.id}`}><List.Description className="profile-link">View recipe</List.Description></Link>
            </List.Content>
          </List.Item>
        )
      })
    }

    message = (
      <Header as="p" id="message" style={{ color: "#4C5966", textAlign: 'center', fontStyle: 'italic' }}>
        After you have added a recipe you can always access it in your Cookbook
      </Header>
    )

    return (
      <div className="profile-bg">
        <Container className="profile-container">
          <Header as="h1" style={{ color: "#4C5966", textAlign: 'center' }}>
            My Cookbook
          </Header>
          {message}
          <Container>
            <List divided relaxed>
              {renderFavoriteRecipeList}
            </List>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Cookbook;