import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    margin-top: 2.5rem;

    h1 {
        font-size: 25px;
        color: rgb(72,113,107);
    }

    img {
        width: 90px;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 1rem;
        h2 {
            font-size: 16px;
            margin-bottom: 1rem;
        }

        span {
            margin-left: 2rem;
            font-size: 30px;
        }

        .des {
            margin-left: 1rem;

            i {
                color: yellow;
            }
        }
    }

    @media screen and (max-width: 400px){
       display: none;
}
`;