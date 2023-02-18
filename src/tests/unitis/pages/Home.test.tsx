import '@testing-library/jest-dom'
import { CartProvider } from '@/context/CartContext'
import { fireEvent, render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import Home from '@/pages'
import '../../mocks/matchMedia'

const productsArr = [
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(102, 102, 2, 'R$ '),
    imageUrl: faker.image.fashion(),
    defaultPriceId: '',
  },
]

function renderComponent(products) {
  render(
    <CartProvider>
      <Home products={products} />
    </CartProvider>
  )
}

describe('Test in page Index|Home', () => {
  test('Should to be able to render the index|Home correctly', () => {
    renderComponent(productsArr)

    expect(screen.getByTestId('slider')).toBeInTheDocument()
    expect(screen.getByText(productsArr[0].name)).toBeInTheDocument()
  })

  test('Should navigate to product page when clicked', () => {
    renderComponent(productsArr)

    const cardProduct = screen.getByTestId('product-link')
    fireEvent.click(cardProduct)

    expect(window.location.pathname).toBe('/')
  })

  test('Should to render the index|Home just a header, but not products', () => {
    renderComponent([])

    expect(screen.queryByText(productsArr[0].name)).not.toBeInTheDocument()
  })
})
