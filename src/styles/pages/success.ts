import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center ',

  margin: '0 auto',
  height: 656,

  h1: {
    fontWeight: '$2xl',
    color: '$gray100',
  },

  '> div': {
    display: 'flex',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
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
    objectFit: 'cover',
  },
})
