import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as ChevronRight} from "../../assets/svgs/ChevronRight.svg";

export const StyledAboutMeSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    padding-top: 1rem;

    @media (max-width: 1023px) {
        gap: 1rem;
    }

    > * {
        margin: 0;
    }

    > span {
        display: flex;
        justify-content: flex-start;
        gap: 0.7rem;

        > svg {
            height: 100%;
            color: var(--accent-color);
        }

        > h2 {
            color: var(--black-muted);
            font-weight: 600;
            text-align: center;
            font-size: 1.875rem;
            margin: 0;

            @media (max-width: 767px) {
                font-size: 1.5rem;
            }
        }
    }

`

export const TechStackContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    border: var(--border-width) solid var(--border-color);
    border-radius: 0.5rem;
    padding-bottom: 1.3rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    > p {
        display: inline-flex;
        margin: 0;
        margin-block: 0.4rem;
        margin-bottom: 0.8rem;
    }
`

export const TechStackIcon = styled.div`
    height: 90%;
    aspect-ratio: 1/1;
    background-color: transparent;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;

    > svg {
        width: 90%;
        color: var(--accent-color);
        
        @media (max-width: 767px) {
            display: none;
        }
    }
`

export const TechStackHeader = styled.div<{ isExpanded: boolean }>`
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.8rem 1.6rem;
    ${(props => !props.isExpanded && 'border-bottom: 0.5px solid var(--border-color)')};
    ${(props => props.isExpanded && 'background-color: var(--base-color);')};

    &:hover {
        background-color: var(--base-color);
    }


    > svg {
       height: 80%;
       aspect-ratio: 1/1;
    }

    > h3 {
        font-size: 1.3rem;
        font-weight: 500;
        color: var(--black-muted);
        margin: 0;
        line-height: 1.75rem;
        margin-right: 1.3rem;

        @media (max-width: 767px) {
            font-size: 1.2rem;
            font-weight: 550;
        }
        
        > span {
            color: var(--accent-color);
        }
    }

`

export const ToggleDetailsButton = styled.button`
    color: var(--accent-color);
    opacity: 0.9;
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: 500;
    outline: none;
    position: relative;
    height: 2.25rem;
    border-radius: 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border: none;
    cursor: pointer;
`

export const StyledChevronRight = styled(ChevronRight)<{isExpanded: boolean}>`
    margin-left: 0.25rem;
    height: 0.8rem;
    width: 0.8rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    fill: var(--accent-color);
    transform: ${(props => props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-inline: 1.3rem;
`;


export const StyledLink = styled(Link)`
    color: var(--black-muted);
    font-weight: 450;
    font-size: 0.9rem;
    line-height: 1rem;

    padding: 0.2rem 0.8rem;
    background-color: var(--base-color);
    border-radius: 9999px;
    align-items: center;
    display: inline-flex; 
    text-decoration: none;
    position: relative;

    &:hover {
        background-color: var(--accent-color);
        color: var(--bg);
        padding-right: 1.5rem;
    }

    &:hover > span {
        background-color: var(--accent-color);
    }

    &:hover > svg {
        transform: translateX(-54%);
        opacity: 1;
    }

    &:hover > span {
        margin-right: 0.2rem;
    }

    > span {
        transition: margin 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        background-color: var(--base-color);
        z-index: 10;
    }

    > svg {
        position: absolute;
        right: 0;
        width: 0.9rem;
        height: 0.9rem;
        transform: translateX(-100%);
        opacity: 0;
        transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        transition-property: transform, opacity;
    }
`

export const StackDescription = styled.p`
    font-size: 1rem;
    color: var(--black);
    display: inline !important;
    margin: 0;
    white-space: pre-wrap;
    line-height: 1.4rem;
    font-weight: 300;
    padding-inline: 1.3rem;

    @media (max-width: 767px) {
        font-size: 0.875rem;
    }

    > span {
        font-weight: 600;
        color: var(--black-muted);
    }
`