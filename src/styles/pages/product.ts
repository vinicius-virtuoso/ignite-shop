import { styled } from '..'

export const LinkBox = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  maxWidth: 1180,

  a: {
    color: '$green300',
    fontSize: '$md',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'all .2s ease-in',
    padding: '2rem 0',

    '&:hover': {
      color: '$gray300',
    },

    '@bp1': {
      fontSize: '1rem',
      padding: '1rem 0',
    },
  },
  '@bp1': {
    padding: '0 1.5rem',
  },
})

export const ProductContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@bp1': {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    padding: '0 1.5rem',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'contain',
    maxWidth: '100%',
  },

  '@bp1': {
    maxWidth: 200,
    height: 200,
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',

    '@bp1': {
      fontSize: '$xl',
    },
  },
  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',

    '@bp1': {
      fontSize: '$xl',
      marginTop: '.5rem',
    },
  },
  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',

    '@bp1': {
      fontSize: '.875rem',
      marginTop: '.5rem',
    },
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'all 0.2s ease-in',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      backgroundColor: '$gray800',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '@bp1': {
      marginTop: '1.5rem',
      padding: '.875rem',
    },
  },
})
