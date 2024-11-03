import styled, { keyframes } from "styled-components";

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const StyledTestimonialCard = styled.div`
    background-color: var(--bg);
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem;
    animation: ${fadeInUp} 0.5s forwards;
    height: fit-content;
`

export const AccentBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    background-color: var(--accent-color);
`

export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;


    > blockquote {
        position: relative;
        margin: 0;

        > p {
            color: rgb(75 85 99);
            font-style: italic;
            line-height: 1.625;
            margin: 0;
        }
    }

    > a {
        display: inline-flex;
        align-items: center;
        color: var(--accent-color); 
        text-decoration: none;

        > svg {
            width: 0.7rem;
            height: 0.7rem;
            margin-left: 0.4rem; 
            fill: var(--accent-color); 
        }
    }
`

export const CardHeader = styled.div`
    position: relative;
    top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    margin-bottom: 0.5rem;
`

export const ImageContainer = styled.div`
    position: relative;

    > img {
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        border: 0.2rem solid var(--bg);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
`

export const IconContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--accent-color);
    border-radius: 50%;
    padding: 0.25rem;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;

    > svg {
        width: 1rem;
        height: 1rem;
        color: var(--bg); 
    }
`

export const HeaderText = styled.div`
    margin-left: 1rem;

    > * {
        margin: 0;
    }

    > h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: rgb(75 85 99); 
    }

    > p {
        font-size: 0.875rem;
        color: rgb(75 85 99); 
    }

    > p:nth-of-type(2) {
        color: var(--accent-color);  
    }
`

