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
        <Menu.Item id='nav-logout' onClick={signOut} className='fake-link-hover'>
          <Header position='right' onClick={this.props.handleModalOpen}>
            Log out
          </Header>
        </Menu.Item>
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