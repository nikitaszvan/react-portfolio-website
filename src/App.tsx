import { 
  AppContainer,
  MainContentContainer
 } from "./App.styles";
import SideNavigation from "./sections/SideNavigation/SideNavigation.component";
import HeroSection from "./sections/HeroSection/HeroSection.component";
import AboutMeSection from "./sections/AboutMeSection/AboutMeSection.component";
import FunAboutMeSection from "./sections/FunAboutMeSection/FunAboutMeSection.component";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection.components";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection.component";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection.components";
import DisplaySettingsSection from "./sections/DisplaySettingsSection/DisplaySettingsSection.component";
import { useRef } from "react";

function App() {
  const sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>
  } = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    fun: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
  };

  return (
    <AppContainer>
      <SideNavigation sectionRefs={sectionRefs} />
      <MainContentContainer>
        <HeroSection ref={sectionRefs.home} />
        <AboutMeSection ref={sectionRefs.about} />
        <FunAboutMeSection ref={sectionRefs.fun} />
        <ProjectsSection ref={sectionRefs.projects} />
        <ExperienceSection ref={sectionRefs.experience} />
        <TestimonialsSection ref={sectionRefs.testimonials} />
      </MainContentContainer>
      <DisplaySettingsSection />
    </AppContainer>
  );
}

export default App;
