import { GlobaStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import { Container } from '@/styles/pages/app'
import { Header } from '@/components/Header'
import { CartProvider, useCart } from '@/context/CartContext'
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
