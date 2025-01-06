import * as S from "./StyledFooter";

interface FooterProps {
  isApiOn: boolean
  toggleApiStatus: () => void
}

export default function Footer({ isApiOn, toggleApiStatus }: FooterProps) {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <p>&copy; {new Date().getFullYear()} Todos os Direitos Reservados Calpar Comércio de Calcário Ltda.</p>
        <S.ButtonContainer>
          <S.ToggleButton 
            onClick={toggleApiStatus} 
            $isApiOn={isApiOn}
          >
            {isApiOn ? 'Simular Erro' : 'Não simular Erro'}
          </S.ToggleButton>
        </S.ButtonContainer>
      </S.FooterContent>
    </S.FooterContainer>
  )
}
