import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Product, IconBag } from '@/styles/pages/home'
import { Link, Handbag } from 'phosphor-react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

interface SliderProps {
  products: ProductType[]
}

interface ProductType {
  id: string
  name: string
  imageUrl: string
  price: string
}

export const Slider = ({ products }: SliderProps) => {
  const { cart } = useCart()

  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'auto',
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: {
          origin: 'center',
          perView: 1.3,
          spacing: 15,
        },
      },
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          data-testid="item-slider"
        >
          <Product className="keen-slider__slide">
            <Image
              width={200}
              height={200}
              src={product.imageUrl}
              alt={product.name}
            />
            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>

              <IconBag
                variant={
                  cart.find((productCart) => productCart.id === product.id)
                    ? 'inCart'
                    : 'outCart'
                }
              >
                <Handbag size={32} weight="regular" />
              </IconBag>
            </footer>
          </Product>
        </Link>
      ))}
    </div>
  )
}

export default Slider
