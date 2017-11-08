import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, mediaQuerySizes as sizes, fontSizes } from '../styles/variables'
import { media, textLink } from '../styles/style-utils';

const Header = ({ indexHeading, backToListText }) => {
  
  // Styles

  const Header = styled.header`
    background: ${colors.white};
    border-bottom: 20px solid ${colors.darkGrey};
  `;

  const Container = styled.div`
    margin: 0 auto;
    padding: 1.5rem 2.5rem;
    ${media.small`
      padding: 2rem 3rem;
    `}
    ${media.medium`
      padding: 3rem 5rem;
    `}
    ${media.small`
      display: flex;
      justify-content: space-between;
    `}
    ${media.large`
      width: ${sizes.large}px
    `}
  `

  const Heading = styled.h1`
    margin: 0;
    font-size: ${fontSizes.f2};
    color: ${colors.black};
    line-height: 2.2rem;
  `

 
  const StyledLink = styled(Link) `
    font-weight: 700; 
    align-self: flex-end;
    ${textLink()}
    padding-left: .4rem;
    &:before {
      border-style: solid;
      border-width: 0.25em 0.25em 0 0;
      content: '';
      display: inline-block;
      height: 0.45em;
      left: 0.15em;
      position: relative;
      top: .4rem;
      transform: rotate(-45deg);
      vertical-align: top;
      width: 0.45em;
      left: -.4rem;
      transform: rotate(-135deg);
    }
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
