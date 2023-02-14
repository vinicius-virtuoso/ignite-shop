import { IconCart } from '../Cart/IconCart'
import { Logo } from '../Logo'
import { HeaderContainer, Container } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo />

        <IconCart />
      </Container>
    </HeaderContainer>
  )
}
