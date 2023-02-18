import { ButtonHTMLAttributes } from 'react'
import { Triangle } from 'react-loader-spinner'
import { CheckoutButtonStyled } from './styles'

interface CheckoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCreateCheckoutSession: boolean
}

export const CheckoutButton = ({
  isCreateCheckoutSession,
  ...rest
}: CheckoutButtonProps) => {
  return (
    <CheckoutButtonStyled disabled={isCreateCheckoutSession} {...rest}>
      {isCreateCheckoutSession ? (
        <div data-testid="loading">
          <Triangle
            height="34"
            width="34"
            color="#4fa94d"
            ariaLabel="triangle-loading"
          />
        </div>
      ) : (
        'Finalizar compra'
      )}
    </CheckoutButtonStyled>
  )
}
