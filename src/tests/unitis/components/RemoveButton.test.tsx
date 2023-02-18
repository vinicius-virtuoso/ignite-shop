import '@testing-library/jest-dom'

import { CartContext } from '@/context/CartContext'
import { fireEvent, render, screen } from '@testing-library/react'
import { RemoveButton } from '@/components/Cart/RemoveButton'

import { faker } from '@faker-js/faker'

const product = {
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(102, 102, 2, 'R$ '),
  imageUrl: [faker.image.fashion()],
  defaultPriceId: '',
}

let isOpen = true
const handleChangeVisibilityCart = jest.fn()
const addOnCart = jest.fn()
const removeOnCart = jest.fn()
const cart = [{ ...product }]
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
      <RemoveButton onClick={() => removeOnCart(product.id)} />
    </CartContext.Provider>
  )
}

describe('Test in component RemoveButton', () => {
  test('Should call function remove item correctly', () => {
    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    const removeBtn = screen.getByTestId('remove')
    fireEvent.click(removeBtn)

    expect(removeOnCart).toBeCalledWith(product.id)
  })
})
