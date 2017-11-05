import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YoutubePlayer from 'react-youtube';

/* 
{
  videoId,
  title,
  description,
  published,
  thumbnails
} */
const VideoDetail = ({ video, backToListText }) => {

  const {
    videoId,
    title,
    description,
    published,
    thumbnails
  } = video;

  const ytOpts = {
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
      <YoutubePlayer {...ytOpts}  />
      <div>{description}</div>
    </article>
  );
}


export default VideoDetail;