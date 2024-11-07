import { useEffect, useState } from 'react';
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
        [key: string]: React.RefObject<HTMLElement>
    };
};

const MobileMenuSection: React.FC<SideNavigationProps> = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("data-theme");
    if (savedMode) {
      document.documentElement.setAttribute("data-theme", savedMode);
      return savedMode === "dark";
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  return prefersDark;
});

  const [theme, setTheme] = useState(() => {
    const savedColor = localStorage.getItem("data-color-theme");
    if (savedColor) {
        document.documentElement.setAttribute("data-color-theme", savedColor);
        return savedColor;
    } 

    return "blue"
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

  const sections = ["Home", "About", "Fun", "Projects", "Experience", "Testimonials"];

  const toggleDark = () => {
    setIsDark(prevMode => {
        const newMode = !prevMode;
        document.documentElement.setAttribute("data-theme", newMode ? "dark" : "light");
        localStorage.setItem("data-theme", newMode ? "dark" : "light");
        return newMode;
      });
    document.documentElement.classList.toggle("dark");
    console.log(isDark);
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
        { link: "https://github.com", icon: <GitHubFilled /> },
        { link: "mailto:example@example.com", icon: <EnvelopeFilled /> },
        { link: "https://linkedin.com", icon: <LinkedInFilled /> },
    ];

  return (
    <MobileMenuContainer>
        <MenuButton onClick={toggleMenu} isOpen={isOpen}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuButton>
      <Overlay isOpen={isOpen}/>
      <SideNavContainer isOpen={isOpen}>
        <NavLinkContainer>
            {sections.map((link, index) => 
                <NavLink 
                key={index} 
                to={`#${link}`} 
                isActive={activeSection === link.toLowerCase()}
                activeIndex={sections.map(section => section.toLowerCase()).indexOf(activeSection)}
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
                    aria-checked={isDark}
                    data-state={isDark ? 'checked' : 'unchecked'}
                    onClick={toggleDark}
                >
                    <ToggleThumb data-state={isDark ? 'checked' : 'unchecked'} />
                </ToggleButton>
            </DarkModeContainer>
            <label htmlFor="theme-color">
                Theme Color
            </label>
            <ColorOptionContainer>
                {themes.map((t) => (
                    <ColorOption gradient={t.gradient} onClick={() => changeTheme(t.value)} isSelected={theme === t.value}/>
                ))}
            </ColorOptionContainer>
        </DisplayOptionsContainer>
        <SocialsContainer>
            {socialsInfo.map(({icon, link}, index) => 
                <Link key={index} to={link}>{icon}</Link>
            )}
      </SocialsContainer>
      </SideNavContainer>
    </MobileMenuContainer>
  )
};

export default MobileMenuSection;
