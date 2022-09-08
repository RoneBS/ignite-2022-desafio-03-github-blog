import { relativeDateFormatter } from '../../../../utils/formatter'
import { IPost } from '../../index'

import * as S from './styles'

type PostProps = {
  post: IPost
}

export const Post = ({ post }: PostProps) => {
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <S.PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </S.PostContainer>
  )
}
