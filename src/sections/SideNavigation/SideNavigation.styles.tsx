import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavLinkProps {
    isActive: boolean;
    activeIndex: number;
}

export const StyledSideNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    width: 11.7rem;
    height: calc(100vh - 6rem);
    position: sticky;
    top: 3rem;
    font-family: 'Montserrat';
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: calc(100vh - 8rem);
    margin-block: auto;
`
  
export const NavLink = styled(({ isActive, activeIndex, ...props }: NavLinkProps & React.ComponentProps<typeof Link>) => (
<Link {...props} />
))`

    width: fit-content;
    font-size: ${(props) => props.isActive ? '2rem' : '1.3rem'};
    font-weight: ${(props) => props.isActive ? '600' : '400'};
    color: ${(props) => props.isActive ? 'var(--accent-color)' : 'var(--black-muted)'};
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);


    ${(props) => props.isActive && 'margin-block: calc((100vh - 6rem) / 3)'};

    &:nth-of-type(5), &:nth-of-type(6) {
        font-size: ${(props) => props.isActive && '1.8rem'};
    }

    &:hover {
        color: var(--accent-color);
    }
`;



export const SocialsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    padding-top: 0.5rem;
    padding-inline: 0.6rem;

`

export const SocialLink = styled(Link)`
    fill: none;
    stroke: var(--gray-blue-nav);

    &:hover {
        stroke: var(--accent-color);
    }

    > * {
        width: 1.25rem;
        height: auto;
    }

    &:last-of-type {
        fill: var(--gray-blue-nav);
    }
`;