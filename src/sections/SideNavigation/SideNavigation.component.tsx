import { useState, useEffect } from 'react';

import {
    NavLink,
    NavLinkContainer,
    StyledSideNavigation
    } from "./SideNavigation.styles";

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
      rootMargin: '-20% 0px -80% 0px', 
      threshold: 0,
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
  

  const scrollToSection = (sectionId: string) => {
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
     </StyledSideNavigation>
  )
}

export default SideNavigation;