import { css } from 'styled-components'
import { fonts, colors, mediaQuerySizes as sizes, fontSizes } from '../styles/variables'

// MQs
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
  return acc
}, {})

// truncate
export const truncate = width => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}


// truncate
export const textLink = () => {
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

export const container = () => {
  return `
    margin: 0 auto;
    ${media.large`
      width: ${sizes.large}px
    `}
  `
}

