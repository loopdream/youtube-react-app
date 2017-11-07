import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, mediaQueries } from '../styles/variables'

const VideoListItem = ({ 
  title,
  videoId,
  published,
  description,
  thumbnails,
  k
 }) => {
  
  const Title = styled.h2`

  `;

  const TitleLink = styled(Link) `
      
  `;

  const Published = styled.p`

  `;

  const Description = styled.p`
      
  `;


  const ListItem = styled.li`
      
  `; 

 
  return (
    <ListItem>
      <Title>
        <TitleLink to={`video/${videoId}`}>
          {title}
        </TitleLink>
      </Title>
      <Published>{published}</Published>
      <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
      <Link to={`video/${videoId}`}>
        <img
          src={thumbnails.high.url}
          alt={title} />
      </Link>
    </ListItem>
  )
} 

export default VideoListItem