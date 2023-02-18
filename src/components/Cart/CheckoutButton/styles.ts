import { styled } from '@/styles'

export const CheckoutButtonStyled = styled('button', {
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
})
