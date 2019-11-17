import React from "react";
import { Container, Divider, Grid, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import '../css/recipe-card.css'

const RecipeCard = props => {
  let recipe = props.recipe;
  let linked = props.linked;

  return (
    <>
      <Container
        textAlign="justified"
        name={linked ? `recipe-${recipe.id}` : "single-recipe"}
      >
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Card>
                
                <Card.Content>
                  {linked ? (
                    <Link
                      id={`recipe-${recipe.id}`}
                      to={`/recipe/${recipe.id}`}
                    >
                      <Image src={recipe.image} alt="" />
                      <Divider />
                      <Card.Header as="h3" name="recipe-title">
                        {recipe.title}
                      </Card.Header>
                    </Link>
                  ) : (
                    <>
                    <Image src={recipe.image} alt="" />
                    <Divider />
                    <Card.Header as="h3" name="recipe-title">
                      {recipe.title}
                    </Card.Header>
                    </>
                  )}
                  <Divider />
                  <Card.Description>
                    <p style={{ fontWeight: "bold" }}>Ingredients: </p>
                    <p name="recipe-ingredients">{recipe.ingredients}</p>
                    <p style={{ fontWeight: "bold" }}>Directions: </p>
                    <p name="recipe-directions">{recipe.directions}</p>
                  </Card.Description>
                </Card.Content>
                {props.children}
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default RecipeCard;
