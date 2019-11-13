import React from 'react'
import { Container, Header, Divider, Grid, Image, Message, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



const RecipeCard = (props) => {
  let recipe = props.recipe
  let linked = props.linked
  debugger;
  return (
    <>
      <Container textAlign='justified' id={linked ? `recipe-${recipe.id}` : "single-recipe"}>
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Image src={recipe.image} alt='' />
                  <Card.Content>
                    {linked ? 
                      <Link id={`recipe-${recipe.id}`}  to={`/recipe/${recipe.id}`}>
                        <Card.Header as='h3' name="recipe-title">{recipe.title}</Card.Header>
                      </Link> 
                      :
                      <Card.Header as='h3' name="recipe-title">{recipe.title}</Card.Header>
                    }
                    <Divider />
                    <Card.Description>
                      <p style={{ fontWeight: 'bold'}}>Ingredients: </p>
                      <p name="recipe-ingredients">{recipe.ingredients}</p>
                      <p style={{ fontWeight: 'bold'}}>Directions: </p>
                      <p name="recipe-directions">{recipe.directions}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    </>
  )
}

export default RecipeCard
