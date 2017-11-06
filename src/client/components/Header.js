import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'



const Header = ({ indexHeading, backToListText }) => {
  
  const Header = styled.header`
    background: ${colors.lightGrey};
  `;

  const Container = styled.div`
    margin: 0 auto;
    width: 900px;
  `;

  const Heading = styled.h1`
    margin: 0;
    font-weight: 700; 
    letter-spacing: -.03rem;
    padding: 20px 0;
  `;

  return (
    <Header>
      <Container>
        <Route exact path="/" render={() => <Heading>{indexHeading}</Heading>} />
        <Route path="/video/:videoId" render={
          ({ match }) => (
            <Link to="/">{backToListText}</Link>
          )
        } />
      </Container>
    </Header>
  )
}


export default Header
