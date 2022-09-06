import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            RoneBS
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Várzea Alegre
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </S.ProfileDetails>
    </S.ProfileContainer>
  )
}
