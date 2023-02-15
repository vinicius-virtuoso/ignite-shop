import { styled } from '@/styles'
import Link from 'next/link'

export const LogoContainer = styled(Link, {
  maxWidth: 140,
  maxHeight: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '100%',
    height: '100%',
  },

  '@bp1': {
    maxWidth: 95,
    height: 'auto',
  },
})
