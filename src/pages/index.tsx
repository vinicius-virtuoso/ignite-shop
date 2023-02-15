import { GetStaticProps } from 'next'
import Image from 'next/image'
import { HomeContainer, IconBag, Product } from '@/styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'

import Head from 'next/head'
import { Handbag } from 'phosphor-react'
import { useCart } from '@/context/CartContext'

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
  const { cart } = useCart()

  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'auto',
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: {
          origin: 'center',
          perView: 1.3,
          spacing: 15,
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Product className="keen-slider__slide">
              <Image
                width={200}
                height={200}
                src={product.imageUrl}
                alt={product.name}
              />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <IconBag
                  variant={
                    cart.find((productCart) => productCart.id === product.id)
                      ? 'inCart'
                      : 'outCart'
                  }
                >
                  <Handbag size={32} weight="regular" />
                </IconBag>
              </footer>
            </Product>
          </Link>
        ))}
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
