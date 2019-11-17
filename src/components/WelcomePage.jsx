import React, { Component } from "react"
import LazyHero from 'react-lazy-hero';
import ListRecipes from './ListRecipes'
import { Container, Header } from 'semantic-ui-react'
import '../css/welcome-page.css'

class Welcome extends Component {
  render() {

    return (
      <>
        <div id="welcome">
          <LazyHero
            parallaxOffset={1}
            minHeight='55vh'
            color='#383838'
            opacity={0.2}
            imageSrc="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          >
            <h1>
              Social Cooking
            </h1>
            <h5>
              by
            </h5>
            <h2>
              foodhub
            </h2>
          </LazyHero>
        </div>
      <Container style={{marginTop: '2vh'}}>
        <Header as="h1">Bring your recipies to the world</Header>
      <ListRecipes />

      </Container>
      </>
    )
  }
}
export default Welcome;