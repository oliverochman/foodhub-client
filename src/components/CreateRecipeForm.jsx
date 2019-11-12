import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import { submitRecipe } from '../modules/requestRecipes'


const CreateRecipeForm = (props) => {
  const submitRecipeHandler = async (e) => {
    e.preventDefault();
    // let {title, directions} = event.target
    debugger;
    const title = e.target.form.title.value
    const ingredients = e.target.form.ingredients.value
    const directions = e.target.form.directions.value
    let response = await submitRecipe(title, ingredients, directions)

    // if (response.status === 201) {
    //   this.setState({
    //     message: response.message
    //   })
    // } else {
    //   this.setState({
    //     message: response.message,
    //     error: true
    //   })
    // }
  }
  return (
    <>
      <Form id="create-recipe-form" onSumbit={(event) => submitRecipeHandler(event)}>
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
        <Input
          id="submit-create-form"
          type="submit"
        >
          Submit
          </Input>
      </Form>
    </>
  )
}

export default CreateRecipeForm
