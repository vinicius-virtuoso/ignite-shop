import { stripe } from '@/lib/stripe'
import { ImageContainer, SuccessContainer } from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string
  products: ProductType[]
}

interface ProductType {
  name: string
  images: string[]
  id: string
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        {products.length && (
          <div>
            {products.map((item) => (
              <ImageContainer key={item.id}>
                <Image
                  width={120}
                  height={140}
                  src={item.images[0]}
                  alt={item.name}
                />
              </ImageContainer>
            ))}
          </div>
        )}

        {products.length > 1 ? (
          <p>
            Uhuul <strong>{customerName}</strong>, suas{' '}
            <strong>{products.length}</strong> camisetas já está a caminho da
            sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{customerName}</strong>, sua{' '}
            <strong>{products[0].name}</strong> já está a caminho da sua casa.
          </p>
        )}

        <Link href="/">
          <span>Voltar ao catálogo</span>
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name

  const products = session.line_items.data.map(
    (item) => item.price.product as Stripe.Product
  )

  return {
    props: {
      customerName,
      products,
    },
  }
}
