import React from 'react'
import { Route, Link } from 'react-router-dom'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import config from '../../config'

const App = ({ videoData }) => {
  
  let { 
    nextPageToken, 
    pageInfo, 
    videos, 
  } = videoData 

  let { pageCopy } = config

  return (
    <div>
      <Route exact path="/" render={() => <VideoList videos={videos} {...pageCopy} />} />
      <Route path="/video/:videoId" render={
        ({ match }) => (
          <VideoDetail {...pageCopy} video={videos.find(v => v.videoId === match.params.videoId)} />
        )
      } />
    </div>
  )

}

export default App
