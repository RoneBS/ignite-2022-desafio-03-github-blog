import { useCallback, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

import * as S from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export type IPost = {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        )
        console.log(response.data)
        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts]
  )

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <>
      <Profile />
      <SearchInput />
      <S.PostListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </S.PostListContainer>
    </>
  )
}
