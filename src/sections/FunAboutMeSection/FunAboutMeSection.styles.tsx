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
    gap: 1rem;

    > * {
        margin: 0;
    }

    > h2 {
        font-size: 1.875rem;
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

`

export const HobbyColumn = styled.div`
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: var(--accent-color);
        font-weight: 500;
        transition: all 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        font-family: 'Montserrat';
    }
`

export const IconContainer = styled.div`
    transition: all 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 9999px;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
        border: 1px solid var(--accent-color);
    }

    &:hover > svg {
        transform: scale(1.1);
    }

    > svg {
        width: 3rem;
        height: 3rem;
        transition: all 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        fill: var(--black);
    }
`

export const ImageContainer = styled.div<{isVisible: boolean}>`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    transition: all 0.3s;
    display: flex;
    gap: 0.5rem;

    ${(props => props.isVisible ?
        `opacity: 1;
        transform: translateX(-50%) translateY(0);`
        :
        `opacity: 0;
        transform: translateX(-50%) translateY(-1rem);`
    )}

    > div {
        position: relative;
        width: 8rem;
        height: 8rem;
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