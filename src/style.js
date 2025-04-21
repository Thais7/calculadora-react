import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FDFDF9;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Georgia', serif;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 320px;
    padding: 24px;
    border-radius: 18px;
    box-shadow: 0px 8px 16px rgba(53, 92, 75, 0.1);
    border: 1px solid #E0E0DC;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 0;
`