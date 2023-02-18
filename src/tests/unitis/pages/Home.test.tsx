import '@testing-library/jest-dom'
import { CartProvider } from '@/context/CartContext'
import { render, screen } from '@testing-library/react'
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
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(102, 102, 2, 'R$ '),
    imageUrl: faker.image.fashion(),
    defaultPriceId: '',
  },
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
  })

  test('Should to render the index|Home just a header, but not products', () => {
    renderComponent([])

    expect(screen.queryByTestId('item-slider')).toBe(null)
  })
})
