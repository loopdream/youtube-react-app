import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NoMatch from './NoMatch'
import { mq, container } from '../styles/style-utils'
import { colors, fontSizes } from '../styles/variables'


const VideoDetail = ({ video, backToListText }) => {

  
  if (!video || video === undefined || video === null) {
    return <NoMatch />
  } 
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
 
  
  const DetailWapper = styled.div``
  
  const ArticleWrapper = styled.div`
    padding: 5rem 1.5rem 1.5rem;
    margin: 0 auto;
    ${mq.greaterThan('md')`
      padding: 2.5rem;
    `}
    ${container()}`

  const Article = styled.article`
    background-color: ${colors.white};
    padding: 1rem;
    margin: 0 auto;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.18);
    ${mq.greaterThan('sm')`
      padding: 1.5rem;
    `}
    ${mq.greaterThan('md')`
      padding: 2.5rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    `}`

  const Header = styled.header`
    ${mq.greaterThan('md')`
      flex: 1 0 50%;
  `}`


  const VideoOuterWrapper = styled.div`
    ${mq.greaterThan('md')`
      width: 100%;
      width: 60%;
    `}
  `
  const VideoInnerWrapper = styled.div`
    position: relative;
    padding-bottom: 75%;
    height: 0px;
  `
  
  const YoutubePlayer = styled.iframe`
    border: 2px solid ${colors.black};
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
  `

  const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${fontSizes.f3};
  `
    
  const Published = styled.p`
    color: ${colors.midGrey};
    font-size: ${fontSizes.f6};
    margin: 1rem 0 1.5rem; 
  `

  const Description = styled.p`
    margin: 1rem 0 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.5rem;
    ${mq.greaterThan('md')`
      margin: 0;
      padding-left: 2rem;
      width: 40%;
    `}
  `

  return (
    <ArticleWrapper>
      <Article>
        <Header>
          <Title>{title}</Title>
          <Published>{published}</Published>
        </Header>
          <VideoOuterWrapper>
            <VideoInnerWrapper>
              <YoutubePlayer
                width="560" height="315"
                src={`https://www.youtube.com/embed/${videoId}?html5=1&amp;rel=0&amp;showinfo=0`}
                frameBorder="0" gesture="media" allowfullscreen>
              </YoutubePlayer>
            </VideoInnerWrapper>
          </VideoOuterWrapper>
          <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
      </Article>
    </ArticleWrapper>
  )
}

export default VideoDetail
