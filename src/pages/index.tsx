import { GetStaticProps } from 'next'
import { HomeContainer } from '@/styles/pages/home'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import Head from 'next/head'
import Slider from '@/components/Slider'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: ProductType[]
}

interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: string
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer data-testid="slider">
        <Slider products={products} />
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data
    .filter((product) => product.active)
    .map((product) => {
      const price = product.default_price as Stripe.Price

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
      }
    })

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 4, // 4 horas
  }
}
