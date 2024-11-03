import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavLinkProps {
    isActive: boolean;
}

export const StyledSideNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    width: fit-content;
    height: fit-content;
    position: sticky;
    top: 3rem;
    font-family: 'Montserrat';
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.3rem;
`
  
export const NavLink = styled(({ isActive, ...props }: NavLinkProps & React.ComponentProps<typeof Link>) => (
<Link {...props} />
))`

    width: fit-content;
    font-weight: ${(props) => props.isActive ? '600' : '400'};
    color: ${(props) => props.isActive ? 'var(--accent-color)' : 'rgba(113, 122, 122, 1)'};
    text-decoration: none;

    &:hover {
        color: var(--accent-color);
    }
`;



export const SocialsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    padding-top: 0.5rem;
`

export const SocialLink = styled(Link)`
    color: rgba(0, 0, 0, 0.6);

    &:hover {
        color: var(--accent-color);
    }

    > * {
        width: 2rem;
    }
`;