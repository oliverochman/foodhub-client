import React from 'react'
import { Form } from 'semantic-ui-react'

import React from 'react'

const CreateRecipeForm = () => {
  return (
    <>
      <Form id="create-article-form">
        <Form.Group widths='equal'>
          <Form.Input 
          fluid 
          label='Title' 
          placeholder='Add title'
          value="title" />
        </Form.Group>
        <Form.TextArea 
        label='Ingredients' 
        id="create-ingredients" 
        placeholder='Add ingredients'
        value="ingredients" 
        />
        <Form.TextArea 
        label='Description' 
        id="create-description" 
        placeholder='Add description'
        value="description" 
        />
        <Form.Button id="submit-create-form">Submit</Form.Button>
      </Form>
    </>
  )
}

export default CreateRecipeForm
