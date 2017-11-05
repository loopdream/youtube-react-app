import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoMatch from './NoMatch'

class VideoList extends Component {
  
  constructor(props) {
    super()
  }

  renderVideos() {

    let vids = this.props.videos.filter(v => v.thumbnails) // remove videos that dont have thumbs (deleted)
    return vids ? vids.map((v, k) => {
      let {
        title,
        videoId,
        published,
        description,
        thumbnails
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

    return (
      <main>
        <header>
          <h1>{this.props.indexHeading}</h1>
        </header>
        <ul>{this.renderVideos()}</ul> 
      </main>
    )

  }



}
export default VideoList