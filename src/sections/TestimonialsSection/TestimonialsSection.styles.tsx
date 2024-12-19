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

export const CardsContainer = styled.div`
    display: flex;
    overflow-x: hidden;

    @media (max-width: 1144px) {
        overflow-x: scroll;
    }
    transition: scroll-left 0.5s linear;
    gap: 2rem;
    padding-block: 2rem;

    > div:nth-of-type(1) {
        margin-left: 1rem;
    }

    > div:last-of-type {
        margin-right: 1rem; 
    }
`

export const CircleIndicatorContainer = styled.div<{ activeCircle: number }>`
    display: flex;
    justify-content: center;
    gap: 0.5rem;


    > button {
        width: 0.75rem;
        height: 0.7rem;
        border-radius: 50%;
        background-color: var(--base-color);
        transition: background-color 0.2s;
        border: none;
    }

    > button:nth-of-type(${({activeCircle}) => (activeCircle + 1)}) {
        background-color: var(--accent-color); 
    }
`