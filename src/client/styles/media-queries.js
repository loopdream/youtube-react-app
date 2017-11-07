import { css } from 'styled-components'
import { mediaQueries } from './config'

// iterate through the sizes and create a media template
export const mq = Object.keys(mediaQueries).reduce((accumulator, label) => {
  const emSize = mediaQueries[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})