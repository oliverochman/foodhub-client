import React from "react";
import { Divider, Grid, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeCard = props => {
  let recipe = props.recipe;
  let linked = props.linked;

  return (
    <>
      <Grid.Column
        textAlign="justified"
        name={linked ? `recipe-${recipe.id}` : "single-recipe"}
        style={{marginBottom: "0.5rem"}}
      >
        <Card>
          <Image src="https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/07/satay-sweet-potato-curry.jpg?itok=bl5QzsfL" alt="" />
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
      </Grid.Column>
    </>
  );
};

export default RecipeCard;
