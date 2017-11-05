import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoMatch from './NoMatch'

class VideoListTest extends Component {
  
  renderVideos() {
    
    let videos = this.props.videos.filter(v => v.thumbnails) // remove videos that dont have thumbs (deleted)
    return videos ?  videos.map((v, k) => {
      let {
        title,
        videoId,
        published,
        description,
        thumbnails,
      } = v
      return (
        <li key={k}>
          <h3>
            <Link to={`video/${videoId}`}>
              {title}
            </Link>
          </h3>
          <p>{published}</p>
          <p>{description}</p>
          <Link to={`video/${videoId}`}>
            <img
              src={thumbnails.high.url}
              alt={title} />
           </Link>
        </li>
      )
    }) : <li>Nothing</li> 

  }

  render() {

    return <ul>{this.renderVideos()}</ul>

  }



}
export default VideoList