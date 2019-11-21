import React, { Component } from "react"
import { fetchCurrentUsersRecipes } from "../modules/requestRecipes"
import { Header, List, Container, Image } from "semantic-ui-react"
import { connect } from "react-redux"
import "../css/user-profile.css"
import { Link } from "react-router-dom"

class UserProfile extends Component {
  state = {
    userRecipes: []
  }

  async componentDidMount() {
    let response = await fetchCurrentUsersRecipes()
    this.setState({
      userRecipes: response
    })
  }

  render() {
    let renderUserListOfRecipes, message, profileGreeting
    const recipeUserData = this.state.userRecipes

    if (recipeUserData.length !== []) {
      renderUserListOfRecipes = recipeUserData.map(recipe => {
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
      <Header as="p" id="message" style={{ color: "#4C5966", textAlign: 'center' }}>
        You do not currently have any recipes
      </Header>
    )

    profileGreeting = (
      <Header as="p" id="profile-greeting" style={{ color: "#4C5966", textAlign: 'center' }}>
        Hello {this.props.currentUser.attributes.name}, welcome to your profile page
        </Header>
    )

    return (
      <div className="profile-bg">
        <Container className="profile-container">
          {profileGreeting}
          {message}
          <Container>
            <List divided relaxed>
              {renderUserListOfRecipes}
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
  mapStateToProps
)(UserProfile);
