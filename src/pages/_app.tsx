import { GlobaStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'
import Link from 'next/link'

GlobaStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Link href="/">
          <Image width={130} height={80} src={logoImg.src} alt="logo" />
        </Link>
      </Header>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
