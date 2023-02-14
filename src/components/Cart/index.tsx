import { useCart } from '@/context/CartContext'
import { api } from '@/services/api'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import { EmptyCart } from './EmptyCart'

import {
  CartContainer,
  CartContent,
  CartFooter,
  CartHeader,
  CartItem,
  Overlay,
} from './styles'

export const Cart = () => {
  const { isOpen, handleChangeVisibilityCart, cart, removeOnCart, totalPrice } =
    useCart()

  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)

  async function checkProductId() {
    setIsCreateCheckoutSession(true)

    try {
      const response = await api.post(`/api/checkoutSession`, {
        itemsList: cart,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao fazer checkout')
      setIsCreateCheckoutSession(false)
    }
  }

  return (
    <Overlay variant={isOpen ? 'open' : 'closed'}>
      <CartContainer variant={isOpen ? 'open' : 'closed'}>
        <CartHeader>
          <button
            onClick={handleChangeVisibilityCart}
            aria-label="fechar carrinho"
          >
            <X size={32} weight="regular" />
          </button>
        </CartHeader>
        <CartContent>
          <h2>Sacola de compras</h2>

          <div>
            {cart.length > 0 ? (
              <>
                {cart.map((product) => (
                  <CartItem key={product.id}>
                    <div>
                      <Image
                        src={product.imageUrl[0]}
                        alt={product.name}
                        width="80"
                        height="90"
                      />
                    </div>
                    <div>
                      <div>
                        <p>{product.name}</p>
                        <span>
                          <strong>{product.price}</strong>
                        </span>
                      </div>

                      <button onClick={() => removeOnCart(product.id)}>
                        Remover
                      </button>
                    </div>
                  </CartItem>
                ))}
              </>
            ) : (
              <EmptyCart />
            )}
          </div>
        </CartContent>

        {cart.length > 0 && (
          <CartFooter>
            <div>
              <span>Quantidade</span>
              <span>{cart.length} itens</span>
            </div>
            <div>
              <span>Valor total</span>
              <span>{totalPrice}</span>
            </div>

            <button disabled={isCreateCheckoutSession} onClick={checkProductId}>
              {isCreateCheckoutSession ? (
                <Triangle
                  height="34"
                  width="34"
                  color="#4fa94d"
                  ariaLabel="triangle-loading"
                />
              ) : (
                'Finalizar compra'
              )}
            </button>
          </CartFooter>
        )}
      </CartContainer>
    </Overlay>
  )
}
