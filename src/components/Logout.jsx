import React, { Component } from 'react'
import { signOutUser } from '../state/actions/reduxTokenAuthConfig'
import { connect } from 'react-redux'
import { Menu, Header } from 'semantic-ui-react'

class Logout extends Component {

  signOut = () => {
    const { signOutUser } = this.props
    signOutUser()
  }

  render() {
    const { signOut } = this

    return (
      <>
        <Menu.Item id='nav-logout' onClick={signOut}>
          <Header position='right' style={{ fontFamily: 'Condiment' }}>
            Log out
          </Header>
        </Menu.Item>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps,
  {signOutUser}
)(Logout);