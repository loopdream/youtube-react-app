import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fonts, colors, fontSizes } from '../styles/variables'
import { media, textLink, truncate } from '../styles/style-utils'

const VideoListItem = ({ 
  title,
  videoId,
  published,
  description,
  thumbnails,
  k
 }) => {

  // Styles
  
  const ListItem = styled.li`
    background-color: ${colors.white};
    padding: 1rem;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.18);
    margin-bottom: 1.5rem;
    transition: box-shadow 500ms;
    border-radius: .25rem;
    &:hover {
      box-shadow: 0 0 30px 0 rgba(0,0,0,0.38);
    }
    ${media.small`
      padding: 1.5rem;
    `}
    ${media.medium`
      display: flex;
      flex-direction: row-reverse;
       padding: 2.5rem;
    `}
  ` 
  
  const Title = styled.h2`
    font-weight: ${fonts.roboto.weights.light};
    margin-top: 0;
    width: 70%;
    margin-bottom: .5rem;
    font-size: ${fontSizes.f4};
    font-weight: ${fonts.roboto.weights.medium};
    line-height: 1.3rem;
  `

  const TitleLink = styled(Link) `
    
    text-transform: uppercase;
    ${textLink()}
  `

  const Published = styled.p`
    font-weight: ${fonts.roboto.weights.thin};
    font-size: ${fontSizes.f6};
    letter-spacing: 0.025rem;
    color: ${colors.black};
    margin-top: 0;
  `

  const Description = styled.p`
    font-weight: ${fonts.roboto.weights.light};
    color: ${colors.darkGrey};
    font-size: ${fontSizes.f5};
    line-height: 1.5rem;
    letter-spacing: 0.02rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    display: none;
    
    ${media.medium`
      display: block;
    `}
  `

  const ImageThumbLink = styled(Link)`
    border: 2px solid ${colors.black};
    display: block;
    &:hover {
      cursor: pointer;
    }
    ${media.medium`
      width: 60%;
    `}
  `

  const ImageThumb = styled.img`
    width: 100%;
    display block;
  `
  const VideoMeta = styled.div`
  ${media.medium`
    width: 40%;
    padding-left: 2rem;
  `}`


  // JSX
 
  return (
    <ListItem>
      <VideoMeta>
        <Title>
          <TitleLink to={`video/${videoId}`}>
            {title}
          </TitleLink>
        </Title>
        <Published>{published}</Published>
        <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
      </VideoMeta>
      <ImageThumbLink to={`video/${videoId}`}>
        <ImageThumb
          src={thumbnails.high.url}
          alt={title} />
      </ImageThumbLink>
    </ListItem>
  )
} 

export default VideoListItem