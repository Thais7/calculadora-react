import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 18px;
    margin: 6px;
    border: none;
    background-color:#A8C7AE;
    border-radius: 12px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    flex: 1;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;

    &:hover {
        background-color: #8DBA98;
    }

    &:active {
        transform: scale(0.98);
    }
`