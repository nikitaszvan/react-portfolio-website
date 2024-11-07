import styled from "styled-components";

export const StyledFunAboutMe = styled.section`
    position: relative;
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1023px) {
        gap: 1rem;
    }

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

            @media (max-width: 767px) {
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

    @media (max-width: 1023px) {
        margin-bottom: 1rem;
    }

    > * {
        margin: 0;
    }

    > h2 {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--black-muted);

        @media (max-width: 767px) {
            font-size: 1.4rem;
        }
    }

    > p {
        font-size: 1.25rem;
        color: var(--black-muted-softer);
        font-weight: 350;
        whitespace: prewrap;
        font-style: italic;

        @media (max-width: 767px) {
            font-size: 1rem;
        }

        > span {
            &:after {
                content: "Hover over"
            }

            @media (max-width: 767px) {
                &:after {
                    content: "Click"
                }
            }
        }
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

    @media (max-width: 767px) {
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
        font-weight: 400;

        transition: font-weight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:nth-of-type(1) {
        > div:nth-of-type(2) {
            @media (max-width: 1023px) {
                transform: translateX(-16.5%) translateY(0);
            }
        }
    }

    &:nth-of-type(2) {
        > div:nth-of-type(2) {
            @media (max-width: 767px) {
                transform: translateX(-84%) translateY(0);
            }
        }
    }

    &:nth-of-type(3) {
        > div:nth-of-type(2) {
            @media (max-width: 767px) {
                transform: translateX(-16.5%) translateY(0);
            }
        }
    }

    &:last-of-type {
        > div:nth-of-type(2) {
            @media (max-width: 1023px) {
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

    @media (max-width: 767px) {
        padding: 1.6rem;
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
        font-weight: 500;
    }

    > svg {
        width: 3rem;
        height: 3rem;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        // @media (max-width: 767px) {
        //     width: 4rem;
        //     height: 4rem;
        // }
        fill: var(--black);
    }
`

export const ImageContainer = styled.div<{isVisible: boolean}>`
    position: absolute;
    top: 100%;
    left: 50%;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: opacity, transform, z-index;
    display: flex;
    gap: 0.5rem;
    z-index: 3;

    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) => (props.isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-1rem)')};

    @media (max-width: 767px) {
        ${(props) => (!props.isVisible && 'z-index: -5')};
    }

    > div {
        position: relative;
        width: 8rem;
        height: 8rem;

        @media (max-width: 767px) {
            width: 6.8rem;
            height: 6.8rem;
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