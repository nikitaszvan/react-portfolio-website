import styled from "styled-components";

export const StyledTestimonialsSection = styled.div`
    padding-top: 1rem;

    > span {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        > svg {
            height: 1.7rem;
            width: auto;
        }

        > h2 {
            font-size: 1.875rem;
            font-weight: 600;
            text-align: center;
            margin: 0;
        }
    }
`

export const CardsContainer = styled.div`
    gap: 2.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`