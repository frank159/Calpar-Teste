import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: #551a0d;
  color: white;
  padding: 1rem 0;
`

export const FooterContent = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  
  justify-content: space-between;
  align-items: center;

  display: flex;
  flex-direction: row;
`

export const ButtonContainer = styled.div`
  text-align: center;
`

export const ToggleButton = styled.button<{ $isApiOn: boolean }>`
  padding: 0.5rem 1rem; 
  border-radius: 0.375rem; 
  background-color: ${(props) => (props.$isApiOn ? '#38a169' : '#e53e3e')};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.$isApiOn ? '#2f855a' : '#c53030'};
  }
`
