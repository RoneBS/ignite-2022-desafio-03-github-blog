import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

import * as S from './styles'

export const Blog = () => {
  return (
    <>
      <Profile />
      <SearchInput />
      <S.PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </S.PostListContainer>
    </>
  )
}
