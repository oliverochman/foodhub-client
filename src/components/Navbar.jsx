import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'
import '../css/navbar.css'

class Navbar extends Component {

  render() {

    return (
      <Menu id='navbar'>
        <Header 
          position='left' 
          id='navbar-header' 
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

export default Navbar