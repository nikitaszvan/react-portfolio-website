import styled from "styled-components";

export const StyledFunAboutMe = styled.section`
    position: relative;
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > span {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        > svg {
            height: 1.3rem;
            width: auto;
            fill: var(--accent-color);
        }

        > h2 {
            color: var(--black-muted);
            font-size: 1.875rem;
            font-weight: 600;
            text-align: center;
            margin: 0;

            @media (max-width: 769px) {
                font-size: 1.5rem;
            }
        }
    }
`

export const StyledHeader = styled.div`
    text-align: center;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 0.4rem;

    > * {
        margin: 0;
    }

    > h2 {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--black-muted);
    }

    > p {
        font-size: 1.25rem;
        color: var(--black-muted-softer);
        font-family: 'Montserrat';
        font-weight: 500;
    }
`

export const HobbiesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    gap: 2rem;
    flex-wrap: wrap;
    position: relative;
    z-index: 10;

    @media (max-width: 769px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-inline: 1.5rem;
    }

`

export const HobbyColumn = styled.div`
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: var(--black);
        font-weight: 500;
    }

    &:nth-of-type(1) {
        > div:nth-of-type(2) {
            @media (min-width: 768px) and (max-width: 1025px) {
                transform: translateX(-16.5%) translateY(0);
            }
        }
    }

    &:last-of-type {
        > div:nth-of-type(2) {
            @media (min-width: 768px) and (max-width: 1025px) {
                transform: translateX(-84%) translateY(0);
            }
        }
    }
`

export const IconContainer = styled.div`
    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 9999px;
    border: var(--border-width) solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 

    @media (max-width: 769px) {
        padding: 1.2rem;
    }
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        border: var(--border-width) solid var(--accent-color);
    }

    &:hover > svg {
        transform: scale(1.1);
    }

    &:hover ~ p {
        color: var(--accent-color);
    }

    > svg {
        width: 3rem;
        height: 3rem;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        @media (max-width: 769px) {
            width: 2.5rem;
            height: 2.5rem;
        }
        fill: var(--black);
    }
`

export const ImageContainer = styled.div<{isVisible: boolean}>`
    position: absolute;
    top: 100%;
    left: 50%;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: opacity;
    display: flex;
    gap: 0.5rem;
    z-index: 3;

    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) => (props.isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-1rem)')};

    > div {
        position: relative;
        width: 8rem;
        height: 8rem;

        @media (max-width: 769px) {
            width: 6rem;
            height: 6rem;
        }

        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`