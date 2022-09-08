import { IPost } from '../../index'

import * as S from './styles'

type PostProps = {
  post: IPost
}

export const Post = ({ post }: PostProps) => {
  return (
    <S.PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{post.created_at}</span>
      </div>
      <p>{post.body}</p>
    </S.PostContainer>
  )
}
