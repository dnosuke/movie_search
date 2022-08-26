import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 2.5rem;
    max-width: 800px;

    h1 {
        font-size: 25px;
    }

    img {
        width: 10vw;
    }
    .similar {
        display: flex;
        flex-direction: row;
    }
    .content {
        display: flex;
        justify-content: flex-start;
        margin: 1rem;
        h2 {
            font-size: 16px;
            margin-top: 0.5rem;
        }

        span {
            font-size: 30px;
        }

        
    }

    @media screen and (max-width: 400px){
        
        img {
            width: 30vw;
        }

        .similar {
            width: 100vw;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
}
`;