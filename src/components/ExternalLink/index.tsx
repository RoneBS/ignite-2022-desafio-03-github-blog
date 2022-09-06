import { ComponentProps, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'

type ExternalLinkProps = ComponentProps<typeof S.ExternalLinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export const ExternalLink = ({ text, icon, ...rest }: ExternalLinkProps) => {
  return (
    <S.ExternalLinkContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </S.ExternalLinkContainer>
  )
}
