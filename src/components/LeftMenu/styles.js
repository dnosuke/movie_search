import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    span:hover {
        color: red;
    }

    @media screen and (max-width: 400px){
       display: none;
}
`;