import React from 'react'
import { Route, Link } from 'react-router-dom'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Header from './Header'
import NoMatch from './NoMatch'
import { siteData } from '../../config'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import { container } from '../styles/style-utils'


const App = ({ videoData}) => {
  
  // vars 
  const {   
    nextPageToken, 
    pageInfo, 
    videos, 
  } = videoData 

  // console.log('siteData', siteData)
  
  // Styles
  const Main = styled.main`
    font-family: 'ibm-plex-mono',-apple-system,helvetica neue, helvetica, roboto, arial, sans-serif;
    color: ${colors.black};
  `

  const Container = styled.div`
    border-top: 6px solid ${colors.green};
  `

  // JSX 
  
  return (
    <Main>
      <Header {...siteData} />
      <Container>    
        <Route exact path="/" render={() => <VideoList videos={videos} {...siteData} />} />
        <Route path="/video/:videoId" render={
          ({ match }) => (
            <VideoDetail {...siteData} video={videos.find(v => v.videoId === match.params.videoId)} />
          )
        } />
      </Container>
    </Main>
  )

}

export default App
