import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Spinner } from '../../../../components/Spinner'
import { IPost } from '../../../Blog'
import { relativeDateFormatter } from '../../../../utils/formatter'

import * as S from './styles'

type PostHeaderProps = {
  postData: IPost
  isLoading: boolean
}

export const PostHeader = ({ postData, isLoading }: PostHeaderProps) => {
  const formattedDate = relativeDateFormatter(postData?.created_at)

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <S.PostHeaderConatiner>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </S.PostHeaderConatiner>
  )
}
