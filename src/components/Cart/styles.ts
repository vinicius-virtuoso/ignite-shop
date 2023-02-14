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
})

export const CartContent = styled('div', {
  padding: '0 3rem',

  h2: {
    fontSize: '$xl',
    color: '$white',
    marginBottom: '1rem',
  },

  ' > div': {
    width: '100%',
    height: '100%',
    maxHeight: 525,
    overflow: 'auto',
  },
})

export const CartItem = styled('div', {
  width: '100%',
  height: 120,
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

      '&:hover': {
        color: '$green300',
      },
    },
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
  },

  '> div:nth-of-type(2)': {
    marginBottom: '1rem',

    '> span:nth-of-type(1)': {
      fontSize: '$md',
      fontWeight: 'bold',
    },
    '> span:nth-of-type(2)': {
      fontSize: '$xl',
      fontWeight: 'bold',
    },
  },

  button: {
    width: '100%',
    height: '48px',
    background: '$green300',
    fontSize: '$md',

    border: 0,
    borderRadius: 8,
    color: '$white',
    cursor: 'pointer',

    '&:hover': {
      background: '$green500',
    },
  },
})
