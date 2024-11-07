import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GradientCircle } from "../DisplaySettingsSection/DisplaySettingsSection.styles";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    'data-state'?: string;
}

export const MobileMenuContainer = styled.div`
    position: relative;
    z-index: 100;

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const MenuButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--accent-color);
    z-index: 150;

    > svg {
        width: 2.2rem;
        height: 2.2rem;
    }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ isOpen }) => (isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 50;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};  /* Make sure it's not blocking interactions when hidden */
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};  /* Smooth transition */
`;

export const SideNavContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 75%;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 100;
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const NavLink = styled(Link)<{ isActive: boolean }>`
    text-decoration: none;
    color: var(--black);
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: ${(props) => props.isActive ? '500' : '450'};
    color: ${(props) => props.isActive ? 'var(--accent-color)' : 'var(--black-muted)'};

    &:hover {
        color: var(--accent-color);
    }
`;

export const DisplayOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--black);

`

export const DarkModeContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ToggleButton = styled.button.attrs<CustomButtonProps>({
  type: 'button',
  role: 'switch',
  'aria-checked': 'false',
})`
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  width: 2.75rem;
  border-radius: 1.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: none;
  position: relative;

  &[data-state="checked"] {
    background-color: white;
  }

  &[data-state="unchecked"] {
    background-color: #e4e4e7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ToggleThumb = styled.span.attrs<CustomButtonProps>({})`
  display: block;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  transition: transform 0.2s;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &[data-state="checked"] {
    transform: translateX(100%);
    background-color: black;
  }

  &[data-state="unchecked"] {
    transform: translateX(0);
    background-color: white;
  }
`;

export const ColorOptionContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    width: 100%;
    height: 30%;
    align-items: center;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
`

export const ColorOption = styled(GradientCircle)<{ isSelected: boolean }>`
    cursor: pointer;
    width: 2rem;
    height: 2rem;

    ${(props => props.isSelected &&
        `outline: 2px solid var(--black);
        outline-offset: 2px;
    `)}
`

export const SocialsContainer = styled.div`
    margin-top: auto;
    display: flex;
    gap: 0.75rem;

    > a {
        > svg {
            width: 2rem;
            height: 2rem; 
            fill: var(--accent-color);
        }
    }
`
