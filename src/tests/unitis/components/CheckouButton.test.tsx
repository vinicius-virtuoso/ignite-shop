import { CheckoutButton } from '@/components/Cart/CheckoutButton'
import { CartContext } from '@/context/CartContext'
import { faker } from '@faker-js/faker'
import { fireEvent, screen, render } from '@testing-library/react'

const product = {
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(102, 102, 2, 'R$ '),
  imageUrl: faker.image.fashion(),
  defaultPriceId: '',
}

let isOpen = true
const handleChangeVisibilityCart = jest.fn()
const addOnCart = jest.fn()
const removeOnCart = jest.fn()
const cart = [{ ...product }]
const totalPrice = product.price
let loading = false

const checkProductId = jest.fn()

function renderComponent(
  isOpen,
  handleChangeVisibilityCart,
  addOnCart,
  removeOnCart,
  cart,
  totalPrice,
  loading?: boolean
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
      <CheckoutButton
        onClick={checkProductId}
        isCreateCheckoutSession={loading}
      />
    </CartContext.Provider>
  )
}

describe('Test in component CheckoutButton', () => {
  test('Should  to the checkout function must be called when clicking on the checkout button', () => {
    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice
    )

    const btnCheckout = screen.getByRole('button')
    fireEvent.click(btnCheckout)

    expect(checkProductId).toHaveBeenCalled()
  })

  test('Should show loading icon if loading is true', () => {
    loading = true
    renderComponent(
      isOpen,
      handleChangeVisibilityCart,
      addOnCart,
      removeOnCart,
      cart,
      totalPrice,
      loading
    )

    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
