import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import { X } from 'phosphor-react'

import {
  CartContainer,
  CartContent,
  CartFooter,
  CartHeader,
  CartItem,
  Overlay,
} from './styles'

import camisa1 from '@/assets/1.png'

export const Cart = () => {
  const { isOpen, handleChangeVisibilityCart } = useCart()

  return (
    <Overlay variant={isOpen ? 'open' : 'closed'}>
      <CartContainer variant={isOpen ? 'open' : 'closed'}>
        <CartHeader>
          <button onClick={handleChangeVisibilityCart}>
            <X size={32} weight="regular" />
          </button>
        </CartHeader>
        <CartContent>
          <h2>Sacola de compras</h2>

          <div>
            <CartItem>
              <div>
                <Image src={camisa1} alt="" width="80" height="90" />
              </div>
              <div>
                <div>
                  <p>Camiseta Explorer</p>
                  <span>
                    <strong>R$ 79,90</strong>
                  </span>
                </div>

                <button>Remover</button>
              </div>
            </CartItem>
          </div>
        </CartContent>

        <CartFooter>
          <div>
            <span>Quantidade</span>
            <span>3 itens</span>
          </div>
          <div>
            <span>Valor total</span>
            <span>R$ 270,00</span>
          </div>

          <button>Finalizar compra</button>
        </CartFooter>
      </CartContainer>
    </Overlay>
  )
}
