import styled from "styled-components";


export const MainContainer = styled.div`
    width: 80vw;
    margin-top: 5vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


export const FilterSelect = styled.select<{ disabled: boolean }>`
    height: 4vh;
    width: 6vw;
    border-radius: 4px;
    border: 1px solid #000000;
    background-color: white;
    color: #000000;
    font-size: 1rem;
    cursor: pointer;
    transition: border-color 0.2s;

    padding: 0.20rem;
    transition: 0.5s;

    &:hover {
        ${({ disabled }) => !disabled && `
            font-size: 1.1rem;
            color: #000000;
        `}    }

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: #f0f0f0;
        color: #aaa;
        border: 1px solid #ccc;
        cursor: not-allowed;
    }
`;

export const SearchButton = styled.button`
    background-color: #ffffff;
    border: 1px solid #000000;
    color: #000000;
    border-radius: 4px;

    height: 4vh;
    width: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem;
    transition: 0.5s;
    font-size: 1rem;
    margin-left: 4%;
    
    &:hover {
        ${({ disabled }) => !disabled && `
            font-size: 1.1rem;
            background-color: #ff7b00;
            border: 1px solid #ff7b00;
            color: #ffffff;
        `}
    }
`;

export const DownloadButton = styled.button<{ disabled: boolean }>`
    background-color: #ffffff;
    border: 1px solid #000000 ;
    color: #000000;
    border-radius: 4px;

    height: 4vh;
    width: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem;
    transition: 0.5s;
    font-size: 1rem;
    margin-left: 4%;
    
    &:hover {
        ${({ disabled }) => !disabled && `
            color: #5f5f5f;
        `}
    }

    &:disabled {
        background-color: #f0f0f0;
        color: #aaa;
        border: 1px solid #ccc;
        cursor: not-allowed;
    }
`;

export const SearchBar = styled.input<{ disabled: boolean }>`
    border: none;
    border-radius: 4px;
    outline: none;
    color: #000000;
    padding: 1rem;
    border: 1px solid #000000 ;
    height: 4vh;
    width: 12vw;

    padding: 0.75rem;
    transition: 0.5s;

    &:hover {
        ${({ disabled }) => !disabled && `
            font-size: 1.1rem;
            color: #000000;
        `}
    }
    
    &:focus {
        outline: none;

        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
        background-color: #f0f0f0;
        color: #aaa;
        border: 1px solid #ccc;
        cursor: not-allowed;
    }
`;
