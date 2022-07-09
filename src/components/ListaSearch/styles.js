import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 40%;

    
    .content {
        margin: .5rem;
        display: flex;
        width: 90%;
        border-style: solid;

        img {
            margin-right: 5rem;
            width: 20%;
            height: auto;
        }
    }

`;