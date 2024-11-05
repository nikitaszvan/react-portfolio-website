import { useState, useEffect, useRef } from "react";
import { ReactComponent as MoonOutline } from "src/assets/svgs/MoonOutline.svg";
import { ReactComponent as SunOutline } from "src/assets/svgs/SunOutline.svg";
import { ReactComponent as PaletteOutline } from "src/assets/svgs/PaletteOutline.svg";
import { ReactComponent as GitHubFilled } from "src/assets/svgs/GitHubFilled.svg";
import { ReactComponent as LinkedInFilled } from "src/assets/svgs/LinkedInFilled.svg";
import { ReactComponent as EnvelopeFilled } from "src/assets/svgs/EnvelopeFilled.svg";

import { 
    BlackCircle,
    DisplaySettingsContainer,
    DropdownMenu,
    GradientCircle,
    SocialLink,
    SocialsContainer,
    StyledThemeOption,
    ThemeButtonContainer
 } from "./DisplaySettingsSection.styles";

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

const DisplaySettingsSection = () => {
  const [theme, setTheme] = useState<string>("blue");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("data-theme");
    if (savedMode) {
      document.documentElement.setAttribute("data-theme", savedMode);
      return savedMode === "dark";
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  return prefersDark;
});

useEffect(() => {
    const savedTheme = localStorage.getItem("data-color-theme");
    const savedMode = localStorage.getItem("data-theme");
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-color-theme", savedTheme);
    }
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
      document.documentElement.setAttribute("data-theme", savedMode);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      document.documentElement.setAttribute("data-theme", newMode ? "dark" : "light");
      localStorage.setItem("data-theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-color-theme", newTheme);
    localStorage.setItem("data-color-theme", newTheme);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DisplaySettingsContainer>
      
      <ThemeButtonContainer ref={dropdownRef}>
      <button
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <SunOutline /> : <MoonOutline /> }
      </button>
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <PaletteOutline />
        </button>

        {isDropdownOpen && (
          <DropdownMenu>
            <ul>
                {themes.map((t) => (
                    <>
                    
                    <StyledThemeOption
                        key={t.value}
                        onClick={() => changeTheme(t.value)}
                        isBolded = {theme === t.value}
                    >   
                        <BlackCircle isSelected={theme === t.value} /> 
                        <GradientCircle gradient={t.gradient}/>
                        {t.name}
                    </StyledThemeOption>
                    </>
                ))}
            </ul>
          </DropdownMenu>
        )}
      </ThemeButtonContainer>
      <SocialsContainer>
        {[{icon: <GitHubFilled/>, link:"https://github.com"}, {icon: <LinkedInFilled/>, link:"https://linkedin.com"}, 
        {icon: <EnvelopeFilled/>, link:"mailto:nikitaszvan@gmail.com"}]
        .map(({icon, link}, index) => 
            <SocialLink key={index} to={link}>{icon}</SocialLink>
        )}
      </SocialsContainer>
    </DisplaySettingsContainer>
  );
};

export default DisplaySettingsSection;
