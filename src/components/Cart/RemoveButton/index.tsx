import { ButtonHTMLAttributes } from 'react'
import { RemoveButtonStyle } from './styles'

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const RemoveButton = ({ children, ...rest }: RemoveButtonProps) => {
  return (
    <RemoveButtonStyle data-testid="remove" {...rest}>
      {children}
    </RemoveButtonStyle>
  )
}
