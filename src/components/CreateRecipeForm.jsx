import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const CreateRecipeForm = (props) => {
  return (
    <>
      <Form id="create-recipe-form" onSubmit={(event) => props.submitRecipeHandler(event)}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            id="create-title"
            label='Title'
            placeholder='Add title (maximum 255 characters)'
            name="title"
          />
        </Form.Group>
        <Form.TextArea
          label='Ingredients'
          id="create-ingredients"
          placeholder='Add ingredients (maximum 500 characters)'
          name="ingredients"
        />
        <Form.TextArea
          label='Directions'
          id="create-directions"
          placeholder='Add directions (maximum 5000 characters)'
          name="directions"
        />
        <Button
          id="submit-create-form"
          type="submit"
        >
          Submit
          </Button>
      </Form>
    </>
  )
}
export default CreateRecipeForm
