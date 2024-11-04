import styled from "styled-components";

export const DisplaySettingsContainer = styled.div`
    position: sticky;
    top: 3rem;
    height: 100%;
    display: flex;
    gap: 0.5rem;

    > button {
        padding: 0.7rem;
        border-radius: 50%;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        cursor: pointer;
        height: fit-content;

        &:hover {
            background-color: var(--base-color);
        }

        > svg {
            width: 1.6rem;
            height: 1.6rem;
            stroke: var(--accent-color);
            fill: none;
        }
    }
`

export const ThemeButtonContainer = styled.div`
    position: relative;

    > button {
        padding: 0.7rem;
        border-radius: 50%;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        cursor: pointer;

        &:hover {
            background-color: var(--base-color);
        }

        > svg {
            width: 1.6rem;
            height: 1.6rem;
            fill: none;
            stroke: var(--accent-color);
        }
    }

`

export const DropdownMenu = styled.div`
    position: absolute;
    right: 0;
    margin-top: 0.5rem;
    background-color: var(--bg);
    border-radius: calc(0.5rem - 2px);
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    z-index: 10;

    > ul {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    } 
`

export const StyledThemeOption = styled.li<{ isBolded: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    ${(props => props.isBolded && 'font-weight: 700;')}
    
    &:hover {
        background-color: var(--base-color);
    }
`

export const BlackCircle = styled.div<{ isSelected: boolean }>`
    width: 0.4rem;
    height: 0.4rem;
    background-color: ${(props => props.isSelected ? 'var(--black)' : 'transparent')};
    border-radius: 50%;
`

export const GradientCircle = styled.div<{gradient: string[]}>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    ${(props => props.gradient &&
    `background: linear-gradient(to bottom right, ${(props.gradient[0])} 0%, ${props.gradient[1]} 15%, ${props.gradient[2]} 60%)`)};
    
`