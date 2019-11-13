import React, { Component } from 'react'
import { Menu, Header, Icon } from 'semantic-ui-react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

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
            <NavLink id='nav-create' to='/create'>
              <Header position='right'>
                Create Recipe
            </Header>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink id='nav-home' to='/'>
              <Header position='right'>
                View Recipes
            </Header>
            </NavLink>
          </Menu.Item>

        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar