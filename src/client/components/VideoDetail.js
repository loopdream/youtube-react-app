import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import YoutubePlayer from 'react-youtube'
import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'


const VideoDetail = ({ video, backToListText }) => {

  // Styles

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
 
  const YoutubePlayer = styled.iframe`

  `

  const Title = styled.h1`
    
  `

  const Published = styled.p`
  
  `

  const Description = styled.p`
  
  `

  // JSX

  return (
    <article>
      <header>
        <Title>{title}</Title>
        <Published>{published}</Published>
      </header>
      <YoutubePlayer
        width="560" height="315"
        src={`https://www.youtube.com/embed/${videoId}?html5=1&amp;rel=0&amp;showinfo=0`}
        frameBorder="0" gesture="media" allowfullscreen>
      </YoutubePlayer>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </article>
  )
}


export default VideoDetail