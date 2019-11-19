import React, { Component } from "react"
import LazyHero from 'react-lazy-hero';
import ListRecipes from './ListRecipes'
import { Container, Header } from 'semantic-ui-react'
import '../css/welcome-page.css'
import { Responsive, Segment } from 'semantic-ui-react'

class Welcome extends Component {
  render() {

    return (
      <>
        <div id="welcome">
          <LazyHero
            parallaxOffset={1}
            minHeight='95vh'
            opacity={0.2}
            imageSrc="https://github.com/miyeaier/react-portfolio/blob/master/Img/AdobeStock_199252786.jpeg?raw=true"
          >
            <Responsive minWidth={1230}>
            <div className="welcome-text" style={{ marginRight: '50rem', marginBottom: '20rem', textAlign: 'left' }}>
              <h1>
                Social Cooking
            </h1>
              <h5>
                by
            </h5>
              <h2>
                FOODHUB
            </h2>
            </div>
            </Responsive>
            <Responsive as={Segment} maxWidth={1229} style={{ padding: '4rem', paddingBottom: '8rem', opacity: '0.8' }}>
              <div style={{ textAlign: 'center' }}>
                <h1>
                  Social Cooking
            </h1>
                <h5>
                  by
            </h5>
                <h2>
                  FOODHUB
            </h2>
              </div>
            </Responsive>
          </LazyHero>
        </div>
        <Container style={{ marginTop: '2vh' }}>
          <Header>Bring your recipes to the world!</Header>
          <ListRecipes />
        </Container>
      </>
    )
  }
}
export default Welcome;