import { pxToEm } from 'styled-media-query';


// Colors
export const colors =  {
  green: '#00b158',
  black: '#050505',
  lightGrey: '#f7f7f7',
  white: '#ffffff',
  navy: '#001f3f',
  midGrey: '#a5a8a8',
  darkGrey: '#333333',
  youTubeRed: '#e30000',
}

 
// Media queries
export const breakpoints = pxToEm({
  sm: '481px',
  smd: '640px',
  md: '768px',
  lg: '992px',
}, 16)


// Font size based on type scale
export const fontSizes = {
  f1: '3rem',
  f2: '2.25rem',
  f3: '1.5rem',
  f4: '1.25rem',
  f5: '1rem',
  f6: '.875rem',
  f7: '.75rem',
  f8: '.65rem',
} 