import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavLinkProps {
    $isActive: boolean;
}


export const StyledSideNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    width: 11.7rem;
    height: calc(100vh - 6rem);
    position: sticky;
    top: 3rem;
    

    @media (max-width: 1144px) {
        display: none;
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: calc(100vh - 6rem);
    margin-block: auto;
`
  
export const NavLink = styled(({ $isActive, ...props }: NavLinkProps & React.ComponentProps<typeof Link>) => (
<Link {...props} />
))`

    width: fit-content;
    font-size: ${({$isActive}) => $isActive ? '2rem' : '1.3rem'};
    font-weight: ${({$isActive}) => $isActive ? '600' : '400'};
    color: ${({$isActive}) => $isActive ? 'var(--accent-color)' : 'var(--black-muted-softer)'};
    text-decoration: none;
    transition: margin 0.4s cubic-bezier(0.4, 0, 0.2, 1);


    ${({$isActive}) => $isActive && 'margin-block: calc((100vh - 6rem) / 2.8)'};

    &:nth-of-type(5), &:nth-of-type(6) {
        font-size: ${({$isActive}) => $isActive && '1.8rem'};
    }

    &:hover {
        color: var(--accent-color);
    }
`;
