import React from 'react'
import { Route, Link } from 'react-router-dom'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Header from './Header'
import NoMatch from './NoMatch'
import config from '../../config'
import styled from 'styled-components'
import { colors, mediaQuerySizes as sizes } from '../styles/variables'
import { media, container } from '../styles/style-utils'


const App = ({ videoData}) => {
  
  // vars 
  const {   
    nextPageToken, 
    pageInfo, 
    videos, 
  } = videoData 

  const { pageCopy } = config

  // Styles
  const Main = styled.main`
    background: ${colors.lightGrey};
    font-family: 'Roboto', sans-serif;
    color: ${colors.black};
  `

  const Container = styled.div`
    margin: 0 auto;
    ${media.large`
      width: ${sizes.large}px
    `}
  `

  // JSX 
  
  return (
    <Main>
      <Header {...pageCopy} />
      <Container>    
        <Route exact path="/" render={() => <VideoList videos={videos} {...pageCopy} />} />
        <Route path="/video/:videoId" render={
          ({ match }) => (
            <VideoDetail {...pageCopy} video={videos.find(v => v.videoId === match.params.videoId)} />
          )
        } />
      </Container>
    </Main>
  )

}

export default App
