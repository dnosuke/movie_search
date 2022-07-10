import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    color: aliceblue;
    /* ou % */
    background: rgb(13,37,63);
    background: linear-gradient(90deg, rgba(13,37,63,1) 0%, rgba(13,37,63,1) 12%, rgba(144,206,161,1) 100%);
    

    img {
        margin-top: 2rem;
    }

    p {
        padding-bottom: 1rem;
    }

    @media screen and (max-width: 400px){
    
        p {
            text-align: center;
        }
    }
    
`;