import logoSrc from '../../assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={logoSrc} alt="" />
    </S.HeaderContainer>
  )
}
