import React from 'react'
import { Route, Link } from 'react-router-dom'

const Header = ({ indexHeading, backToListText }) => {
 
  return (
    <header>
      <Route exact path="/" render={() => <h1>{indexHeading}</h1>} />
      <Route path="/video/:videoId" render={
        ({ match }) => (
          <Link to="/">{backToListText}</Link>
        )
      } />
    </header>
  )
}


export default Header
