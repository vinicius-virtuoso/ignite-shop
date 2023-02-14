import { GlobaStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import Image from 'next/image'
import { Container } from '@/styles/pages/app'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { CartProvider } from '@/context/CartContext'
import { Cart } from '@/components/Cart'

GlobaStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />

      <Container>
        <Component {...pageProps} />
      </Container>
      <Cart />
    </CartProvider>
  )
}
