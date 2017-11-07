import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'
import VideoListItem from './VideoListItem'

class VideoList extends Component {
  
  constructor(props) {
    super()
  }

  renderVideos() {
    let vids = this.props.videos.filter(v => v.thumbnails) // remove videos that dont have thumbs (deleted)
    return vids ? vids.map((v, k) => {
      return <VideoListItem {...v} key={k} />
    }) : <li>Nothing</li> 
  }
  

  render() {
  
    const List = styled.ul`
      
    `; 

    return (
      <section>
        <ul>{this.renderVideos()}</ul> 
      </section>
    )

  }

}

export default VideoList