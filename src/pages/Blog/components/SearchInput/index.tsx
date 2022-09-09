import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

type SearchFormInput = z.infer<typeof searchFormSchema>

const searchFormSchema = z.object({
  query: z.string()
})

type SearchInputProps = {
  postsLength: number
  getPosts: (query: string) => Promise<void>
}

export const SearchInput = ({ postsLength, getPosts }: SearchInputProps) => {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchPosts = async (data: SearchFormInput) => {
    await getPosts(data.query)
  }

  return (
    <S.SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>
          {postsLength} {postsLength > 1 ? 'publicações' : 'publicação'}{' '}
        </span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </S.SearchInputContainer>
  )
}
