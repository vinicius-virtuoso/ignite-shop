import { styled } from '@/styles'

export const EmptyContainer = styled('div', {
  width: '100%',
  height: '100%',

  padding: '3rem',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  p: {
    fontSize: '$2xl',
    fontWeight: 'bold',
    margin: '1rem 0',
  },

  span: {
    color: '$gray300',
    opacity: 0.8,
  },
})
