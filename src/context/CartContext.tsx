import { createContext, useContext, useState } from 'react'

interface CartContextProps {
  isOpen: boolean
  handleChangeVisibilityCart: () => void
  addOnCart: (product: CartType) => void
  removeOnCart: (id: string) => void

  cart: CartType[]
  totalPrice: string
}

interface CartType {
  id: string
  name: string
  price: string
  imageUrl: string
  defaultPriceId: string
}

const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState<CartType[]>([])

  const handleChangeVisibilityCart = () => {
    setIsOpen(!isOpen)
  }

  const addOnCart = (product: CartType) => {
    if (!cart.find((carProduct) => carProduct.id === product.id)) {
      setCart((state) => [...state, product])
    }
  }

  const removeOnCart = (id: string) => {
    setCart((state) => state.filter((product) => product.id !== id))
  }

  const priceTotal = cart.map(
    (price) => Number(price.price.replace(/[^\d]/g, '')) / 100
  )

  const reducePrice = priceTotal.reduce((total, item) => item + total, 0)

  const totalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(reducePrice)

  return (
    <CartContext.Provider
      value={{
        isOpen,
        handleChangeVisibilityCart,
        addOnCart,
        removeOnCart,
        cart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
