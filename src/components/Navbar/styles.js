import styled from "styled-components";

export const Container = styled.div`

    .navbar {
        background: rgb(13,37,63);
        background: linear-gradient(90deg, rgba(13,37,63,1) 0%, rgba(13,37,63,1) 12%, rgba(144,206,161,1) 100%);
    }
        
    .nav-item {
        visibility: hidden;
    }

    @media screen and (max-width: 400px){
        .nav-item {
            visibility: visible;
        }
}

`;