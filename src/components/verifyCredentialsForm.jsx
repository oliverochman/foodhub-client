import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const VerifyCredentialsForm = (props) => {
  return (
    <>
      <Form id="credentials-form"
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
        <Form.Input
          label='Password'
          placeholder='Please enter a valid password'
          name="password"
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