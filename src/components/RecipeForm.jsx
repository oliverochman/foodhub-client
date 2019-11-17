import React from "react"
import { Form, Button } from "semantic-ui-react"

const RecipeForm = props => {
  let edit = props.edit
  let fork = props.fork
  let buttonText = edit ? "Save Updates" : "Submit"
  return (
    <>
      <Form
        id={edit ? "edit-recipe-form" : "create-recipe-form"}
        onSubmit={event => props.submitRecipeHandler(event)}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Add title (maximum 255 characters)"
            name="title"
            defaultValue={edit
              ? edit && props.recipe.title
              : fork && props.recipe.title}
            
          />
        </Form.Group>
        <Form.TextArea
          label="Ingredients"
          placeholder="Add ingredients (maximum 500 characters)"
          name="ingredients"
          defaultValue={edit
            ? edit && props.recipe.ingredients
            : fork && props.recipe.ingredients}
        />
        <Form.TextArea
          label="Directions"
          placeholder="Add directions (maximum 5000 characters)"
          name="directions"
          defaultValue={edit
            ? edit && props.recipe.directions
            : fork && props.recipe.directions}
        />
        <input type="file" name="image" />
        <Button type="submit" name="submit">
          {buttonText}
        </Button>
      </Form>
    </>
  )
}
export default RecipeForm