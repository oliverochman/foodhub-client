import React, { Component } from 'react'
import { Header, Modal, Button, Grid, Form, Icon } from 'semantic-ui-react'
import { signInUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'
import AlertMessage from './AlertMessage'
import { Link } from "react-router-dom"

class Login extends Component {
  state = {
    message: null,
    error: false
  }

  submitCredentials = (event) => {
    event.preventDefault();
    const { signInUser } = this.props
    let { email, password } = event.target
    password = password.value
    email = email.value

    signInUser({ email, password })
      .then(
        console.log('Successful!')
      )
      .catch(error => {
        this.setState({
          message: error.response.data.errors,
          error: true
        })
      })
  }

  render() {
    let messages
    let { message, error } = this.state

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
        <Modal id='modal'
          basic size='small'
          open={this.props.modalOpen}
        >
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              {messages}
              <Header as='h1' color='teal' textAlign='center' fontSize='10rem'>
                <Icon name='universal access' size='large' /> Log in to your account
              </Header>
              <Form
                size='large'
                id="credentials-form"
                onSubmit={this.submitCredentials}
              >
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
                <Button
                  color='teal'
                  type='submit'
                  name='submit'
                  fluid size='large'
                >
                  Login
                </Button>
                <Button
                  style={{ marginTop: '0.8rem' }}
                  color='red'
                  type='submit'
                  name='cancel'
                  fluid size='large'
                  onClick={this.props.handleModalOpen}
                >
                  Cancel
                </Button>
              </Form>
              <Button
                  style={{ marginTop: '0.8rem' }}
                  color='blue'
                  fluid size='large'
                  onClick={this.props.handleModalOpen}
                >
                  <Link name='register' to='/signup' style={{ color: 'white' }}>
                  Not yet a member? Sign Up
                  </Link>
                </Button>
            </Grid.Column>
          </Grid>
        </Modal >
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
  signInUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)