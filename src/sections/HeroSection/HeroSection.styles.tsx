import styled from "styled-components";

export const StyledHeroSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const HeroImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 0.25rem solid var(--accent-color);
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
        line-height: 1;
        letter-spacing: -0.025em;
        color: var(--black-muted);

        > span {
            border-bottom: 0.25rem solid var(--accent-color);
        }

        @media (min-width: 640px) { /* s */
            font-size: 2.25rem;
        }

        @media (min-width: 768px) { /* md */
            font-size: 3rem;
        }
    }

    > p {
        font-size: 1.25rem;
        color: var(--black-muted-softer);
        line-height: 1.625;
        font-family: 'Montserrat';
        font-weight: 500;
    }
`