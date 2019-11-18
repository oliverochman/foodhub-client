import React from "react";
import { Container, Divider, Grid, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeCard = props => {
  let recipe = props.recipe;
  let linked = props.linked;

  return (
    <>
      <Container
        textAlign="justified"
        name={linked ? `recipe-${recipe.id}` : "single-recipe"}
      >
        <Card>
          <Image src="https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/01/Banana-Nut-Bread-2.jpg?resize=1360%2C2040&ssl=1" alt="" />
          <Card.Content>
            {linked ? (
              <Link
                id={`recipe-${recipe.id}`}
                to={`/recipe/${recipe.id}`}
              >
                <Card.Header as="h3" name="recipe-title">
                  {recipe.title}
                </Card.Header>
              </Link>
            ) : (
              <Card.Header as="h3" name="recipe-title">
                {recipe.title}
              </Card.Header>
            )}
            <Divider />
            <Card.Description>
              <p style={{ fontWeight: "bold" }}>Ingredients: </p>
              <p name="recipe-ingredients">{recipe.ingredients}</p>
              <p style={{ fontWeight: "bold" }}>Directions: </p>
              <p name="recipe-directions">{recipe.directions}</p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};

export default RecipeCard;
