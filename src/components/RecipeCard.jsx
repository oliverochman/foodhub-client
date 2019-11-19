import React from "react"
import { Divider, Grid, Image, Card } from "semantic-ui-react"
import { Link } from "react-router-dom"
import '../css/recipe-card.css'

const RecipeCard = props => {
  let recipe = props.recipe
  let linked = props.linked
  
  let parent = props.recipe.parent

  return (
    <>
      <Grid.Column
        textAlign="justified"
        name={linked ? `recipe-${recipe.id}` : "single-recipe"}
        style={{marginBottom: "0.5rem"}}
      >
        <Card>
          <Image src={recipe.image} alt="" />
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
            <Divider />
            <Card.Content extra>
              {parent ? (
                <Link
                  id={`recipe-${parent.id}`}
                  to={`/recipe/${parent.id}`}
                >
                  <p name="parent-data">{parent.title} by {parent.user_name}</p>

                </Link>
              ) : ("") }
            </Card.Content>
          </Card.Content>
          {props.children}
        </Card>
      </Grid.Column>
    </>
  );
};

export default RecipeCard;