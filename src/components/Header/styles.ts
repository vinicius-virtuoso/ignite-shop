import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  margin: '0 auto',
  height: 100,

  display: 'flex',
  alignItems: 'center',

  '@bp1': {
    height: 85,
  },
})

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1180,
  height: '100%',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp1': {
    padding: '0 1rem',
  },
})
