import { useEffect, useState, FC, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { 
    ColorOption,
    ColorOptionContainer,
    DarkModeContainer,
    DisplayOptionsContainer,
    SideNavContainer,
    Overlay,
    MenuButton,
    MobileMenuContainer,
    NavLink,
    NavLinkContainer,
    SocialsContainer,
    ToggleButton,
    ToggleThumb
    } from "./MobileMenuSection.styles";

import { ReactComponent as MenuIcon } from "src/assets/svgs/MenuIcon.svg";
import { ReactComponent as CloseIcon } from "src/assets/svgs/CloseIcon.svg";
import { ReactComponent as GitHubFilled } from "src/assets/svgs/GitHubFilled.svg";
import { ReactComponent as LinkedInFilled } from "src/assets/svgs/LinkedInFilled.svg";
import { ReactComponent as EnvelopeFilled } from "src/assets/svgs/EnvelopeFilled.svg";

type SideNavigationProps = {
    sectionRefs: {
        [key: string]: RefObject<HTMLElement>
    };
};

const MobileMenuSection: FC<SideNavigationProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("data-color-theme");

    if (savedTheme) {
      document.documentElement.setAttribute("data-color-theme", savedTheme);
      return savedTheme;
    }

    return "blue";
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");

    const savedMode = localStorage.getItem("data-theme");
    if (savedMode) {
      document.documentElement.setAttribute("data-theme", savedMode);
      return savedMode === "dark";
    }

    return prefersDark;
  });
  const [activeSection, setActiveSection] = useState('');

  type Theme = {
    name: string;
    value: string;
    gradient: string[];
  };
  
  const themes: Theme[] = [
      { name: "Blue", value: "blue", gradient: ["#e3f2fd", "#bbdefb", "#2962ff"]}, // 50, 100, accent
      { name: "Green", value: "green", gradient: ["#e8f5e9", "#c8e6c9", "#2e7d32"]},
      { name: "Orange", value: "orange", gradient: ["#fff3e0", "#ffe0b2", "#f57c00"]},
      { name: "Red", value: "red", gradient: ["#ffebee", "#ffcdd2", "#d50000"]},
      { name: "Purple", value: "purple", gradient: ["#f3e5f5", "#e1bee7", "#9c27b0"]},
  ];

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

  const sections = ["Home", "About", "Fun", "Works", "Experience", "Testimonials"];

  const toggleDark = () => {
    setIsDarkMode(prevMode => {
        const newMode = !prevMode;
        document.documentElement.setAttribute("data-theme", newMode ? "dark" : "light");
        localStorage.setItem("data-theme", newMode ? "dark" : "light");
        return newMode;
      });
    document.documentElement.classList.toggle("dark");
  }

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-color-theme", newTheme);
    localStorage.setItem("data-color-theme", newTheme);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }
    const socialsInfo = [
        { link: "https://github.com/nikitaszvan", icon: <GitHubFilled /> },
        { link: "https://www.linkedin.com/in/nikita-van-162b9417b", icon: <LinkedInFilled /> },
        { link: "https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Anikitaszvan%40gmail.com", icon: <EnvelopeFilled /> },
    ];

  return (
    <MobileMenuContainer>
        <MenuButton onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
      <Overlay $isOpen={isOpen}/>
      <SideNavContainer $isOpen={isOpen}>
        <NavLinkContainer>
          {sections.map((link, index) => 
              <NavLink 
              key={index} 
              to={`#${link}`} 
              $isActive={activeSection === link.toLowerCase()}
              onClick={() => {
                  scrollToSection(`${link.toLowerCase()}`);
                  toggleMenu();
              }}
              >
                {link} 
            </NavLink>
            )}
        </NavLinkContainer>
        <DisplayOptionsContainer>
            <DarkModeContainer>
                <label htmlFor="button">Dark Mode</label>
                <ToggleButton
                    aria-checked={isDarkMode}
                    data-state={isDarkMode ? 'checked' : 'unchecked'}
                    onClick={toggleDark}
                >
                    <ToggleThumb data-state={isDarkMode ? 'checked' : 'unchecked'} />
                </ToggleButton>
            </DarkModeContainer>
            <label htmlFor="theme-color">
                Theme Color
            </label>
            <ColorOptionContainer>
                {themes.map((t, index) => (
                    <ColorOption $gradient={t.gradient} key={index} onClick={() => changeTheme(t.value)} $isSelected={theme === t.value}/>
                ))}
            </ColorOptionContainer>
        </DisplayOptionsContainer>
        <SocialsContainer>
            {socialsInfo.map(({icon, link}, index) => 
                <Link 
                  key={index}
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </Link>
            )}
      </SocialsContainer>
      </SideNavContainer>
    </MobileMenuContainer>
  )
};

export default MobileMenuSection;
