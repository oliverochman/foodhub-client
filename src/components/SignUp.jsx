import React, { Component } from 'react'
import { Header, Button, Grid, Form, Icon } from 'semantic-ui-react'
import { registerUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'
import AlertMessage from './AlertMessage'
import { Link } from "react-router-dom"

class SignUp extends Component {
  state = {
    message: null,
    error: false
  }

  handleSignUp = (event) => {
    event.preventDefault();
    const { registerUser } = this.props;
    let { name, email, password, password_confirmation } = event.target
    name = name.value
    email = email.value
    password = password.value
    password_confirmation = password_confirmation.value

    registerUser({ name, email, password, password_confirmation })
      .then(
        console.log('You have successfully been signed up')
      )
      .catch(error => {
        this.setState({
          message: error.response.data.errors.full_messages,
          error: true
        })
      })
  }

  render() {
    let messages
    let { message, error } = this.state

    if (message) {
      messages = (
        <AlertMessage
          message={message}
          error={error}
        />
      )
    }

    return (
      <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            {messages}
            <Header as='h1' color='teal' textAlign='center' fontSize='10rem'>
              <Icon name='universal access' size='large' />
              Register an account
              </Header>
            <Form
              size='large'
              id="signup-form"
              onSubmit={this.handleSignUp}
            >
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Please enter your email'
                name="name"
              />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Please enter your email'
                name="email"
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Please enter your password'
                name='password'
                type='password'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Please enter your password'
                name='password_confirmation'
                type='password'
              />
            <Button
              color='teal'
              type='submit'
              name='submit'
              fluid size='large'
            >
              Sign Up
                </Button>
            </Form>
          <Button
            style={{ marginTop: '0.8rem' }}
            color='red'
            fluid size='large'
          >
            <Link name='cancel' to='/' style={{ color: 'white' }}>
              Cancel
                  </Link>
          </Button>
          </Grid.Column>
      </Grid>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

const mapDispatchToProps = {
  registerUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)