import React, { Component } from "react"
import { fetchRecipes } from "../modules/requestRecipes"
import { Message, Header, Segment } from "semantic-ui-react"
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class UserProfile extends Component {
  state = {
    userRecipes: []
  }

  componentDidMount() {
    fetchRecipes().then(result => {
      this.setState({
        recipes: result
      })
    })
  }

  // componentDidMount() {
  //   axios.get('/v1/recipes').then(response => {
  //     this.setState({ userRecipes: response.data });
  //   })
  // }

  render() {
    let renderUserListOfRecipes, message, profileGreeting
    let usersRecipes = []
    const userRecipeData = this.state.userRecipes

    if (this.props.currentUser.isSignedIn === true) {
      let currentUser = this.props.currentUser.attributes.id
  
      userRecipeData.map(recipe => {
        if (recipe.user.id === currentUser) {
            return usersRecipes.push(recipe)
          }
        }
      )
    }

    if (usersRecipes.length !== 0) {
      renderUserListOfRecipes = (
        <>
          {usersRecipes.map(recipe => {
            let trim_ingress = recipe.ingredients.substr(0, 75)
            let ingress = trim_ingress.substr(0, Math.min(trim_ingress.length, trim_ingress.lastIndexOf(" "))) + ' ...'
            return (
              <NavLink id={`recipe-${recipe.id}`} key={recipe.id} to={`/recipes/${recipe.id}`}>
                <Segment id={`recipe-${recipe.id}`}>
                  <Segment.Header id={`recipe-${recipe.id}`}>{recipe.title}</Segment.Header>
                  <Segment.Description>Ingredients: {ingress}</Segment.Description>
                </Segment>
              </NavLink>
            )
          })}
        </>
      )
    } else {
      message = (
        <Message style={{ color: "red" }}>
          <Header as="p" id="message" style={{ color: "#4C5966" }}>
            After you have created a recipe you can always view it here
          </Header>
        </Message>
      )
    }

    if (this.props.currentUser.isSignedIn) {
      profileGreeting = (
        <Message style={{ color: "red" }} id="profile-greeting">
          <Header as="p" id="message" style={{ color: "#4C5966" }}>
            Hello {this.props.currentUser.attributes.name}, here are the recipes you have created:
          </Header>
        </Message>
      )
    }

    return (
      <>
        {profileGreeting}
        {message}
        {renderUserListOfRecipes}
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
)(UserProfile);
