import '@testing-library/jest-dom'

import { CartContext } from '@/context/CartContext'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Cart } from '@/components/Cart'

import { faker } from '@faker-js/faker'

import camisaImg from '@/assets/1.png'

const product = {
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(102, 102, 2, 'R$ '),
  imageUrl: [camisaImg],
  defaultPriceId: '',
}

let isOpen = true
const handleChangeVisibilityCart = jest.fn()
const addOnCart = jest.fn()
const removeOnCart = jest.fn()
let cart = []
const totalPrice = product.price

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
      <Cart />
    </CartContext.Provider>
  )
}

describe('Tests in component Cart', () => {
  test('Should to be able render cart', () => {
    render(
      <CartContext.Provider
        value={{
          handleChangeVisibilityCart,
          isOpen,
          addOnCart,
          removeOnCart,
          cart,
          totalPrice,
        }}
      >
        <Cart />
      </CartContext.Provider>
    )

    expect(screen.getByTestId('cart')).toBeInTheDocument()
  })

  test('should not render the cart if isOpen is false', () => {
    const isOpen = false

    render(
      <CartContext.Provider
        value={{
          handleChangeVisibilityCart,
          isOpen,
          addOnCart,
          removeOnCart,
          cart,
          totalPrice,
        }}
      >
        <Cart />
      </CartContext.Provider>
    )

    expect(screen.queryByTestId('cart')).not.toBeInTheDocument()
  })

  test('Should render texts of cart empty when to cart is empty', async () => {
    // let isOpen = true

    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    expect(screen.getByText('Está vazio!')).toBeInTheDocument()
    expect(
      screen.getByText('Adicione produtos na sua sacola')
    ).toBeInTheDocument()
  })

  test('It should render the items in the cart correctly', () => {
    // let isOpen = true

    const cart = [{ ...product }]

    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    let lengthCart = cart.length.toString() + ' items'

    expect(screen.getByText(product.name)).toBeInTheDocument()
    expect(screen.getByTestId('product-price')).toBeInTheDocument()
    expect(screen.getByAltText(product.name)).toBeInTheDocument()
    expect(screen.getByText(lengthCart)).toBeInTheDocument()
  })

  test('Should call the close cart function when the button is pressed', async () => {
    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    const btnCartClose = screen.getByTestId('close-cart')
    fireEvent.click(btnCartClose)

    expect(handleChangeVisibilityCart).toHaveBeenCalled()
  })
})
