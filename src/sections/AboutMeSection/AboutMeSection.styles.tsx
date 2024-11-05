import styled from "styled-components";
import { ReactComponent as ChevronRight} from "../../assets/svgs/ChevronRight.svg";

export const StyledAboutMeSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    padding-top: 1rem;

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
        }
    }

`

export const TechStackContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border: 1px solid var(--border-color);
    padding: 1rem;
    border-radius: 0.5rem;

    &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

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
    }
`

export const TechStackHeader = styled.div<{ isExpanded: boolean }>`
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.8rem;
    ${(props => !props.isExpanded && 'border-bottom: 0.5px solid var(--border-color)')};


    > svg {
       height: 80%;
       aspect-ratio: 1/1;
    }

    > h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--black-muted);
        margin: 0;
        line-height: 1.75rem;
        margin-right: 1.3rem;

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
    transition: background-color 0.3s;
    outline: none;
    position: relative;
    height: 2.25rem;
    border-radius: 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border: none;
    cursor: pointer;
`

export const StyledChevronRight = styled(ChevronRight)<{rotateArrow: boolean}>`
    margin-left: 0.25rem;
    height: 0.6rem;
    width: 0.6rem;
    transition: transform 0.3s;
    fill: var(--accent-color);
    transform: ${(props => props.rotateArrow ? 'rotate(90deg)' : 'rotate(0deg)')};
`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    > span {
        color: var(--black-muted);
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 1rem;
        padding: 0.125rem 0.625rem;
        background-color: var(--base-color);
        border-radius: 9999px;
        align-items: center;
        display: inline-flex; 
    }
`;

export const ExpandButton = styled.button`
    width: 100%;
    color: var(--bg);
    font-size: 0.9rem;
    background-color: var(--accent-color);
    transition: color 0.3s;
    border: none;
    padding-block: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;

    > * {
        fill: var(--bg);
    }

    &:hover {
        color: var(--black);

        > * {
            fill: var(--black);
        }
    }
`

export const StyledChevronDown = styled(ChevronRight)<{rotateArrow: boolean}>`
    height: 0.7rem;
    width: 0.7rem;
    transform: ${(props => props.rotateArrow ? 'rotate(90deg)' : 'rotate(270deg)')};
    transition: transform 0.3s, fill 0.3s;
`