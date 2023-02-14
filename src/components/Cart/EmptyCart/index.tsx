import React from 'react'
import { EmptyContainer } from './styles'

export const EmptyCart = () => {
  return (
    <EmptyContainer>
      <p>Está vazio!</p>
      <span>Adicione produtos na sua sacola</span>
    </EmptyContainer>
  )
}
