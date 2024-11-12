import { useState, forwardRef, SVGProps, ReactNode } from 'react';
import { 
    StackDescription,
    StyledAboutMeSection,
    StyledChevronRight,
    StyledLink,
    TagsContainer,
    TechStackContainer,
    TechStackHeader,
    TechStackIcon,
    ToggleDetailsButton
} from './AboutMeSection.styles';

import { ReactComponent as Fragment } from "../../assets/svgs/Fragment.svg";
import { ReactComponent as Cloud } from "../../assets/svgs/Cloud.svg";
import { ReactComponent as CylindricalStack } from "../../assets/svgs/CylindricalStack.svg";
import { ReactComponent as Network } from "../../assets/svgs/Network.svg";
import { ReactComponent as LightingOutline } from "../../assets/svgs/LightingOutline.svg";
import { ReactComponent as ArrowUpRight } from "../../assets/svgs/ArrowUpRight.svg";

type TechStack = {
  name: string;
  icon: SVGProps<SVGSVGElement>,
  technologies: {label: string, link: string}[];
  description: ReactNode;
}

const AboutMeSection = forwardRef((props, ref) => {
  const [expandedStack, setExpandedStack] = useState<number | null>(null);
  const [hoveredStack, setHoveredStack] = useState<number | null>(null);

  const techStacks: TechStack[] = [
    {
      name: "Frontend Development",
      icon: <Fragment />,
      technologies: [
        {label: "Javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
        {label: "Axios", link: "https://axios-http.com"},
        {label: "TypeScript", link: "https://www.typescriptlang.org"},
        {label: "React", link: "https://react.dev"},
        {label: "Next.js", link: "https://nextjs.org"},
        {label: "Firebase Auth", link: "https://firebase.google.com/docs/auth"},
        {label: "Tailwind", link: "https://tailwindcss.com"},
        {label: "Material-UI", link: "https://mui.com/material-ui"},
        {label: "shadcn/ui", link: "https://ui.shadcn.com"},
        {label: "styled-components", link: "https://styled-components.com"}],
      description: 
        <>
            I use <strong>JavaScript</strong> and <strong>TypeScript</strong> to develop reliable, readable application logic with strong typing. With <strong>React</strong> and <strong>Next.js</strong>, I build scalable applications that focus on performance and user experience, applying either client-side or server-side rendering, as well as static site generation, to enhance SEO and load times. I integrate <strong>Axios</strong> for efficient and reliable HTTP requests, ensuring smooth communication with APIs and server endpoints. Additionally, I use <strong>styled-components</strong> for modular, maintainable styling directly within components. I occasionally leverage <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong> for rapid prototyping and mobile-friendly layouts, alongside <strong>Material-UI</strong> and <strong>shadcn/ui</strong> to provide accessible, visually consistent designs.
        </>
    },
    {
      name: "Backend Development",
      icon: <Cloud />,
      technologies: [
        {label: "Nodejs", link: "https://nodejs.org"},
        {label: "Express", link: "https://expressjs.com"},
      ],
      description: 
        <>
            I leverage <strong>Node.js</strong> as the backend technology to build scalable server-side applications, while <strong>Express</strong> is the framework I use to expose routes and handle HTTP requests
        </>
    },
    {
        name: "State Management",
        icon: <Network />,
        technologies: [
            {label: "Redux", link: "https://redux.js.org"},
            {label: "Context API", link: "https://react.dev/reference/react/useContext"},
            {label: "react-hook-form", link: "https://react-hook-form.com"},
        ],
        description:
            <>
                I utilize <strong>Redux</strong> for state management, ensuring consistent state changes and smooth data flow in complex applications. On the other hand, <strong>Context API</strong> offers a lightweight solution for managing global state without the need for additional libraries, enhancing performance and reducing boilerplate code. Additionally, I employ <strong>React Hook Form</strong> to streamline form handling, ensuring smooth user interactions and validation with minimal effort.
            </>
    },
    {
      name: "Database Management",
      icon: <CylindricalStack />,
      technologies: [
        {label: "PostgreSQL", link: "https://www.postgresql.org"},
        {label: "Firebase Realtime Database", link: "https://firebase.google.com/docs/database"},
        {label: "Firestore Cloud Database", link: "https://cloud.google.com/firestore/docs"},
      ],
      description:
        <>
            I use <strong>PostgreSQL</strong> for designing and optimizing relational database schemas, for reliable data storage, and efficient querying. With <strong>Firebase Realtime Database</strong>, I create scalable, real-time applications that sync data across all users, providing seamless experiences even in low-latency environments.
        </>
    }
  ]

  


  return (
        <StyledAboutMeSection id="about" ref={ref}>
            <span><LightingOutline/><h2>Development Skills</h2></span>
            {techStacks.map((stack, index) => (
                <TechStackContainer>
                    <TechStackHeader isExpanded={expandedStack === index} onClick={() => setExpandedStack(expandedStack === index ? null : index)}>
                        <h3>{stack.name}</h3>
                        <TechStackIcon isExpanded={expandedStack === index}>
                            {stack.icon}
                        </TechStackIcon>  
                        <ToggleDetailsButton>
                            <StyledChevronRight isExpanded={expandedStack === index}/>
                        </ToggleDetailsButton>
                    </TechStackHeader>
                    {expandedStack === index && (
                    <StackDescription>
                        {stack.description}
                    </StackDescription>
                    )}
                    <TagsContainer isHovered={hoveredStack === index}>
                        {stack.technologies.map((tech, techIndex) => (
                            <StyledLink 
                                to={tech.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                key={techIndex}
                                onMouseEnter={() => setHoveredStack(index)}
                                onMouseLeave={() => setHoveredStack(null)}
                            >
                                <span>{tech.label}</span>
                                <ArrowUpRight aria-hidden="true" />
                            </StyledLink>
                        ))}
                    </TagsContainer>
                    
                </TechStackContainer>
            ))}
        </StyledAboutMeSection>
    )
});

export default AboutMeSection;