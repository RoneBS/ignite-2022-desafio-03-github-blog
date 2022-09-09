import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { api } from '../../services/api'
import { IPost } from '../Blog'
import { PostHeader } from './components/PostHeader'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export const Post = () => {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <PostHeader postData={postData} isLoading={isLoading} />
      )}
    </>
  )
}
