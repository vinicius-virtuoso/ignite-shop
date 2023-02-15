import { styled } from '@/styles'

export const BagIcon = styled('button', {
  padding: '.25rem .5rem',
  backgroundColor: '$gray800',
  borderRadius: 8,
  border: 0,

  position: 'relative',
  color: '$white',

  '@bp1': {
    padding: '.075rem .25rem',
  },
})

export const ItemsCount = styled('div', {
  position: 'absolute',
  top: -10,
  right: -10,

  width: 28,
  height: 28,
  borderRadius: 999,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$green300',
  border: '3px solid $gray900',
  color: '$gray100',

  fontWeight: 'bold',
})
