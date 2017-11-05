import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoDetail from '../components/VideoDetail';

const VideoDetailPage = ({video}) => {
  console.log(video)
  return (
    <div>
      <Link to="/">
        Back to list of videos
      </Link>
    </div>
  )

}

export default VideoDetailPage;