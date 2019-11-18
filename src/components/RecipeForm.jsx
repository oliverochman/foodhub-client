import React from "react"
import { Form, Button, Header } from "semantic-ui-react"
import AlertMessage from './AlertMessage'

const RecipeForm = props => {
  let buttonText
  let header
  let subHeader
  let formId

  switch(props.version) {
    case 'fork':
      buttonText = 'Fork Recipe'
      header = 'If you want to make some changes to your fork, do it here'
      subHeader = 'All input fields are mandatory in order to complete the fork.'
      formId = "fork-recipe-form"
      break;
    case 'edit':
      buttonText = 'Save Updates'
      header = 'Make some changes to your recipe!'
      subHeader = 'All input fields are mandatory in order to update your recipe.'
      formId = "edit-recipe-form"
      break;
    default:
      buttonText = 'Submit'
      header = 'Create Your Own Recipe'
      subHeader = 'All input fields are mandatory in order to submit a recipe.'
      formId = "create-recipe-form"

  }

  let message = props.message
  let error = props.error

  let messages

  if(message) {
    messages = (
      <AlertMessage 
        message={message}
        error={error}
      />
    )
  }

  return (
    <>
        {messages}
        <Header as="h1" style={{ textAlign: 'center' }}>
          {header}
        </Header>
        <Header sub>{subHeader}</Header>
        <div>
        <Form
          id={formId}
          onSubmit={props.submitRecipeHandler}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Title"
              placeholder="Add title (maximum 255 characters)"
              name="title"
              defaultValue={props.version == 'edit' || 'fork' ? props.recipe.title : ''}

            />
          </Form.Group>
          <Form.TextArea
            label="Ingredients"
            placeholder="Add ingredients (maximum 500 characters)"
            name="ingredients"
            defaultValue={props.version == 'edit' || 'fork' ? props.recipe.ingredients : ''}

          />
          <Form.TextArea
            label="Directions"
            placeholder="Add directions (maximum 5000 characters)"
            name="directions"
            defaultValue={props.version == 'edit' || 'fork' ? props.recipe.directions : ''}

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
        </Form>
        </div>
    </>
  )
}
export default RecipeForm