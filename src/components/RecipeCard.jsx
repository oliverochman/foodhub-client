import React from "react"
import { Divider, Grid, Image, Card, Button, Icon, Container, List } from "semantic-ui-react"
import { Link } from "react-router-dom"
import '../css/recipe-card.css'

const RecipeCard = props => {
  let recipe = props.recipe
  let linked = props.linked
  let parent = props.recipe.parent
  let splitRecipe = recipe.ingredients.split(',').map((ingredient, index) => <List key={index}>{ingredient}</List>)
  let addRecipeToFavorites

  if (props.isSignedIn) {
    addRecipeToFavorites = (
      <Button color="olive" name="save-recipe-to-cookbook" onClick={() => props.setRecipeAsFavorite()}>
        <Icon name='plus' /> Add recipe to cookbook as a favorite
      </Button>
    )
  }

  return (
    <>
      <Grid.Column
        textAlign="justified"
        name={linked ? `recipe-${recipe.id}` : "single-recipe"}
        style={{ marginBottom: "0.5rem" }}
      >
        <Container style={{ textAlign: 'center', paddingLeft: '5rem' }}>
          {addRecipeToFavorites}
          {props.children}
        </Container>
        {linked ? (
          <Card style={{ width: '100%', left: '0%', right: '0%' }}>
            <Image src={recipe.image} alt="" />
              <Link
                id={`recipe-${recipe.id}`}
                to={`/recipe/${recipe.id}`}
              >
                <Card.Header as="h3" name="recipe-title" style={{ padding: '0.5rem' }}>
                  {recipe.title}
                </Card.Header>
              </Link>
              <Card.Content extra>
                <p>Created by {recipe.user_name}</p>
              </Card.Content>
          </Card>
        ) : (
            <Container>
              <Card style={{ width: '50%', marginTop: '2rem', position: 'relative', left: '30%', right: '70%' }}>
                <Image src={recipe.image} alt="" />
                <Card.Content>
                  <Card.Header as="h3" name="recipe-title">
                    {recipe.title}
                  </Card.Header>
                  <Divider />
                  <Card.Description>
                    <p style={{ fontWeight: "bold" }}>Ingredients: </p>
                    <p name="recipe-ingredients" style={{ margin: '0' }}>{splitRecipe}</p>
                    <p style={{ fontWeight: "bold" }}>Directions: </p>
                    <p name="recipe-directions">{recipe.directions}</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {parent ? (
                    <Link
                      id={`recipe-${parent.id}`}
                      to={`/recipe/${parent.id}`}
                    >
                      <p name="parent-data">
                        <Icon name='food' size='large' />
                        This recipe was forked from '{parent.title}' by {parent.user_name}
                      </p>
                    </Link>
                  ) : (<p>Created by {recipe.user_name}</p>)}
                </Card.Content>
              </Card>
            </Container>
          )}
      </Grid.Column >
    </>
  );
};

export default RecipeCard;