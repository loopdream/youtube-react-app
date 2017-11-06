const config = {
  port: 8000,
  apiUrl: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw',
  routes: [
    '/',
    '/video/:videoId',
  ],
  pageCopy: {
    indexHeading: 'My YouTube Playlist',
    backToListText: 'Back to list of videos',
  },
}

export default config