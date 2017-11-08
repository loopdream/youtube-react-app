import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import YoutubePlayer from 'react-youtube'
import styled from 'styled-components'
import { media } from '../styles/style-utils'
import { colors, mediaQuerySizes as sizes } from '../styles/variables'


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
 
  const YoutubePlayer = styled.iframe``

  const Title = styled.h1``
    


  const Published = styled.p``

  const Description = styled.p``

  const ArticleWrapper = styled.div`
    padding: 1.5rem 1.5rem 0 1.5rem;
    margin: 0 auto;
    ${media.medium`
      padding: 2.5rem 2.5rem 0 2.5rem;
    `}
    ${media.large`
      width: ${sizes.large}px
    `}`


  const Article = styled.article`
    background-color: ${colors.white};
    padding: 1rem;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.18);
    ${media.small`
      padding: 1.5rem;
    `}
    margin: 0 auto;
    ${media.medium`
      padding: 2.5rem;
    `}
    ${media.large`
      width: ${sizes.large}px
    `}
  `

  // JSX

  return (
    <ArticleWrapper>
      <Article>
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
      </Article>
    </ArticleWrapper>
  )
}


export default VideoDetail