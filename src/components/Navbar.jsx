import React, { Component } from 'react'
import { Menu, Header, Icon, Responsive } from 'semantic-ui-react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  state = { visibleSidebar: false }

  handleShowClick = () => this.setState({ visibleSidebar: true })

  render() {
    const notMobile = { minWidth: Responsive.onlyMobile.maxWidth + 1 }

    return (
<>
      <Responsive {...Responsive.onlyMobile}>
        <Menu id='navbar' style={{ marginTop: "1em" }}>
          <Menu.Item>
            <Header
              position='left'
              id='navbar-header'
              style={{ fontSize: '2rem', textAlign: 'center', fontFamily: 'Anton' }}>
              Food Hub
            </Header>
            <Icon name='food' size='small' />
          </Menu.Item>
          <Menu.Item onClick={this.handleShowClick}>
          <Icon size="big" name="align justify" />
          </Menu.Item>
        </Menu>
      </Responsive>

      <Responsive {...notMobile}>
        <Menu id='navbar' borderless={true}>
          <Menu.Item>
            <Header
              position='left'
              id='navbar-header'
              style={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Anton' }}>
              Food Hub
            </Header>
            <Icon name='food' size='huge' />
          </Menu.Item>
          <Menu.Item id='nav-create' as={NavLink} to='/create'>
            <Header position='right'>
              Create Recipe
            </Header>
          </Menu.Item>
          <Menu.Item id='nav-home' as={NavLink} to='/'>
            <Header position='right'>
              View Recipes
            </Header>
          </Menu.Item>
        </Menu>
      </Responsive >
      </>
    )
  }
}

export default Navbar