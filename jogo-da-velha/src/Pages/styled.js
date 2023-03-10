import styled from "styled-components";

export const BodyStyled = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    height: 100vh;
    background-color: #a0c7d1;

    `
export const DivHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        color: #ffb703;
        margin-right: 20px
    }

    h1{
        font-family: 'Rampart One', cursive;
        font-size: 55px;
        text-align: center;
        color: #023047;
    }

    `
export const DivBase = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 240px);
    grid-template-rows: repeat(3, 200px);
    gap: 1rem;

    .cell{
        display: grid;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 8px;
        font-size: 20px;
        font-weight: bolder;
        color: black;
        cursor: pointer;
    }

    .cell:not(.O):not(.X):hover{
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    }
    .cell.O, .cell.X{
        cursor: not-allowed;
    }
    .cell.O{
        font-family: 'Tilt Prism', cursive;
        color: white;
        font-size: 40px;
        background-color: var(--0-color);

    }
    .cell.X{
        font-family: 'Tilt Prism', cursive;
        color: white;
        font-size: 40px;
        background-color: var(--X-color);
    }
`
