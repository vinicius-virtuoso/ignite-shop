import Success from '@/pages/success'
import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'

const products = [
  {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    images: [faker.image.fashion()],
  },
]

describe('Test in page success checkout', () => {
  test('Should to render correctly page whit title', () => {
    render(<Success customerName="Vinicius Virtuoso" products={products} />)

    const title = screen.getByText('Compra efetuada!')

    expect(title).toBeInTheDocument()
  })
})
