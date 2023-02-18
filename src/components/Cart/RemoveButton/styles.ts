import { styled } from '@/styles'

export const RemoveButtonStyle = styled('button', {
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
})
