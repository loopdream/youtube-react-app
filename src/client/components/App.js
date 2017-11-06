import React from 'react'
import { Route, Link } from 'react-router-dom'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Header from './Header'
import NoMatch from './NoMatch'
import config from '../../config'
import styled from 'styled-components'


const Main = styled.main`
    background: black;
    height: 100vh
  `;


const App = ({ videoData}) => {
  
  const {   
    nextPageToken, 
    pageInfo, 
    videos, 
  } = videoData 

  const { pageCopy } = config

  return (
    <Main>
      <Header {...pageCopy} />
      <Route exact path="/" render={() => <VideoList videos={videos} {...pageCopy} />} />
      <Route path="/video/:videoId" render={
        ({ match }) => (
          <VideoDetail {...pageCopy} video={videos.find(v => v.videoId === match.params.videoId)} />
        )
      } />
    </Main>
  )

}

export default App
