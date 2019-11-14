import React, { Component } from 'react'
import { Menu, Header, Icon, Responsive, Sidebar } from 'semantic-ui-react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  state = { visibleSidebar: false }

  handleShowClick = () => this.setState({ visibleSidebar: true })
  handleSidebarHide = () => this.setState({ visibleSidebar: false })

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
                foodhub
            </Header>
              <Icon name='food' size='large' />
            </Menu.Item>
            <Menu.Item onClick={this.handleShowClick} position='right' id="sidebar-menu">
              <Icon size="big" name="align justify" />
            </Menu.Item>
          </Menu>

          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={this.state.visibleSidebar}
            onClick={this.handleSidebarHide}
            style={{ minWidth: "100%" }}
            id="mobile-menu"
          >
            <Menu.Item
              style={{ height: "2.5rem", lineHeight: "2.5rem", fontWeight: 'bold', marginTop: '3rem' }}>
              <Header
                position='left'
                id='navbar-header'
                style={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Anton', color: 'white' }}>
                foodhub
            </Header>
              <Icon name='food' size='huge' />
            </Menu.Item>
            <Menu.Menu style={{ marginTop: '10rem' }}>
              <Menu.Item
                id='nav-create'
                as={NavLink}
                to='/create'
                style={{ height: "2.5rem", lineHeight: "2.5rem", fontWeight: 'bold', padding: '2rem' }}>
                <Header position='right' style={{ height: "2.5rem", lineHeight: "2.5rem", fontWeight: 'bold', color: 'white', fontFamily: 'Condiment' }}>
                  Create Recipe
            </Header>
              </Menu.Item>
              <Menu.Item
                id='nav-home'
                as={NavLink}
                to='/'
                style={{ height: "2.5rem", lineHeight: "2.5rem", fontWeight: 'bold', padding: '2rem' }}>
                <Header position='right' style={{ height: "2.5rem", lineHeight: "2.5rem", fontWeight: 'bold', color: 'white', fontFamily: 'Condiment' }}>
                  View Recipes
            </Header>
              </Menu.Item>
            </Menu.Menu>
          </Sidebar>
        </Responsive>

        <Responsive {...notMobile}>
          <Menu id='navbar' borderless={true}>
            <Menu.Item>
              <Header
                position='left'
                id='navbar-header'
                style={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Anton' }}>
                foodhub
            </Header>
              <Icon name='food' size='huge' />
            </Menu.Item>
            <Menu.Item id='nav-create' as={NavLink} to='/create'>
              <Header position='right' style={{ fontFamily: 'Condiment' }}>
                Create Recipe
            </Header>
            </Menu.Item>
            <Menu.Item id='nav-home' as={NavLink} to='/'>
              <Header position='right' style={{ fontFamily: 'Condiment' }}>
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