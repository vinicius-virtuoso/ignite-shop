import { globalCss } from '.'

export const GlobaStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '"Roboto", sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },
  'body, input,textarea,button': {
    fontFamily: '"Roboto", sans-serif',
    '-webkit-font-smoothing': 'antialiased',
  },
})
