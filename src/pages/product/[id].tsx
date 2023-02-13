import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function ProductId() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          similique voluptatum perferendis alias reprehenderit vitae ipsa
          ducimus et voluptate, voluptas quia dolor sed nam error, provident
          temporibus. A, nihil distinctio!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
