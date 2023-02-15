import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center ',

  margin: '0 auto',

  '@bp1': {
    padding: '0 1.5rem',
  },

  h1: {
    color: '$gray100',

    '@bp1': {
      fontSize: '$xl',

      marginBottom: '1rem',
    },
  },

  '> div': {
    display: 'flex',
    justifyContent: 'center',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,

    '@bp1': {
      fontSize: '$md',
      marginTop: '1rem',
    },
  },

  a: {
    display: 'block',
    color: '$green300',
    fontSize: '$lg',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '5rem',
    transition: 'all .2s ease',

    '&:hover': {
      color: '$green500',
    },

    '@bp1': {
      fontSize: '$md',
      marginTop: '3rem',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 145,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 999,
  padding: '1.25rem',

  boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)',

  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'contain',
  },

  '@bp1': {
    width: 110,
    height: 110,
    marginTop: '0.5rem',
  },

  '& + &': {
    marginLeft: -50,
  },
})
