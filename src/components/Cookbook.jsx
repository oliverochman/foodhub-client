import React, { Component } from "react"
import { Message, Header, List, Container, Image } from "semantic-ui-react"
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
    const recipeData = this.state.favoriteRecipes
    let message

    if (recipeData.length > 0) {
      renderFavoriteRecipeList = recipeData.map(recipe => {
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
        <Message style={{ color: "red" }}>
          <Header as="p" id="message" style={{ color: "#4C5966", textAlign: 'center' }}>
            After you have added a recipe you can always access it in your Cookbook
          </Header>
        </Message>
        )
        
        return (
        <div className="profile-bg">
          <h1>My Cookbook</h1>
            <Container className="profile-container">
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

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateProps
  )(Cookbook);