// Massage youtube data for our needs
const formatData = data => {
  let { nextPageToken, pageInfo, items } = data
  let videosWithThumb = items.filter(v => v.thumbnails !== 'undefined' ) // remove entries with no thumbs
  let videos = videosWithThumb.map(i => {
    let { thumbnails, title, description, resourceId } = i.snippet
    let { videoId, videoPublishedAt } = i.contentDetails
    let d = new Date(videoPublishedAt)
    let published = formatDateToStr(d)
    return { videoId, published, title, description, thumbnails }
  })
  return { nextPageToken, pageInfo, videos }
}

// ISO date to string as per wireframe
const formatDateToStr = date => {
  const months= [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ]
  let day = date.getDate()
  let monthIndex = date.getMonth()
  let year = date.getFullYear()
  let str = `Published on ${months[monthIndex]} ${day}, ${year}`
  return str
}


export {
  formatData,
  formatDateToStr
}