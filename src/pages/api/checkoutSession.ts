import { stripe } from '@/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

interface BodyProps {
  itemsList: { defaultPriceId: string; quantity: number }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { itemsList }: BodyProps = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!itemsList || itemsList.length === 0) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: itemsList.map((item) => {
      return {
        price: item.defaultPriceId,
        quantity: 1,
      }
    }),
    success_url,
    cancel_url,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
