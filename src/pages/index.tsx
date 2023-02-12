import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '@/assets/1.png'
import camiseta2 from '@/assets/2.png'
import camiseta3 from '@/assets/3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="camisa 1" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="camisa 2" width={520} height={480} />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 179,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="camisa 3" width={520} height={480} />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 29,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="camisa 3" width={520} height={480} />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 29,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
