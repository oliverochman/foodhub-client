import React, { Component } from 'react'
import { Container, Header, Divider, Grid, Image } from 'semantic-ui-react'

class SingleRecipe extends Component {

  state = {
    recipe: [],
    message: null
  }

  render() {
    let { recipe } = this.state
    let showSingleRecipe

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
        {showSingleRecipe}
      </div>
    )
  }
}

export default SingleRecipe