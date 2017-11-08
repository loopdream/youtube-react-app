import React from 'react'
import { renderToString } from 'react-dom/server'
import Serialize from 'serialize-javascript'
import config from '../../config'

const { faviconUrl, fontUrl, pageCopy } = config

const fontFaces = `
@font-face {
  font-family: 'ibm-plex-mono';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Mono/web/woff2/IBMPlexMono-Regular-Latin1.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Mono/web/woff/IBMPlexMono-Regular-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-mono';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Mono/web/woff2/IBMPlexMono-Regular-Latin2.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Mono/web/woff/IBMPlexMono-Regular-Latin2.woff") format("woff");
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-mono';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Mono/web/woff2/IBMPlexMono-Regular-Latin3.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Mono/web/woff/IBMPlexMono-Regular-Latin3.woff") format("woff");
  unicode-range: 'U+0102-0103, U+1EA0-1EF9, U+20AB'; }

@font-face {
  font-family: 'ibm-plex-mono';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Mono/web/woff2/IBMPlexMono-Regular-Pi.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Mono/web/woff/IBMPlexMono-Regular-Pi.woff") format("woff");
  unicode-range: 'U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Light-Latin1.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Light-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Light-Latin2.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Light-Latin2.woff") format("woff");
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Light-Latin3.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Light-Latin3.woff") format("woff");
  unicode-range: 'U+0102-0103, U+1EA0-1EF9, U+20AB'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Light-Pi.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Light-Pi.woff") format("woff");
  unicode-range: 'U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Regular-Latin1.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Regular-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Regular-Latin2.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Regular-Latin2.woff") format("woff");
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Regular-Latin3.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Regular-Latin3.woff") format("woff");
  unicode-range: 'U+0102-0103, U+1EA0-1EF9, U+20AB'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-Regular-Pi.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-Regular-Pi.woff") format("woff");
  unicode-range: 'U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-SemiBold-Latin1.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-SemiBold-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-SemiBold-Latin2.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-SemiBold-Latin2.woff") format("woff");
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-SemiBold-Latin3.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-SemiBold-Latin3.woff") format("woff");
  unicode-range: 'U+0102-0103, U+1EA0-1EF9, U+20AB'; }

@font-face {
  font-family: 'ibm-plex-sans';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Sans/web/woff2/IBMPlexSans-SemiBold-Pi.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Sans/web/woff/IBMPlexSans-SemiBold-Pi.woff") format("woff");
  unicode-range: 'U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC'; }


@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Light-Latin1.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Light-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Light-Latin2.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Light-Latin2.woff") format("woff");
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Light-Latin3.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Light-Latin3.woff") format("woff");
  unicode-range: 'U+0102-0103, U+1EA0-1EF9, U+20AB'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 300;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Light-Pi.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Light-Pi.woff") format("woff");
  unicode-range: 'U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC'; }


@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Regular-Latin1.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Regular-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Regular-Latin2.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Regular-Latin2.woff") format("woff");
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Regular-Latin3.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Regular-Latin3.woff") format("woff");
  unicode-range: 'U+0102-0103, U+1EA0-1EF9, U+20AB'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 400;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-Regular-Pi.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-Regular-Pi.woff") format("woff");
  unicode-range: 'U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-SemiBold-Latin1.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-SemiBold-Latin1.woff") format("woff");
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2212, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-SemiBold-Latin2.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-SemiBold-Latin2.woff") format("woff");
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-SemiBold-Latin3.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-SemiBold-Latin3.woff") format("woff");
  unicode-range: 'U+0102-0103, U+1EA0-1EF9, U+20AB'; }

@font-face {
  font-family: 'ibm-plex-serif';
  font-style: normal;
  font-weight: 600;
  src: url("https://ibm.github.io/type/fonts/Serif/web/woff2/IBMPlexSerif-SemiBold-Pi.woff2") format("woff2"), url("https://ibm.github.io/type/fonts/Serif/web/woff/IBMPlexSerif-SemiBold-Pi.woff") format("woff");
  unicode-range: 'U+03C0, U+0E3F, U+2070, U+2074-2079, U+2080-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E, U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4, U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248, U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1, U+EBE3-EBE4, U+EBE6-EBE7, U+ECE0, U+EFCC'; }
`


/**
 * optimised HTML boilerplate markup 
 * Injects meta data, SSR React markup for , SSR Styled components, and Initial state video json 
 */
export default (markup, videoData, styleTags) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${pageCopy.indexHeading}</title><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui, user-scalable=no, minimum-scale=1.0">${faviconUrl ? `<link rel="shortcut icon" href="${faviconUrl}">` : ''}${fontUrl ? `<link href="${fontUrl}" rel="stylesheet">` : ''}</head><style>html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html { box-sizing: border-box; } *, *:before, *:after { box-sizing: inherit; }</style><body>${styleTags}<div id="app">${markup}</div>${videoData ? `<script>window.__videoData__ = ${Serialize(videoData)}</script><script src="/bundle.js" defer></script>` : ''}</body></html>`