import styled from "styled-components";
import { ReactComponent as ChevronDown } from "src/assets/svgs/ChevronDown.svg";


export const StyledExperienceSection = styled.section`
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 1rem;

    @media (max-width: 1144px) {
        gap: 1rem;
    }

    > span {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        > svg {
            height: 2rem;
            width: auto;
            fill: var(--accent-color);
            cursor: pointer;
        }

        > h2 {
            font-size: 1.875rem;
            font-weight: 600;
            text-align: center;
            margin: 0;
            color: var(--black-muted);

            @media (max-width: 767px) {
                font-size: 1.5rem;
            }
        }
    }
`

export const CardsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    > div:last-of-type {
        padding-bottom: 0; 
    }
`

export const JobHistoryItem = styled.div`
    position: relative;
    padding-left: 0.75rem;
    padding-bottom: 0.75rem;

    @media (max-width: 1144px) {
        padding: 0;
    }
`

export const VerticalLine = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.125rem;
    background-color: var(--base-color);
    height: 80%;
    margin-block: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 1144px) {
        display: none;
    }
`

export const Circle = styled.div<{ translateDown: boolean }>`
    position: absolute;
    top: 0%;
    width: 0.75rem;
    height: 0.75rem;
    background-color: var(--accent-color);
    border-radius: 50%;
    transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, top;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 0.5rem;
        height: 0.5rem;
    }

    ${(props => props.translateDown && `
        transform: translateY(-100%);
        top: 100%;    
    `)}
`

export const JobHistoryCard = styled.div`
    display: flex;
    padding: 1.5rem;
    gap: 1rem;
    border-radius: calc(0.5rem + 4px);
    border: 2px solid var(--border-color);
    margin-left: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    @media (max-width: 1144px) {
        margin: 0;
    }


    > img {
        height: 6rem;
        width: 6rem;

        @media (max-width: 1144px) {
            height: 4rem;
            width: 4rem;
        }
        aspect-ratio: 1/1;
        object-fit: cover;
        display: block;
        vertical-align: middle;
        border-radius: 0.5rem;

        @media (max-width: 639px) {
            display: none;
        }
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 639px) {
        gap: 1rem;
    }

    > img {
        display: none;

        @media (max-width: 639px) {
            display: inline-flex;
            width: 4rem;
            height: auto;
        }
    }
`

export const TextHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    > * {
        margin: 0;
    }

    > h3 {
        font-weight: 600;
        font-size: 1.3rem;
        color: var(--accent-color);

        @media (max-width: 767px) {
            font-size: 1.125rem;
        }
    }

    > p:nth-of-type(1) {
        color: var(--black-muted);
        font-weight: 500;
        

        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }

    > p:nth-of-type(2) {
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: var(--gray-p);

            @media (max-width: 767px) {
                font-size: 0.875rem;
            }
        }
    }
`

export const CardContent = styled.div<{expandedJob: boolean}>`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 0.8rem;

    > p {
        color: var(--black-muted);
        line-height: 1.3;
        font-weight: 350;
        font-size: 1rem;
        margin: 0;
        flex: 1;

        > a {
            text-decoration: underline;
            color: var(--black-muted);
            font-weight: 450; 
            align-items: center;

            &:hover ~ svg {
                top: 0;
                left: 0.3rem;
            }
        }
        
        > svg {
            height: 1rem; 
            width: fit-content;
            position: relative;
            top: 2.5px;
            left: 0.1rem;
            transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            transition-property: top, left;
        }
    }
`

export const ContributionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    > p {
        color: var(--black-muted);
        line-height: 1.625;
        font-weight: 350;
        font-size: 1rem;
        margin: 0;
        flex: 1;
    }

    > p:nth-of-type(2) {
        color: var(--accent-color);
        font-size: 0.9rem;
        font-style: italic;
        cursor: pointer;
        margin-top: 0.3rem;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const ContentDescription = styled.div<{expandedJob: boolean}>`
    display: flex;

    > svg {
        width: 0.6rem;
        height: 0.6rem;
        fill: var(--accent-color);
        margin-right: 0.8rem;
        margin-top: 0.5rem;
    }

    > p {
        color: var(--black-muted);
        line-height: 1.3;
        font-weight: 350;
        font-size: 1rem;
        margin: 0;
        flex: 1;
    }
`

export const ExpandButton = styled.button`
    color: var(--accent-color);
    font-size: 0.95rem;
    line-height: 1.25rem;
    font-weight: 350;
    gap: 0.4rem;
    align-items: center;
    display: flex;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;

    @media (max-width: 767px) {
        font-size: 0.875rem;
    }

`

export const StyledChevronDown = styled(ChevronDown)<{ rotateArrow: boolean }>`
    width: 1.2rem;
    height: 1.2rem;

    @media (max-width: 767px) {
        width: 0.7rem;
        height: 0.7rem;
    }

    transform: ${(props => props.rotateArrow ? 'rotate(-180deg)' : 'rotate(0deg)' )};
`