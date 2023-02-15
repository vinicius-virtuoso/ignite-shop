import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/assets/logo.svg'
import { LogoContainer } from './styles'

export const Logo = () => {
  return (
    <LogoContainer href="/">
      <Image width={130} height={80} src={logoImg.src} alt="logo" />
    </LogoContainer>
  )
}
