import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import YoutubePlayer from 'react-youtube'
import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'


const VideoDetail = ({ video, backToListText }) => {

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
        <h1>{title}</h1>
        <p>{published}</p>
      </header>
      <YoutubePlayer {...videoOpts} />
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </article>
  )
}


export default VideoDetail