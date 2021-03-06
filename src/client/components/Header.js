import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fontSizes } from '../styles/variables'
import { mq, textLink, linkWithChevron, container } from '../styles/style-utils';


const Header = ({ title, backToListText }) => {
  
  // Styles
  const Header = styled.header`
    background: ${colors.white};
    border-bottom: 20px solid ${colors.darkGrey};
    position: relative;
  `;

  const Container = styled.div`
    margin: 0 auto;
    padding: 1.5rem 2.5rem;
    ${mq.greaterThan('sm')`
      padding: 2rem 3rem;
    `}
    ${mq.greaterThan('md')`
      display: flex;
      justify-content: space-between;
      padding: 3rem 5rem;
    `}
    ${container()}
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
    ${linkWithChevron()}
    ${mq.greaterThan('md')`
      position: relative;
      right: auto;
      bottom: auto;
    `}
  `

  // Helpers

  const formatHeadingStr = (str) => {
    return str.split(' ').map(word => `<span style="display: block;">${word}</span>`).join(' ')
  }
  
  // JSX

  return (
    <Header>
      <Container>
        <Heading dangerouslySetInnerHTML={{ __html: formatHeadingStr(title) }}></Heading>
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
