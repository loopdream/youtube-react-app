import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
          <h2>
            <Link to={`video/${videoId}`}>
              {title}
            </Link>
          </h2>
          <p>{published}</p>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
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
      <section>
        <ul>{this.renderVideos()}</ul> 
      </section>
    )

  }



}
export default VideoList