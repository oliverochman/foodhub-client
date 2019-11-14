import React, { Component } from 'react'
import { Message, Header } from 'semantic-ui-react'
import VerifyCredentialsForm from './VerifyCredentialsForm'

class Login extends Component {
  state = {
    message: null,
    error: false
  }

  submitCredentials = (event) => {
    event.preventDefault();
    const { signInUser } = this.props
    const { email, password } = event.target
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

    return (
      <div className="create-wrapper">
        <Header as='h1'>Welcome to the login page</Header>
        {messages}
        <VerifyCredentialsForm
          submitCredentials={this.submitCredentials}
        />
      </div>
    )
  }
}

export default Login