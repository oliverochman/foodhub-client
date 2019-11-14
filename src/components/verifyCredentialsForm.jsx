import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const VerifyCredentialsForm = (props) => {
  return (
    <>
      <Form id="create-recipe-form"
        onSubmit={(event) => props.submitCredentials(event)}
      >
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Email'
            placeholder='Please enter a valid email'
            name="email"
          />
        </Form.Group>
        <Form.TextArea
          label='Ingredients'
          placeholder='Please enter a valid password'
          name="password"
        />
        <Form.TextArea
          label='Directions'
          placeholder='Please repeat your password'
          name="password-confirmation"
        />
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

export default VerifyCredentialsForm