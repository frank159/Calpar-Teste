import styled from "styled-components";


export const MainContainer = styled.div`
    width: 80vw;
    margin-top: 5vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const InputContainer = styled.div`

`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SearchButton = styled.button`
    background-color: #ffffff;
    border: 1px solid #000000 ;
    color: #000000;

    height: 5vh;
    width: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;


    padding: 0.75rem;
    transition: 0.5s;
    font-size: 1rem;
    margin-left: 1%;
    
    &:hover {
        font-size: 1.1rem;
        background-color: #000000;
        color: #ffffff;
    }
`;

export const SearchBar = styled.input`
    border: none;
    outline: none;
    color: #000000;
    padding: 1rem;
    border: 1px solid #000000 ;
    height: 5vh;
    width: 12vw;

    padding: 0.75rem;
    transition: 0.5s;

    &:hover {
        font-size: 1.1rem;
        background-color: #000000;
        color: #ffffff;
        border-color: #888;
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
`;

export const FilterSelect = styled.select`
    height: 5vh;
    width: 6vw;

    border: 1px solid #000000;
    background-color: white;
    color: #000000;
    font-size: 1rem;
    cursor: pointer;
    transition: border-color 0.2s;

    padding: 0.75rem;
    transition: 0.5s;

    &:hover {
        font-size: 1.1rem;
        background-color: #000000;
        color: #ffffff;
    }

    &:focus {
        outline: none;
    }
`;