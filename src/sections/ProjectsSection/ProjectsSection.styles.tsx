import styled from "styled-components";

export const StyledProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 1rem;

    @media (max-width: 1023px) {
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

export const CardContainer = styled.div`
    display: grid;
    gap: 1.5rem; 
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
`

export const ProjectCard = styled.div`
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: var(--border-width) solid var(--border-color);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    > img {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem; 
        object-fit: cover;
        width: 100%;
        height: 12rem;
        margin-bottom: 1.5rem;
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
        font-size: 1rem;
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
    gap: 1rem;
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

    > button {
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

        &:nth-of-type(1):hover {
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
    }

    > button:nth-of-type(2), > button:nth-of-type(3) {
        background-color: var(--bg);
        border: 1px solid var(--border-color); 

        &:hover {
            background-color: var(--border-color);
        }
    }

    > button:nth-of-type(2) {
        gap: 0.5rem;

        &:after {
            content: "Live Demo";
            color: var(--black-muted);

            @media (max-width: 641px) {
                content: "Demo"
            }
        } 
    } 

    > button:nth-of-type(3) {
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
