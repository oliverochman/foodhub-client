import React, { Component } from 'react'
import { Menu, Header, Icon } from 'semantic-ui-react'
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
        <Icon name='food' size='huge' />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Header position='right'>
              Create Recipe
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Header position='right'>
              Login
            </Header>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar