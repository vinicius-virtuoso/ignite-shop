import { CartContext, CartProvider } from '@/context/CartContext'
import Product from '@/pages/product/[id]'
import { faker } from '@faker-js/faker'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

const product = {
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(102, 102, 2, 'R$ '),
  imageUrl: [faker.image.fashion()],
  description: faker.commerce.productDescription(),
  defaultPriceId: faker.datatype.uuid(),
}

let isOpen = true
const handleChangeVisibilityCart = jest.fn()
const addOnCart = jest.fn()
const removeOnCart = jest.fn()
const cart = []
const totalPrice = product.price

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  query: { product },
  isFallback: false,
}))

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
      <Product product={product} />
    </CartContext.Provider>
  )
}

afterEach(cleanup)

describe('Test in page Product', () => {
  test('Should to be call function add in cart when hit', () => {
    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    const btnAddCart = screen.getByText('Colocar na sacola')
    fireEvent.click(btnAddCart)

    expect(addOnCart).toBeCalledWith(product)
  })

  test('Should find a button with disabled attribute and text information that is already in the cart', () => {
    const cart = [{ ...product }]

    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    const btnAddCart = screen.getByText('Ja está na sacola!')

    expect(btnAddCart).toBeDisabled()
  })
})
