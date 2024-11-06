import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const jumpShaking = keyframes`
    0% { transform: translateX(0) }
    25% { transform: translateY(-5px) }
    35% { transform: translateY(-5px) rotate(17deg) }
    55% { transform: translateY(-5px) rotate(-17deg) }
    65% { transform: translateY(-5px) rotate(17deg) }
    75% { transform: translateY(-5px) rotate(-17deg) }
    100% { transform: translateY(0) rotate(0) }
`;

export const DisplaySettingsContainer = styled.div`
    display: none;

    @media (min-width: 1024px) {
        position: sticky;
        top: 3rem;
        height: calc(100vh - 6rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        align-items: flex-end;
}
`

export const ThemeButtonContainer = styled.div`
    position: relative;
    display: flex;

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
    right: 0.5rem;
    top: 2.5rem;
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

export const SocialsContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 0.5rem;
    padding-inline: 0.6rem;

`

export const SocialLink = styled(Link)`
    align-self: flex-end;

    > * {
        width: 1.6rem;
        height: auto;
        fill: var(--black-muted-softer);

        &:hover {
            animation: ${jumpShaking} 1.2s forwards;
        }
    }
`;