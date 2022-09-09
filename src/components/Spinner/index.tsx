import * as S from './styles'

export const Spinner = () => {
  return (
    <S.SpinnerContainer>
      <div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </S.SpinnerContainer>
  )
}
