import styled from "styled-components";

export const StyledTestimonialCard = styled.div`
    background-color: var(--bg);
    border-radius: 1rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    width: 50%;
    position: relative;
    padding: 2rem;
    border: var(--border-width) solid var(--border-color);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;


    > blockquote {
        position: relative;
        margin: 0;

        > p {
            color: var(--black-muted-softer);
            font-style: italic;
            line-height: 1.6rem;
            margin: 0;
        }
    }

    > a {
        display: inline-flex;
        align-items: center;
        color: var(--accent-color); 
        text-decoration: none;
        font-weight: 400;
        margin-top: auto;

        &:hover {
            text-decoration: underline;
        }

        > svg {
            width: 1rem;
            height: 1rem;
            margin-left: 0.4rem; 
            color: var(--accent-color); 
        }
    }
`

export const CardHeader = styled.div`
    position: relative;
    top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    height: 5rem;
    margin-bottom: 0.5rem;
`

export const ImageContainer = styled.div`
    position: relative;

    > img {
        height: 5.5rem;
        width: 5.5rem;
        border-radius: 50%;
        border: 0.2rem solid var(--accent-color);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
`

export const IconContainer = styled.div`
    position: absolute;
    bottom: 0.2rem;
    right: 0;
    background-color: var(--accent-color);
    border-radius: 50%;
    padding: 0.3rem;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;

    > svg {
        width: 0.9rem;
        height: 0.9rem;
        color: var(--bg); 
    }
`

export const HeaderText = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    > * {
        margin: 0;
    }

    > h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--black-muted);
        margin-bottom: 0.1rem;
    }

    > p {
        font-size: 1rem;
        color: var(--black-muted-softer);
    }

    > p:nth-of-type(1) {
        
    }

    > p:nth-of-type(2) {
        color: var(--accent-color);  
    }
`

