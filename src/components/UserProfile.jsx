import React, { Component } from "react"
import { fetchCurrentUsersRecipes } from "../modules/requestRecipes"
import { Header, List, Container, Image } from "semantic-ui-react"
import { connect } from 'react-redux'
import "../css/user-profile.css"

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
            <List.Content>
              <List.Header name="recipe-title">Title: {recipe.title}</List.Header>
              <List.Description name="recipe-ingredients">Ingredients: {recipe.ingredients}</List.Description>
            </List.Content>
          </List.Item>
        )
      })
    }

    message = (
      <Header as="p" id="message" style={{ color: "#4C5966", textAlign: 'center' }}>
        After you have created a recipe you can always view it here
      </Header>
    )

    profileGreeting = (
      <Header as="p" id="profile-greeting" style={{ color: "#4C5966", textAlign: 'center' }}>
        Hello {this.props.currentUser.attributes.name}, here are the recipes you have created:
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
