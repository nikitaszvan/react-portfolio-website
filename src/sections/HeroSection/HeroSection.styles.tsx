import styled from "styled-components";

export const StyledHeroSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 767px) {
        gap: 1.2rem;
    }
`

export const HeroImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 0.32rem solid var(--accent-color);

    @media (max-width: 767px) {
        width: 8rem;
        height: 8rem;
        border: 0.22rem solid var(--accent-color);
    }
`

export const HeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > * {
        margin: 0;
    }

    > h1 {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--black-muted);
        padding-bottom: 0;

        @media (max-width: 767px) {
            font-size: 2.5rem;
        }

        > span {
            box-shadow: inset 0px -0.32rem 0 0 var(--accent-color);

            @media (max-width: 767px) {
                box-shadow: inset 0px -0.22rem 0 0 var(--accent-color);
            }
        }
    }

    > p {
        font-size: 1.4rem;
        color: var(--black-muted-softer);
        font-weight: 350;
        font-style: italic;

        @media (max-width: 767px) {
            font-size: 1.125rem;
        }
    }
`