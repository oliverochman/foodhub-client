import React, { Component } from "react"
import LazyHero from 'react-lazy-hero';
import ListRecipes from './ListRecipes'
import { Container, Header, Icon } from 'semantic-ui-react'
import '../css/welcome-page.css'
import { Responsive, Segment } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';

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
                <h5 style={{ textAlign: 'center' }}>
                  by
                </h5>
                <h2 style={{ textAlign: 'center' }}>
                  FOODHUB
                </h2>
              </div>
              <Link
                to="/#view-all-recipes"
                activeClassName="selected">
                <Icon name="arrow circle down" size="huge" />
              </Link>
            </Responsive>
            <Responsive as={Segment} maxWidth={1229} style={{ padding: '4rem', paddingBottom: '8rem', opacity: '0.8', borderRadius: '10px' }}>
              <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
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
              <Link
                to="/#view-all-recipes"
                activeClassName="selected">
                <Icon name="arrow circle down" size="huge" />
              </Link>
            </Responsive>
          </LazyHero>
        </div>
        <Container style={{ marginTop: '2vh', fontSize: '1.5rem' }}>
          <Header sub
            style={{ fontStyle: 'italic', fontWeight: 'bold', marginBottom: '2rem', backgroundColor: '#FCE8CE', width: '100vw', padding: '1rem', borderRadius: '5px', boxShadow: "1px 3px 1px #fcdcce" }} id="view-all-recipes">
            <Icon name="caret down" size="huge" />
            Bring your recipes to the world!
            </Header>
          <ListRecipes />
        </Container>
      </>
    )
  }
}
export default Welcome;