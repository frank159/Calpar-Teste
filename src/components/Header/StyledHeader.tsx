import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  position: relative;
`;

export const TitlePage = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #551a0d;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Logo = styled.div`
  flex-shrink: 0;
`;

export const DateContainer = styled.div`
  position: absolute;
  right: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #551a0d;
`;
