import { css } from 'styled-components'
import { fonts, colors, mediaQuerySizes as sizes, fontSizes } from '../styles/variables'



// MQs
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
  return acc
}, {})

export { media }


// truncate
const truncate = width => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}
export { truncate }


// Link text
const textLink = () => {
  return `
    color: ${colors.green};
    text-decoration: none; 
    &:hover {
      color: ${colors.black};
      text-decoration: line-through;
      cursor: pointer;
    }
  `
}
export { textLink }

// Chevron link
const linkWithChevron = () => {
  return `
    padding-left: .4rem;
    position: absolute;
    right: 3rem;
    bottom: -4.5rem;
    &:before {
      border-style: solid;
      border-width: 0.25em 0.25em 0 0;
      content: '';
      display: inline-block;
      height: 0.45em;
      left: 0.15em;
      position: relative;
      top: .4rem;
      transform: rotate(-45deg);
      vertical-align: top;
      width: 0.45em;
      left: -.4rem;
      transform: rotate(-135deg);
    }`
}

export { linkWithChevron }


// Max width container
const container = () => {
  return `
    margin: 0 auto;
    width: 100%;
    max-width: ${sizes.large}px;
  `
}
export { container }
