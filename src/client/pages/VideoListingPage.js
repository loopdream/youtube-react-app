import React, { Component } from 'react';
import VideoList from '../components/VideoList';

const VideoListingPage = ({videos}) => (
  <div>
    <h1>VideoListingPage</h1>
    <VideoList videos={videos} />
  </div>
);

export default VideoListingPage;