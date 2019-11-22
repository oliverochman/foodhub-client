import React, { Component } from "react"
import { Header, List, Container, Image, Button, Icon } from "semantic-ui-react"
import "../css/cookbook.css"
import { fetchFavorites, fetchCookbookPdf } from '../modules/requestFavorites'
import { Link } from "react-router-dom"
import AlertMessage from './AlertMessage'

class Cookbook extends Component {
  state = {
    favoriteRecipes: [],
    message: null,
    pdfLink: null,
    isLoading: null
  }
  componentDidMount() {
    this.renderFavorites()
  }

  async renderFavorites() {
    const response = await fetchFavorites()
    this.setState({
      favoriteRecipes: response
    })
  }

  async submitPdfRequest() {
    this.setState({ isLoading: true })
    const response = await fetchCookbookPdf()
    this.setState({
      message: response.message,
      pdfLink: response.url,
      isLoading: false
    })
  }

  render() {
    let renderFavoriteRecipeList, image, createPDF, pdfMessage, pdfLink
    const favouritesData = this.state.favoriteRecipes

    if (favouritesData.length > 0) {
      renderFavoriteRecipeList = favouritesData.map(recipe => {
        image = recipe.image ? <Image avatar src={recipe.image} /> : ''
        return (
          <List.Item key={recipe.id}>
            {image}
            <List.Content style={{ fontSize: '1.2rem' }}>
              <List.Header name="recipe-title">Title: {recipe.title}</List.Header>
              <List.Description name="recipe-creator">Created by: {recipe.user_name}</List.Description>
              <Link id={`recipe-${recipe.id}`} to={`/recipe/${recipe.id}`}><List.Description className="profile-link">View recipe</List.Description></Link>
            </List.Content>
          </List.Item>
        )
      })
    }

    if (this.state.message) {
      pdfMessage = (
        <AlertMessage
          message={this.state.message}
        />
      )
    } else {
      createPDF = (
        <Container textAlign='center'>
          <Button
            name="create-pdf"
            color='teal'
            onClick={() => this.submitPdfRequest()}
          >
            Generate cookbook
          </Button>
        </Container>
      )
    }

    if (this.state.pdfLink) {
      pdfLink = (
        <Container style={{ fontSize: '1.5rem', margin: '1rem', textAlign: 'center' }}>
          <a href={this.state.pdfLink}><Icon name='food' size='small' />
            Click here to view your new cookbook!
          </a>
        </Container>
      )
    }

    if (this.state.isLoading) {
      createPDF = (
        <Container textAlign='center'>
          <Button basic loading color='teal'>
            Is Loading Right Now
          </Button>
        </Container>
      )
    }


    return (
      <div className="cookbook-bg">
        <Container className="profile-container">
          {pdfMessage}
          {pdfLink}
          <Header as="h1" style={{ color: "#4C5966", textAlign: 'center' }}>
            My Cookbook
          </Header>
          <Header as="p" id="message" style={{ color: "#4C5966", textAlign: 'center', fontStyle: 'italic' }}>
            After you have added a recipe you can always access it in your Cookbook
          </Header>
          {createPDF}
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