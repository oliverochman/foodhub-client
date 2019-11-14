import React, { Component } from 'react'
import { Message, Header } from 'semantic-ui-react'
import VerifyCredentialsForm from './VerifyCredentialsForm'
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
    const { email, password } = event.target
    signInUser(email.value, password.value)
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
    } else {
      loginForm = (
        <>
          <VerifyCredentialsForm
            submitCredentials={this.submitCredentials}
          />
        </>
      )
    }

    return (
      <div className="create-wrapper">
        <Header as='h1'>Welcome to the login page</Header>
        {welcomeMessage}
        {messages}
        {loginForm}
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
  signInUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)