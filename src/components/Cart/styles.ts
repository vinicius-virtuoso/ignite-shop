import { styled } from '@/styles'

export const Overlay = styled('div', {
  width: '100%',
  height: '100vh',
  background: 'rgba(0,0,0,0.5)',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 98,

  variants: {
    variant: {
      open: {
        display: 'block',
      },
      closed: {
        display: 'none',
      },
    },
  },
})

export const CartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 460,
  height: '100vh',

  position: 'absolute',
  zIndex: 99,
  top: 0,
  bottom: 0,
  right: 0,

  background: '$gray800',
  boxShadow: '0 1rem 1.25rem 0px rgba(0, 0, 0, .8)',

  transition: 'all .4s ease-in-out',

  variants: {
    variant: {
      open: {
        width: '100%',
        opacity: 1,
      },
      closed: {
        width: '0',
        opacity: 0,
        overflow: 'hidden',
      },
    },
  },

  '@bp1': {
    maxWidth: '85%',
  },
})

export const CartHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  overflow: 'hidden',
  padding: '2rem 3rem',

  button: {
    width: 32,
    height: 32,
    border: 0,
    backgroundColor: 'transparent',
    color: '$gray100',
    cursor: 'pointer',
    '&:hover': {
      color: '$gray300',
    },

    overflow: 'hidden',
  },

  '@bp1': {
    padding: '1.75rem 1.2rem 0.5rem 1.2rem',
  },
})

export const CartContent = styled('div', {
  padding: '0 3rem',
  height: '100%',

  h2: {
    fontSize: '$xl',
    color: '$white',
    marginBottom: '1rem',

    '@bp1': {
      fontSize: '$md',
    },
  },

  ' > div': {
    width: '100%',
    height: '100%',
    maxHeight: 525,
    overflow: 'auto',

    display: 'flex',
    flexDirection: 'column',
    gap: 5,

    '@bp1': {
      maxHeight: 390,
    },
  },
  '@bp1': {
    padding: '0 1.125rem',
  },
})

export const CartItem = styled('div', {
  width: '100%',
  height: 100,
  padding: '1rem 0',
  display: 'flex',
  gap: '1rem',

  '> div:nth-of-type(1)': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    width: 95,
    height: 90,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@bp1': {
      width: 70,
      height: 75,
      borderRadius: 8,
    },

    img: {
      objectFit: 'contain',
    },
  },
  '> div:nth-of-type(2)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    gap: '1rem',

    '> div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '.25rem',

      p: {
        fontSize: '$md',

        '@bp1': {
          fontSize: '.75rem',
        },
      },
      span: {
        fontSize: '$md',
      },
    },
    button: {
      backgroundColor: 'transparent',
      border: 0,
      color: '$green500',
      fontWeight: 'normal',
      fontSize: '$md',
      cursor: 'pointer',

      '@bp1': {
        fontSize: '.875rem',
      },

      '&:hover': {
        color: '$green300',
      },
    },

    '@bp1': {
      gap: '.5rem',
    },
  },

  '@bp1': {
    height: 80,
  },
})

export const CartFooter = styled('div', {
  marginTop: 'auto',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',

  '> div': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '.5rem',

    span: {
      '@bp1': {
        fontSize: '.75em',
      },
    },
  },

  '> div:nth-of-type(2)': {
    marginBottom: '3rem',

    '> span:nth-of-type(1)': {
      fontSize: '$md',
      fontWeight: 'bold',

      '@bp1': {
        fontSize: '.875rem',
      },
    },
    '> span:nth-of-type(2)': {
      fontSize: '$xl',
      fontWeight: 'bold',

      '@bp1': {
        fontSize: '$md',
      },
    },

    '@bp1': {
      marginBottom: '1rem',
    },
  },

  button: {
    width: '100%',
    height: 58,
    background: '$green300',
    fontSize: '$md',

    border: 0,
    borderRadius: 8,
    color: '$white',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      backgroundColor: '$gray900',
    },

    '&:not(:disabled):hover': {
      background: '$green500',
    },
    '@bp1': {
      height: 48,
    },
  },

  '@bp1': {
    padding: '0 1.5rem 1.5rem 1.5rem',
  },
})
