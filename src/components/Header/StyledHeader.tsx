import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center; /* Alinha a imagem verticalmente */
  position: relative; /* Torna o container um contexto para posicionamento absoluto */
`;

export const TitlePage = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  left: 50%; /* Move o título para o centro horizontal */
  transform: translateX(-50%); /* Centraliza exatamente no meio */
`;

export const Logo = styled.div`
  flex-shrink: 0; /* Impede que a imagem encolha */
`;
