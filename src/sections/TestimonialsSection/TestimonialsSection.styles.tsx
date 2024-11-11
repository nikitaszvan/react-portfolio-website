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

            @media (max-width: 767px) {
                font-size: 1.5rem;
            }
        }
    }
`

export const CardsContainer = styled.div<{itemsCount: number}>`
    display: flex;
    overflow-x: hidden;
    transition: scroll-left 0.5s linear;
    gap: 2rem;
    padding-block: 2rem;
`