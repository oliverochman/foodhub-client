import React, { Component } from 'react'
import { signOutUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'
import { Menu, Header } from 'semantic-ui-react'
import AlertMessage from './AlertMessage'

class Logout extends Component {
state = { message: null, error: '' }

  signOut = () => {
    const { signOutUser } = this.props
    signOutUser()
    this.setState({
      message: 'Please visit again soon!',
      error: false
    })
  }

  render() {
    const { signOut } = this
    let {message, error} = this.state
    let signOutMessage
    console.log(message)
    if (this.props.currentUser.isSignedIn === false) {
      signOutMessage = (
        <AlertMessage 
        message={message}
        error={error}
        />
      )}

    return (
      <>
        <Menu.Item id='nav-logout' onClick={signOut}>
          <Header position='right' onClick={this.props.handleModalOpen} style={{ fontFamily: 'Condiment' }}>
            Log out
          </Header>
        </Menu.Item>
        {signOutMessage}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps,
  {signOutUser}
)(Logout);