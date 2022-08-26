import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 5rem;

    .cardSkeleton {
        display: grid;
        grid-template-columns: 16rem 16rem 16rem 16rem;
        padding: 10px;
        column-gap: 1rem;
        row-gap: 20px;
    }
`;