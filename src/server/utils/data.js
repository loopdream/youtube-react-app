import Truncate from 'truncate'

// Massage youtube data for our needs
const formatData = data => {
  const { nextPageToken, pageInfo, items } = data
  const videosWithThumb = items.filter(v => v.thumbnails !== 'undefined' ) // remove entries with no thumbs
  const videos = videosWithThumb.map(i => {
    const { thumbnails, title, description, resourceId } = i.snippet
    const { videoId, videoPublishedAt } = i.contentDetails
    const published = formatDateToStr(new Date(videoPublishedAt))
    const truncatedDescription = Truncate(nl2br(description, ' ' ), 120);
    const newDesc = nl2br(findLinksAndAddHrefs(description), '<br/>')
    return { videoId, published, title, description: newDesc, truncatedDescription, thumbnails }
  })
  return { nextPageToken, pageInfo, videos }
}
export { formatData }


// ISO date to string as per wireframe
const formatDateToStr = date => {
  const months= [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ]
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  const str = `Published on ${months[monthIndex]} ${day}, ${year}`
  return str
}
export { formatDateToStr }


// Find instances of links and add html anchors
const findLinksAndAddHrefs = str => {
  return str.replace(/((http|https):\/\/[^\s]+)/gi, '<a href="$1">$1</a>')
}
export { findLinksAndAddHrefs }

// remove excessive line breaks from strings
const nl2br = (str, rStr) => {
  return str.replace(/(?:\r\n|\r|\n)/g, rStr)
}
export { nl2br }