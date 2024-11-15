import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeroSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    @media (max-width: 767px) {
        gap: 1.2rem;
    }
`

const scaleUp = keyframes`
    0% {
        transform: scale(0.75);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
`;

export const HeroImageWrapper = styled(Link)`
    position: relative;
    width: fit-content;
    height: fit-content;
    animation: ${scaleUp} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    transition: scale 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        scale: 1.1;
    }
`


export const HeroImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 0.32rem solid var(--accent-color);
    background-color: var(--image-bg);

    @media (max-width: 767px) {
        width: 8rem;
        height: 8rem;
        border: 0.22rem solid var(--accent-color);
    }
`
const pulse = keyframes`
    0%{
        -webkit-transform: scale(0.01);
        transform: scale(0.01);
    }
    
    100%{
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`

export const GreenDot = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    border: 0.23rem solid var(--bg);
    position: absolute;
    right: 6%;
    bottom: 6%;
    background-color: #01754f;
    animation: ${pulse} 0.75s cubic-bezier(0.4, 0, 0.2, 1);

`
const underlineAnimation = keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
`;


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
        position: relative;

        @media (max-width: 767px) {
            font-size: 2.5rem;
        }

        > span {
            position: relative; 
            display: inline-block;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                height: 0.32rem;

                @media (max-width: 767px) {
                    height: 0.22rem;
                }

                background-color: var(--accent-color);
                animation: ${underlineAnimation} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards 1s;
            }
        }
    }

    > p {
        font-size: 1.4rem;
        color: var(--black-muted-softer);
        font-weight: 350;
        

        @media (max-width: 767px) {
            font-size: 1.125rem;
        }
    }
`