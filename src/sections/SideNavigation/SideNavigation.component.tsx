import { useRef, useState, useEffect } from 'react';

import {
    NavLink,
    NavLinkContainer,
    SocialLink,
    SocialsContainer,
    StyledSideNavigation
    } from "./SideNavigation.styles";

import { ReactComponent as GitHubOutline } from "../../assets/svgs/GitHubOutline.svg";
import { ReactComponent as LinkedInOutline } from "../../assets/svgs/LinkedInOutline.svg";
import { ReactComponent as Envelope } from "../../assets/svgs/Envelope.svg";

type SideNavigationProps = {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>
  };
}

const SideNavigation: React.FC<SideNavigationProps> = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = ["Home", "About", "Fun", "Projects", "Experience", "Testimonials"];

  return (
    <StyledSideNavigation>
        <NavLinkContainer>
            {sections.map((link, index) => 
                <NavLink 
                  key={index} 
                  to={`#${link}`} 
                  isActive={activeSection === link.toLowerCase()}
                  activeIndex={sections.map(section => section.toLowerCase()).indexOf(activeSection)}
                  onClick={() => scrollToSection(`${link.toLowerCase()}`)}
                >
                  {link} 
                </NavLink>
            )}
          </NavLinkContainer>
            {/* <SocialsContainer>
            {[{icon: <GitHubOutline/>, link:"https://github.com"}, {icon: <LinkedInOutline/>, link:"https://linkedin.com"}, 
            {icon: <Envelope/>, link:"mailto:nikitaszvan@gmail.com"}]
            .map(({icon, link}, index) => 
                <SocialLink key={index} to={link}>{icon}</SocialLink>
            )}
            </SocialsContainer>
            <button onClick={toggleDarkMode}>Toggle mode</button> */}
     </StyledSideNavigation>
  )
}

export default SideNavigation;