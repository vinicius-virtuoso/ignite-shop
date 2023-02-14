import { createContext, useContext, useState } from 'react'

interface CartContextProps {
  isOpen: boolean
  handleChangeVisibilityCart: () => void
}

interface CartType {
  name: string
  price: string
}

const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [cart, setCart] = useState<CartType[]>([])

  const handleChangeVisibilityCart = () => {
    setIsOpen(!isOpen)
  }

  return (
    <CartContext.Provider value={{ isOpen, handleChangeVisibilityCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
