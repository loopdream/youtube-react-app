import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'



const Header = ({ indexHeading, backToListText }) => {
  
  const Header = styled.header`
    background: ${colors.navy};
    border-bottom: 6px solid ${colors.lightGrey}
  `;

  const Container = styled.div`
    margin: 0 auto;
    width: 900px;
  `;

  const Heading = styled.h1`
    margin: 0;
    font-weight: 300; 
    letter-spacing: -.03rem;
    padding: 20px 0;
    color: ${colors.green}
  `;

  const StyledLink = styled(Link) `
	  color: ${colors.green};
	  font-weight: 700; 
  `;

  return (
    <Header>
      <Container>
        <Route exact path="/" render={() => <Heading>{indexHeading}</Heading>} />
        <Route path="/video/:videoId" render={
          ({ match }) => (
            <StyledLink to="/">{backToListText}</StyledLink>
          )
        } />
      </Container>
    </Header>
  )
}


export default Header
