import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  //   gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px ) / 2))',
  minHeight: 456,
  marginLeft: 'auto',
  marginTop: '1rem',
  marginBottom: '1rem',

  ' > div': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },

  '@bp1': {
    padding: '0 1rem',
    maxWidth: '100%',
    minHeight: 256,
    marginLeft: 0,
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp1': {
    maxHeight: 420,
  },

  overflow: 'hidden',

  img: {
    objectFit: 'contain',
    width: '80%',
    height: '80%',
  },

  footer: {
    position: 'absolute',
    padding: '1.5rem',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    borderRadius: 4,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all .2s ease-in-out',

    ' > div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem',

      strong: {
        fontSize: '$md',
        color: '$gray100',
      },
      span: {
        fontSize: '$md',
        fontWeight: 'bold',
        color: '$green300',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
})

export const IconBag = styled('div', {
  padding: '.25rem .5rem',
  border: 0,
  borderRadius: 4,
  color: '$white',

  variants: {
    variant: {
      inCart: {
        backgroundColor: '$green300',
      },
      outCart: {
        backgroundColor: '$gray800',
      },
    },
  },
})
