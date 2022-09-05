import { ExternalLink } from '../../../../components/ExternalLink'
import * as S from './styles'

export const Profile = () => {
  return (
    <S.ProfileContainer>
      <S.ProfilePicture src="https://github.com/RoneBS.png" />

      <S.ProfileDetails>
        <header>
          <h1>Rone Silveira</h1>

          <ExternalLink text="Github" href="#" />
        </header>
      </S.ProfileDetails>
    </S.ProfileContainer>
  )
}
