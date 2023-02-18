import React from 'react'
import { EmptyContainer } from './styles'

export const EmptyCart = () => {
  return (
    <EmptyContainer data-testid="empty-cart">
      <p>Está vazio!</p>
      <span>Adicione produtos na sua sacola</span>
    </EmptyContainer>
  )
}
