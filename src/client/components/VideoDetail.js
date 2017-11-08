import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import YoutubePlayer from 'react-youtube'
import styled from 'styled-components'
import { media } from '../styles/style-utils'
import { colors, fontSizes, mediaQuerySizes as sizes } from '../styles/variables'


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
 
  
  const Details = styled.div`
    ${media.medium`
      display; flex;
    `}
  `

  const YoutubePlayer = styled.iframe`
    border: 2px solid ${colors.black};\
    width: 100%;
  `
  

  const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${fontSizes.f3};
  `
    
  const Published = styled.p`
    color: ${colors.midGrey};
    font-size: ${fontSizes.f6};
    margin: .5rem 0 1.5rem; 
  `


  const ArticleWrapper = styled.div`
    padding: 1.5rem;
    margin: 0 auto;
    ${media.medium`
      padding: 2.5rem;
    `}
    ${media.large`
      width: ${sizes.large}px
    `}`

  const Article = styled.article`
    background-color: ${colors.white};
    padding: 1rem;
    margin: 0 auto;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.18);
    ${media.small`
      padding: 1.5rem;
    `}
    ${media.medium`
      padding: 2.5rem;
    `}`

  const Description = styled.p`
    margin: 1rem 0 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.5rem;
    ${media.medium`
      margin: 0;
    `}
  `

  const Header = styled.header`
    
    ${media.medium`
    `}
  `
  

  // JSX

  return (
    <ArticleWrapper>
      <Article>
        <Header>
          <Title>{title}</Title>
          <Published>{published}</Published>
        </Header>
        <Details>
          <YoutubePlayer
            width="560" height="315"
            src={`https://www.youtube.com/embed/${videoId}?html5=1&amp;rel=0&amp;showinfo=0`}
            frameBorder="0" gesture="media" allowfullscreen>
          </YoutubePlayer>
          <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
        </Details>
      </Article>
    </ArticleWrapper>
  )
}


export default VideoDetail

/*           <YoutubePlayer
            width="560" height="315"
            src={`https://www.youtube.com/embed/${videoId}?html5=1&amp;rel=0&amp;showinfo=0`}
            frameBorder="0" gesture="media" allowfullscreen>
          </YoutubePlayer> */