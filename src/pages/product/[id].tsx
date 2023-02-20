import { GetStaticPaths, GetStaticProps } from 'next'
import {
  ImageContainer,
  LinkBox,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ProductProps {
  product: ProductType
}

interface ProductType {
  id: string
  name: string
  imageUrl: string[]
  price: string
  description: string
  defaultPriceId: string
}

export default function Product({ product }: ProductProps) {
  const { cart, addOnCart } = useCart()
  const { isFallback } = useRouter()

  const isDisabled = cart.find((cartProduct) => cartProduct.id === product.id)
    ? true
    : false

  if (isFallback) {
    return (
      <>
        <p>Carregando...</p>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <LinkBox>
        <Link href="/">Voltar</Link>
      </LinkBox>
      <ProductContainer>
        <ImageContainer>
          <Image
            width={440}
            height={480}
            src={product.imageUrl[0]}
            alt={product.name}
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isDisabled} onClick={() => addOnCart(product)}>
            {isDisabled ? 'Ja está na sacola!' : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NLUdXZpYLt42th' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
