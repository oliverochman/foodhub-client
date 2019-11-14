import React, { Component } from 'react'
import { signOutUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'
import { Button, Container, Header, Message } from 'semantic-ui-react'

class Logout extends Component {
  state = {
    message: null
  }

  signOut = () => {
    const { signOutUser } = this.props
    signOutUser()
      .then(
        console.log('Signed out!')
      )
      .catch(error => {
        this.setState({ message: error.response.data.errors })
      })
  }

  render() {
    let logoutButton, messages
    let { message } = this.state
    const { signOut } = this

    if (this.props.currentUser.isSignedIn) {
      logoutButton = (
        <>
          <Button id='logout-button' onClick={signOut}>Logout</Button>
        </>
      )
    }

    if (message) {
      messages = (
        <Message size="small">
          <Header
            as='p'
            id="response-message"
            style={{ color: 'red' }}>
            {message}
          </Header>
        </Message>
      )
    }

    return (
      <Container>
        {messages}
        {logoutButton}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

const mapDispatchToProps = {
  signOutUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);