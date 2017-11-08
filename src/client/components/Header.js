import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { fonts, colors, mediaQuerySizes, fontSizes } from '../styles/variables'
import { media, textLink } from '../styles/style-utils';

const Header = ({ indexHeading, backToListText }) => {
  
  // Styles

  const Header = styled.header`
    background: ${colors.white};
    border-bottom: 20px solid ${colors.darkGrey};
    padding: 1.5rem 2.5rem;
  `;

  const Container = styled.div`
    margin: 0 auto;
     ${media.small`
      display: flex;
    `}
  `

  const Heading = styled.h1`
    margin: 0;
    font-weight: ${fonts.roboto.weights.bold}; 
    font-size: ${fontSizes.f2};
    color: ${colors.black};
    line-height: 2.2rem;
  `

 
  const StyledLink = styled(Link) `
    font-weight: 700; 
    ${textLink()}
  `

  // Helpers

  const formatHeadingStr = (str) => {
    return str.split(' ').map(word => `<span style="display: block;">${word}</span>`).join(' ')
  }
  
  // JSX

  return (
    <Header>
      <Container>
        <Heading dangerouslySetInnerHTML={{ __html: formatHeadingStr(indexHeading) }}></Heading>
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
