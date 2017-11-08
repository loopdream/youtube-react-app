import Truncate from 'truncate'

// Massage youtube data for our needs
const formatData = data => {
  const { nextPageToken, pageInfo, items } = data
  const videosWithThumb = items.filter(v => v.thumbnails !== 'undefined' ) // remove entries with no thumbs
  const videos = videosWithThumb.map(i => {
    let { thumbnails, title, description, resourceId } = i.snippet
    let { videoId, videoPublishedAt } = i.contentDetails
    let d = new Date(videoPublishedAt)
    let published = formatDateToStr(d)
    let truncatedDescription = Truncate(description, 200);
    description = nl2br(description, '<br/>')
    return { videoId, published, title, description, truncatedDescription, thumbnails }
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

const nl2br = (str, rStr) => {
  return str.replace(/(?:\r\n|\r|\n)/g, rStr)
}


export {
  formatData,
  formatDateToStr,
  nl2br,
}