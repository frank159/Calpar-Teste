import styled from "styled-components";

interface StyledProps {
  $color?: boolean;
  fadeOut: boolean; // Propriedade que será usada para controlar o efeito de fade-out no estilo
}

export const MsgContainer = styled.div`
    width: 100vw;
    height: 6vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MsgTextContainer = styled.div<StyledProps>`
    border-radius: 4px;
    width: auto;
    padding: 10px;
    margin-bottom: 2%;
    background-color: ${props => (props.$color ? 'red' : 'green')};
    transition: opacity 2s ease-in-out;  // Transição de opacidade

    opacity: ${props => (props.fadeOut ? 0 : 1)}; // Controlando a opacidade baseada no fadeOut
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MsgText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
`;
