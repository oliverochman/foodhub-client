import React, { Component } from 'react'
import { Menu, Header, Modal, Button } from 'semantic-ui-react'
import '../css/navbar'
import { connect } from 'react-redux'

class Navbar extends Component {

  render() {

    return (
      <Menu id='navbar'>
        <Header 
          position='left' 
          id='header' 
          style={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Anton' }}
        >
          Food Hub
        </Header>
        <Menu.Menu position='right'>
        <Header 
          position='right' 
          id='header' 
          >
          Create Recipe
        </Header>
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  }
}

export default connect(
  mapStateToProps
)(Navbar)