import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 16rem 16rem 16rem 16rem;
    padding: 10px;
    column-gap: 1rem;
    row-gap: 20px;

    
    .card {
        background-color: rgb(25,28,29);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 10px;
        font-size: 20px;
        text-align: center;

        img {
            height: auto;
        }

        div {
            text-align: justify;
        }
    }

    .card:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 400px){
        grid-template-columns: 10rem 10rem ;
        
    }
`;