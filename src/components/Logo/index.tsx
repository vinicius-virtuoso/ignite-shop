import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/assets/logo.svg'

export const Logo = () => {
  return (
    <Link href="/">
      <Image width={130} height={80} src={logoImg.src} alt="logo" />
    </Link>
  )
}
