import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;

    img {
        width: 80px;
    }

    .content {
        display: flex;
        justify-content: flex-start;
        margin: 1rem;
        h2 {
            margin-top: 1rem;
            margin-left: 2rem;
        }

        span {
            margin-top: 1rem;
            margin-left: 2rem;
            font-size: 30px;
        }
    }

    @media screen and (max-width: 400px){
       display: none;
}
`;