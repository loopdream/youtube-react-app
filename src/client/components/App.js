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
    background-image: repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,.5) 20px, rgba(255,255,255,.5) 40px);
    font-family: 'ibm-plex-mono',-apple-system,helvetica neue, helvetica, roboto, arial, sans-serif;
    color: ${colors.black};
  `

  const Container = styled.div`
    border-top: 6px solid ${colors.green};
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
