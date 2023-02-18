import '@testing-library/jest-dom'

import { CartContext } from '@/context/CartContext'
import { fireEvent, render, screen } from '@testing-library/react'

import { Header } from '@/components/Header'

function renderComponent(
  isOpen,
  handleChangeVisibilityCart,
  addOnCart,
  removeOnCart,
  cart,
  totalPrice
) {
  render(
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
      <Header />
    </CartContext.Provider>
  )
}

describe('Test in component Header', () => {
  test('Should to be able to render the header', () => {
    const isOpen = false
    const handleChangeVisibilityCart = jest.fn()
    const addOnCart = jest.fn()
    const removeOnCart = jest.fn()
    const cart = []
    const totalPrice = ''

    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    expect(screen.getByAltText('logo'))
    expect(screen.getByRole('button'))
  })

  test('It should call the function when clicking on the cart button', () => {
    const isOpen = false
    const handleChangeVisibilityCart = jest.fn()
    const addOnCart = jest.fn()
    const removeOnCart = jest.fn()
    const cart = []
    const totalPrice = ''

    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    const btnCart = screen.getByRole('button')

    fireEvent.click(btnCart)

    expect(handleChangeVisibilityCart).toHaveBeenCalled()
  })

  test('Should show indicator of how many items are in the cart', () => {
    const isOpen = false
    const handleChangeVisibilityCart = jest.fn()
    const addOnCart = jest.fn()
    const removeOnCart = jest.fn()
    const cart = [{}, {}, {}]
    const totalPrice = ''

    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    expect(screen.getByTestId('count-cart')).toBeInTheDocument()
    expect(screen.getByText(cart.length)).toBeInTheDocument()
  })
})
