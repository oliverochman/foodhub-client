import React, { Component } from 'react'
import { Message, Header, Modal, Button, Grid, Form, Icon } from 'semantic-ui-react'
import { signInUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'

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
    let messages, loginForm, welcomeMessage
    let { message, error } = this.state

    if (message) {
      messages = (
        <Message size="small" style={{ color: error ? 'red' : 'green' }}>
          <Header
            as='p'
            id="response-message"
            style={{ color: error ? 'red' : 'green' }}>
            {message}
          </Header>
        </Message>
      )
    }

    if (this.props.currentUser.isSignedIn) {
      welcomeMessage = <p id="welcome-message">Hello {this.props.currentUser.attributes.name}</p>
    }

    return (
      <>
        {welcomeMessage}
        {messages}

        <Modal id='modal'
          basic size='small'
          open={this.props.modalOpen}
          onHide={this.props.handleModalOpen}
          >
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
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
                  placeholder='Please enter a valid email'
                  name="email"
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Please enter a valid password'
                  name="password"
                />
                <Button
                  color='teal'
                  type="submit"
                  name="submit"
                  fluid size='large'
                >
                  Login
                </Button>
                <Button
                  style={{ marginTop: '0.8rem' }}
                  color='red'
                  type="submit"
                  name="submit"
                  fluid size='large'
                  onClick={this.props.handleModalOpen}
                >
                  Cancel
                </Button>
              </Form>
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