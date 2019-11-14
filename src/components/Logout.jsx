import React, { Component } from 'react'
import { signOutUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'
import { Button, Container } from 'semantic-ui-react'

class Logout extends Component {
  state = {
    error: false
  }

  signOut = () => {
    const { signOutUser } = this.props
    signOutUser()
    debugger;
      .then(
        console.log('Signed out!')
      )
      .catch(error => {
        debugger;
        this.setState({ error: true })
      })
  }

  render() {
    let logoutButton
    const { signOut } = this

    if (this.props.currentUser.isSignedIn) {
      logoutButton = (
        <div>
          <Button id='logout-button' onClick={signOut}>Logout</Button>
        </div>
      )
    }

    return (
      <Container>
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