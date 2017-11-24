import React from 'react'
import styled from 'styled-components'
import { mq, container } from '../styles/style-utils'
import Header from './Header'
 
const Container = styled.div`
  ${mq.greaterThan('sm')`
    padding: 2rem 3rem;
  `}
  ${mq.greaterThan('md')`
    padding: 3rem 5rem;
  `}
  ${container()}`

  
export default () => (
  <Container>
    <h1>404!</h1>
    <p>The page you requested could not be found.</p>
  </Container>
)
