const config = {
  port: 8000,
  apiUrl: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw',
  fontUrl: 'https://ibm.github.io/type/css/ibm-type.min.css',
  faviconUrl: 'https://d3fj8d3h19iopa.cloudfront.net/wp-content/themes/beyond/assets/1503571639/images/favicon/favicon.ico',
  routes: [
    '/',
    '/video/:videoId',
  ],
  pageCopy: {
    indexHeading: 'YouTube Playlist.',
    backToListText: 'Back to list of videos',
  },
}

export default config