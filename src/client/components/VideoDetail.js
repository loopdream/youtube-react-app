import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import YoutubePlayer from 'react-youtube'


class VideoDetail extends Component {

  constructor(props) {
    super()
  }
  
  encodedStr(str) {
    return { __html: str };
  }

  render() {

    const { video, backToListText } = this.props
    const {
      videoId,
      title,
      description,
      published,
      thumbnails,
    } = video
    const videoOpts = {
      videoId: videoId,
      width: '100%',
      height: '100%',
    }

    return (
      <article>
        <header>
          <Link to="/">
            {backToListText}
          </Link>
          <h1>{title}</h1>
          <p>{published}</p>
        </header>
        <YoutubePlayer {...videoOpts} />
        <p dangerouslySetInnerHTML={this.encodedStr(description)}></p>
      </article>
    )
  }

}


export default VideoDetail