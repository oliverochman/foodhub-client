import React from "react"
import { Form, Button, Modal, Header } from "semantic-ui-react"

const RecipeForm = props => {
  let edit = props.edit
  let fork = props.fork
  let buttonText = edit ? "Save Updates" : "Submit"
  let header = edit
    ? "Make some changes to your recipe!"
    : "Create Your Own Recipe"
  let subHeader = edit
    ? "All input fields are mandatory in order to update your recipe."
    : "All input fields are mandatory in order to submit a recipe."

  return (
    <>
      <Modal id='modal'
        basic size='small'
        open={props.modalOpen}
      >
        <Header as="h1" className={edit ? "edit-recipe" : "create-recipe"} style={{ textAlign: 'center' }}>
          {header}
        </Header>
        <Header sub>{subHeader}</Header>
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
          <Button
            color='teal'
            type='submit'
            name='submit'
            fluid size='large'
            style={{ marginTop: '0.8rem' }}
          >
            {buttonText}
          </Button>
          <Button
            style={{ marginTop: '0.8rem' }}
            color='red'
            type='submit'
            name='cancel'
            fluid size='large'
            onClick={props.handleModalOpen}
          >
            Cancel
          </Button>
        </Form>
      </Modal>
    </>
  )
}
export default RecipeForm