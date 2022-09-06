import * as S from './styles'

export const SearchInput = () => {
  return (
    <S.SearchInputContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </S.SearchInputContainer>
  )
}
