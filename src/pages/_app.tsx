import { GlobaStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

GlobaStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image width={130} height={100} src={logoImg.src} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
