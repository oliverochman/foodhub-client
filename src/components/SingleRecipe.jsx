import React, { Component } from 'react'
import { Container, Header, Divider, Grid, Image, Message, Card } from 'semantic-ui-react'
import { getSingleRecipe } from '../modules/requestRecipes'
import '../css/single-recipe.css'
import RecipeCard from './RecipeCard';


class SingleRecipe extends Component {

  state = {
    recipe: null,
    message: null,
    error: false
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

    if (recipe) {
      showSingleRecipe = (
        <RecipeCard 
          recipe={recipe}
        />
        // <Container textAlign='justified' id="single-recipe">
        //   <Grid columns={1}>
        //     <Grid.Row>
        //       <Grid.Column>
        //         <Card>
        //         <Image src={recipe.image} alt='' />
        //         <Card.Content>
        //         <Card.Header as='h3' id="recipe-title">{recipe.title}</Card.Header>
        //         <Divider />
        //         <Card.Description>
        //         <p style={{ fontWeight: 'bold'}}>Ingredients: </p>
        //         <p id="recipe-ingredients">{recipe.ingredients}</p>
        //         <p style={{ fontWeight: 'bold'}}>Directions: </p>
        //         <p id="recipe-directions">{recipe.directions}</p>
        //         </Card.Description>
        //         </Card.Content>
        //         </Card>
        //       </Grid.Column>
        //     </Grid.Row>
        //   </Grid>
        // </Container>
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