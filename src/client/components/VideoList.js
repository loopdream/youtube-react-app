import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'
import VideoListItem from './VideoListItem'
import { mq, container } from '../styles/style-utils'

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
    
    // styles 
    const ListingSection = styled.section`
      padding: 1.5rem 1.5rem 0 1.5rem;
      margin: 0 auto;
      ${mq.greaterThan('md')`
        padding: 2.5rem 2.5rem 0 2.5rem;
      `}
      ${container()}`

    const List = styled.ul`
      padding: 0;
      margin: 0;
      list-style-type: none;
      ${mq.between('sm', 'md')`
        display: flex;
        flex-flow: row wrap;
      `}
      `

    // JSX 

    return (
      <ListingSection>
        <List>{this.renderVideos()}</List> 
      </ListingSection>
    )

  }

}

export default VideoList