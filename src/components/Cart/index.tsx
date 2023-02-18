import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { CheckoutButton } from './CheckoutButton'
import { EmptyCart } from './EmptyCart'
import { X } from 'phosphor-react'
import Image from 'next/image'
import { api } from '@/services/api'

import {
  CartContainer,
  CartContent,
  CartFooter,
  CartHeader,
  CartItem,
  Overlay,
} from './styles'
import { RemoveButton } from './RemoveButton'

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
    isOpen && (
      <Overlay variant={isOpen ? 'open' : 'closed'} data-testid="cart">
        <CartContainer variant={isOpen ? 'open' : 'closed'}>
          <CartHeader>
            <button
              data-testid="close-cart"
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
                            <strong data-testid="product-price">
                              {product.price}
                            </strong>
                          </span>
                        </div>

                        <RemoveButton onClick={() => removeOnCart(product.id)}>
                          Remover
                        </RemoveButton>
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
                <span data-testid="quantity-cart">{cart.length} items</span>
              </div>
              <div>
                <span>Valor total</span>
                <span data-testid="total-price-cart">{totalPrice}</span>
              </div>
              <CheckoutButton
                onClick={checkProductId}
                isCreateCheckoutSession={isCreateCheckoutSession}
              />
            </CartFooter>
          )}
        </CartContainer>
      </Overlay>
    )
  )
}
