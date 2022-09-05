import { ComponentProps } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'

type ExternalLinkProps = ComponentProps<typeof S.ExternalLinkContainer> & {
  text: string
}

export const ExternalLink = ({ text, ...rest }: ExternalLinkProps) => {
  return (
    <S.ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </S.ExternalLinkContainer>
  )
}
