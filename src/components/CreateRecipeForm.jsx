import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const CreateRecipeForm = (props) => {
  return (
    <>
      <Form id="create-recipe-form" 
      onSubmit={(event) => props.submitRecipeHandler(event)}
      >
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Title'
            placeholder='Add title (maximum 255 characters)'
            name="title"
          />
        </Form.Group>
        <Form.TextArea
          label='Ingredients'
          placeholder='Add ingredients (maximum 500 characters)'
          name="ingredients"
        />
        <Form.TextArea
          label='Directions'
          placeholder='Add directions (maximum 5000 characters)'
          name="directions"
        />
        <input type="file" name='image'/>
        <Button
          type="submit"
          name="submit"
        >
          Submit
          </Button>
      </Form>
    </>
  )
}
export default CreateRecipeForm
