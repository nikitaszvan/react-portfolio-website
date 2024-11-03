import styled from "styled-components";
import { ReactComponent as ChevronDown } from "src/assets/svgs/ChevronDown.svg";

export const StyledExperienceSection = styled.section`
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    > span {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        > svg {
            height: 1.6rem;
            width: auto;
        }

        > h2 {
            font-size: 1.875rem;
            font-weight: 600;
            text-align: center;
            margin: 0;
        }
    }
`

export const CardsContainer = styled.div`
    position: relative;

    > div:last-of-type {
        padding-bottom: 0; 
    }
`

export const GradientOverlay = styled.div`
    position: absolute;
    inset: 0;
    filter: blur(64px);
    border-radius: calc(0.5rem + 12px);
    z-index: -10;
`

export const JobHistoryItem = styled.div`
    position: relative;
    padding-left: 0.75rem;
    padding-bottom: 0.75rem;
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
`

export const Circle = styled.div<{ translateDown: boolean }>`
    position: absolute;
    top: 0%;
    width: 0.75rem;
    height: 0.75rem;
    background-color: var(--accent-color);
    border-radius: 50%;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    ${(props => props.translateDown && `
        transform: translateY(-100%);
        top: 100%;    
    `)}
`

export const JobHistoryCard = styled.div`
    background-color: rgb(255 255 255 / 50%);
    backdrop-filter: blur(4px);
    padding: 1.5rem;
    border-radius: calc(0.5rem + 4px);
    border: 1px solid var(--border-color);
    margin-left: 1rem;

    &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 6rem;

    > img {
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        display: block;
        vertical-align: middle;
    }
`

export const TextHeaderContainer = styled.div`
    > * {
        margin: 0;
    }

    > h3 {
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: var(--accent-color);
    }

    > p {
        color: rgb(24 24 27);
        font-weight: 500;
        font-family: 'Montserrat';
    }

    > span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        margin-top: 0.3rem;

        > * {
            margin: 0;
            color: #4B5563;
        }

        > svg {
            height: 0.9rem;
            width: auto; 
        }

        > p {
            font-size: 0.875rem;
            line-height: 1.375;
            letter-spacing: 0.05em;
            font-family: 'Montserrat';
        }
    }
`

export const CardContent = styled.div<{expandedJob: boolean}>`
    position: relative;

    > p {
        color: rgb(113 113 122);
        line-height: 1.625;
        
        ${(props => !props.expandedJob && 
        `
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        `
        )}
    }

    > button {
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--accent-color);
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        padding: 0.5rem 0.7rem;
        border-radius: 0.5rem;
        gap: 0.25rem;
        align-items: center;
        display: flex;
        margin-top: 0.5rem;
        cursor: pointer;
        border: none;
        background-color: transparent;

        &:hover {
            background-color: var(--base-color)
        }
    }

`

export const StyledChevronDown = styled(ChevronDown)<{ rotateArrow: boolean }>`
    width: 1rem;
    height: 1rem;

    transform: ${(props => props.rotateArrow ? 'rotate(-180deg)' : 'rotate(0deg)' )};
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`