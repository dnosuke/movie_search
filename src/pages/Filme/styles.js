import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem;
    }

    p {
        width: 700px;
        padding: 0 2rem 0;
    }
    
    img {
        width: 800px;
        height: auto;
        border-radius: 10px;
    }
    
    

    @media screen and (max-width: 400px){
        margin: 0;
        .content {
            margin: 1rem;
        }
        img {
            width: 90vw;
        }

        h5 {
        margin: 1rem;
    }

    p {
        width: auto;
        padding: 0 1rem 0;
    }

    }
`;