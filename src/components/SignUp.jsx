import React, { Component } from 'react'
import { Header, Button, Grid, Form, Icon, Segment } from 'semantic-ui-react'
import { registerUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'
import AlertMessage from './AlertMessage'
import { NavLink } from 'react-router-dom'
import '../css/sign-up.css'

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
      <div className="signup-bg">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            {messages}
            <Segment>
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
                  placeholder='Please enter your name'
                  name="name"
                />
                <Form.Input
                  fluid
                  icon='mail'
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
                  placeholder='Please confirm your password'
                  name='password_confirmation'
                  type='password'
                />
                <Button
                  color='teal'
                  type='submit'
                  name='submit'
                  fluid size='large'
                  style={{ marginBottom: '0.8rem' }}
                >
                  Sign Up
                </Button>
              </Form>
              <Button
                color='red'
                fluid size='large'
                as={NavLink}
                to='/'
                name="cancel"
                style={{ color: 'white' }}
              >
                  Cancel
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
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