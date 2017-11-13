import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fontSizes } from '../styles/variables'
import { mq, textLink, truncate } from '../styles/style-utils'

const VideoListItem = ({ 
  title,
  videoId,
  published,
  description,
  truncatedDescription,
  thumbnails,
  k,
 }) => {

  // Styles
  
  const ListItem = styled.li`
    background-color: ${colors.white};
    padding: 1rem;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.18);
    margin-bottom: 1.5rem;
    transition: box-shadow 500ms;
    &:hover {
      box-shadow: 0 0 30px 0 rgba(0,0,0,0.38);
    }
    ${mq.greaterThan('sm')`
      padding: 1.5rem;
      flex-basis: 50%;
    `}
    ${mq.greaterThan('md')`
      display: flex;
      flex-direction: row-reverse;
      padding: 2.5rem;
      margin-bottom: 2.5rem;
    `}
  ` 
  
  const Title = styled.h2`
    margin-top: 0;
    width: 70%;
    margin-bottom: .5rem;
    font-size: ${fontSizes.f3};
    line-height: 1.5rem;
    ${mq.greaterThan('sm')`
      width: 100%;
      line-height: 1.7rem;
    `}
    ${mq.greaterThan('md')`
      width: 85%;
    `}
  `

  const TitleLink = styled(Link) `
    ${textLink()}
  `

  const Published = styled.p`
    font-size: ${fontSizes.f6};
    letter-spacing: 0.025rem;
    color: ${colors.midGrey};
    margin-top: 0;
    ${mq.greaterThan('md')`
      font-size: ${fontSizes.f7};
    `}
  `

  const Description = styled.p`
    color: ${colors.darkGrey};
    font-size: ${fontSizes.f6};
    line-height: 1.2rem;
    letter-spacing: 0.02rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    display: none;
    ${mq.greaterThan('md')`
      display: block;
    `}
  `

  const ImageThumbLink = styled(Link)`
    display: block;
    &:hover {
      cursor: pointer;
    }
    ${mq.greaterThan('md')`
      width: 60%;
    `}
  `

  const ImageThumb = styled.img`
    width: 100%;
    display block;
    border: 2px solid ${colors.black};
  `
  const VideoDetails = styled.div`
  ${mq.greaterThan('md')`
    width: 40%;
    padding-left: 2rem;
  `}`


  // JSX
 
  return (
    <ListItem>
      <VideoDetails>
        <Title>
          <TitleLink to={`video/${videoId}`}>
            {title}
          </TitleLink>
        </Title>
        <Published>{published}</Published>
        <Description>{truncatedDescription}</Description>
      </VideoDetails>
      <ImageThumbLink to={`video/${videoId}`}>
        <ImageThumb
          src={thumbnails.high.url}
          alt={title} />
      </ImageThumbLink>
    </ListItem>
  )
} 

export default VideoListItem