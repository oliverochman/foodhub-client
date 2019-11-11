import React from 'react'
import { Form } from 'semantic-ui-react'

import React from 'react'

const CreateRecipeForm = () => {
  return (
    <>
      <Form id="create-recipe-form">
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Title'
            placeholder='Add title'
            value="title"
            onChange={props.inputHandler}
          />
        </Form.Group>
        <Form.TextArea
          label='Ingredients'
          id="create-ingredients"
          placeholder='Add ingredients'
          value="ingredients"
          onChange={props.inputHandler}
        />
        <Form.TextArea
          label='Description'
          id="create-description"
          placeholder='Add description'
          value="description"
          onChange={props.inputHandler}
        />
        <Form.Button
          id="submit-create-form"
          onClick={props.submitRecipeHandler}
        >
          Submit
          </Form.Button>
      </Form>
    </>
  )
}

export default CreateRecipeForm
