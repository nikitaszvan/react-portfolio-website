import { useRef, useState, useEffect } from 'react';

import {
    NavLink,
    NavLinkContainer,
    SocialLink,
    SocialsContainer,
    StyledSideNavigation
    } from "./SideNavigation.styles";

import { ReactComponent as GithubIcon } from "../../assets/svgs/GitHub.svg";
import { ReactComponent as LinkedIn } from "../../assets/svgs/LinkedIn.svg";
import { ReactComponent as Envelope } from "../../assets/svgs/Envelope.svg";

type SideNavigationProps = {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>
  };
}

const SideNavigation: React.FC<SideNavigationProps> = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

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

  return (
    <StyledSideNavigation>
        <NavLinkContainer>
            {["Home", "About", "Fun", "Projects", "Experience", "Testimonials"].map((link, index) => 
                <NavLink 
                  key={index} 
                  to={`#${link}`} 
                  isActive={activeSection === link.toLowerCase()}
                  onClick={() => scrollToSection(`${link.toLowerCase()}`)}
                >
                  {link} 
                </NavLink>
            )}
          </NavLinkContainer>
            <SocialsContainer>
            {[{icon: <GithubIcon/>, link:"https://github.com"}, {icon: <LinkedIn/>, link:"https://linkedin.com"}, 
            {icon: <Envelope/>, link:"mailto:nikitaszvan@gmail.com"}]
            .map(({icon, link}, index) => 
                <SocialLink key={index} to={link}>{icon}</SocialLink>      
            )}
            </SocialsContainer>
            <button onClick={toggleDarkMode}>Toggle mode</button>
     </StyledSideNavigation>
  )
}

export default SideNavigation;