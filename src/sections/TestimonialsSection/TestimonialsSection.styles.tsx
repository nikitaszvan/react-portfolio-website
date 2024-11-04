import styled from "styled-components";

export const StyledTestimonialsSection = styled.div`
    > span {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        > svg {
            height: 1.4rem;
            width: auto;
            stroke: var(--accent-color);;
        }

        > h2 {
            font-size: 1.875rem;
            font-weight: 600;
            text-align: center;
            margin: 0;
            margin-block: 1rem;
            color: var(--black-muted);
        }
    }
`

export const CardsContainer = styled.div`
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`