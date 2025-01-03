import styled from "styled-components";

export const StyledWorksSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 1rem;

    @media (max-width: 1144px) {
        gap: 1rem;
    }

    > span {
        display: flex;
        gap: 0.7rem;
        align-items: center;
        margin-block: 0.3rem;

        > svg {
            height: 1.6rem;
            width: auto;
            fill: var(--accent-color);;
        }

        > h2 {
            font-weight: 600;
            text-align: center;
            font-size: 1.875rem;
            margin: 0;
            color: var(--black-muted);

            @media (max-width: 767px) {
                font-size: 1.5rem;
            }
        }
    }
`

export const ProjectCard = styled.div`
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 2px solid var(--border-color);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

export const ImageContainer = styled.div<{$imagePosition: string}>`
    width: 100%;
    height: 20rem;
    margin-bottom: 1rem;
    background-color: white;
    position: relative;
    overflow: hidden;

    > img {
        object-fit: cover;
        ${({$imagePosition}) => $imagePosition && `object-position: ${$imagePosition}`};
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transition-property: opacity, scale, filter;

        &:hover {
            scale: 1.1;
            opacity: 0.8;
        }
    }

    > button {
        position: absolute;
        bottom: 0;
        right: 0;
        border: none;
        background-color: transparent;
        padding: 0.75rem;
        cursor: pointer;

        &:hover > svg {
            scale: 1.2;
        }

        svg {
            fill: var(--accent-color);
            width: 1.1rem;
            height: 1.1rem; 
            transition: scale 0.3s ease;
        }
    }
`

export const CardHeader = styled.div`

    > * {
        margin: 0;
    }

    > h1 {
        color: var(--accent-color);
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    > p {
        color: var(--black-muted-softer);
        font-size: 0.94rem;
        line-height: 1.25rem; 
        margin-bottom: 1.5rem;
        font-weight: 350;

        @media (max-width: 767px) {
            font-size: 1rem;
        }
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
`

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    > span {
        color: var(--black-muted);
        font-weight: 450;
        font-size: 0.8rem;
        line-height: 1rem;
        padding: 0.2rem 0.8rem;
        background-color: var(--base-color);
        border-radius: 9999px;
        align-items: center;
        display: inline-flex; 
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    > button, > a {
        color: var(--bg);
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding-inline: 0.75rem;
        background-color: var(--accent-color);
        white-space: nowrap;
        border-radius: calc(0.5rem - 2px);
        justify-content: center;
        align-items: center;
        height: 2.25rem;
        display: inline-flex;
        cursor: pointer;
        border: none;
    }

    > button:nth-of-type(1):hover {
        color: var(--accent-color);
        background-color: var(--bg);
        border: 0.1rem solid var(--accent-color);
        padding-inline: 0.655rem;
    }

    > a {
        text-decoration: none; 
        color: var(--black-muted);
        display: flex;
        align-items: center;
        gap: 0.5rem;

        > svg {
            width: 1rem;
            height: 1rem; 
            fill: none;
            stroke: var(--black-muted);
        }
    }

    > a:nth-of-type(1), > a:nth-of-type(2) {
        background-color: var(--bg);
        border: 1px solid var(--border-color-stays); 

        &:hover {
            background-color: var(--border-color-stays);
        }
    }

    > a:nth-of-type(1) {
        gap: 0.5rem;

        &:after {
            content: "Live";
            color: var(--black-muted);
        } 
    } 

    > a:nth-of-type(2) {
        gap: 0.5rem;

        @media (max-width: 641px) {
            gap: 0;
        }
        
        &:after {
            content: "Github";
            color: var(--black-muted);

            @media (max-width: 641px) {
                content: ""
            }
        } 
    } 
`
