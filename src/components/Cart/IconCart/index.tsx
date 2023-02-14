import { useCart } from '@/context/CartContext'
import { Handbag } from 'phosphor-react'
import { BagIcon, ItemsCount } from './styles'

export const IconCart = () => {
  const { handleChangeVisibilityCart } = useCart()

  return (
    <BagIcon
      onClick={handleChangeVisibilityCart}
      aria-label="Abrir carrinho de compras"
    >
      <Handbag size={32} weight="light" />
      <ItemsCount>1</ItemsCount>
    </BagIcon>
  )
}
