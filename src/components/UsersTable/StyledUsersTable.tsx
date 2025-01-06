import styled from "styled-components";

interface ThProps {
    $width?: string;
}

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

export const Table = styled.table`
    width: 100%;
    background-color: aliceblue;
    font-weight: bold;

`;

export const Thead = styled.thead`
  position: sticky;
  color: #ffffff;

  background-color: #551a0d;
  top: 0;
  z-index: 2;
`;

export const Tr = styled.tr`

`;

export const Th = styled.th<ThProps>`
    padding: 0.75rem;
    
    user-select: none;
    transition: background-color 0.2s;
    width: ${props => props.$width || 'auto'};

    &:hover {
        background-color: #cccccc1a;
    }
`;

export const Td = styled.td`
    border: 1px solid #000000;
    padding: 0.75rem;
`;

export const Tbody = styled.tbody`
    background-color: #99999929;
`;

export const TableWrapper = styled.div`
    height: 40vh;
    width: 80vw;
    

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const EmptyMessageTd = styled(Td)`
    text-align: center;
    padding: 2rem;
    color: #666;
    font-style: italic;
`;

export const TableContainer = styled.div`
    position: relative;
    width: 80vw;
`;

export const LoadingDiv = styled.div`
    height: 6px;
    background-color: #f0f0f0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 100000;
`;

export const LoadingBar = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        #ff8c00,
        transparent
    );
    animation: loading 0.6s infinite linear;

    @keyframes loading {
        0% {
            left: -100%;
        }
        100% {
            left: 100%;
        }
    }
`;
