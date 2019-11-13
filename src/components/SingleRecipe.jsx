import React, { Component } from 'react'
import { Container, Header, Divider, Grid, Image, Message } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'

class SingleRecipe extends Component {

  state = {
    recipe: null,
    message: null,
    error: false
  }

  async componentDidMount() {
    debugger;
    let response = await getSingleRecipe(this.props.match.params.id)

    if (response.recipe) {
      debugger;
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

  render() {
    let { recipe, message, error } = this.state
    let showSingleRecipe, messages

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

    if (recipe !== null) {
      showSingleRecipe = (
        <>
          <Container textAlign='justified' id="single-recipe">
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Image src={recipe.image} alt='' />
                </Grid.Column>
                <Grid.Column >
                <Header as='h3' id="recipe-title">{recipe.title}</Header>
                  <Divider />
                  <p id="recipe-ingredients">{recipe.ingredients}</p>
                  <p id="recipe-directions">{recipe.directions}</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
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