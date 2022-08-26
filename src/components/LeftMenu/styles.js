import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    h1 {
        font-size: 25px;
    }

    li {
        margin: 2rem;
        display: flex;
        flex-direction: column;
    }

    span {
        margin-top: 2rem;
    }

    span:hover {
        color: blue;
    }

    @media screen and (max-width: 400px){
       display: none;
}
`;