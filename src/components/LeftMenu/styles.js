import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    h1 {
        font-size: 25px;
        color: rgb(72,113,107);
    }

    li {
        margin: 2rem;
        display: flex;
        flex-direction: column;
    }

    span {
        color: rgb(72,113,107);
        margin-top: 2rem;
    }

    span:hover {
        color: white;
    }

    @media screen and (max-width: 400px){
       display: none;
}
`;