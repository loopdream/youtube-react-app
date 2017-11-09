import React from 'react'
import styled from 'styled-components'
import { media, container } from '../styles/style-utils'
import Header from './Header'
 
const Container = styled.div`
  ${media.small`
    padding: 2rem 3rem;
  `}
  ${media.medium`
    padding: 3rem 5rem;
  `}
  ${container()}`

  
export default () => (
  <Container>
    <h1>404!</h1>
    <p>The page you requested could not be found.</p>
  </Container>
)
