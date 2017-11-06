import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'


const Header = ({ indexHeading, backToListText }) => {
  
  const Header = styled.header`
    background: black;
  `;

  return (
    <Header>
      <Route exact path="/" render={() => <h1>{indexHeading}</h1>} />
      <Route path="/video/:videoId" render={
        ({ match }) => (
          <Link to="/">{backToListText}</Link>
        )
      } />
    </Header>
  )
}


export default Header
