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
        {label: "Firebase Auth SDK", link: "https://firebase.google.com/docs/auth"},
        {label: "Tailwind CSS", link: "https://tailwindcss.com"},
        {label: "Material-UI", link: "https://mui.com/material-ui"},
        {label: "shadcn/ui", link: "https://ui.shadcn.com"},
        {label: "styled-components", link: "https://styled-components.com"}],
      description: 
        <>
            <p>I create fast, scalable web apps with <strong>JavaScript</strong> and <strong>TypeScript</strong>, using <strong>React</strong> and <strong>Next.js</strong> to deliver smooth, responsive experiences. I build for performance, choosing the best rendering approach—client-side, server-side, or static— I consider what is best for SEO and keep load times quick. I use <strong>Axios</strong> to simplify the process of sending requests, handling responses, and managing errors, providing a clean and consistent approach to interacting with RESTful APIs. I use the <strong>Firebase Auth SDK</strong> to implement secure authentication, particularly for smaller user bases, providing a reliable and streamlined authentication process without the need for extensive backend infrastructure.</p>
            <p>When it comes to styling, I mostly implement <strong>styled-components</strong> to keep my code modular and maintainable, but <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong> are my go-tos for quick prototypes. I focus on accessibility and a consistent look, using <strong>Material-UI</strong> and <strong>shadcn/ui</strong> to ensure a polished, inclusive design.</p>
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
            <p>I use <strong>Node.js</strong> on the backend to connect with the frontend, taking advantage of its async, event-driven setup to handle multiple requests efficiently. For building APIs and handling server routes, I rely on <strong>Express</strong>, which makes it easy to define routes, manage requests, and organize middleware.</p>
        </>
    },
    {
        name: "State Management",
        icon: <Network />,
        technologies: [
            {label: "Redux", link: "https://redux.js.org"},
            {label: "Context API", link: "https://react.dev/reference/react/useContext"},
            {label: "React Hook Form", link: "https://react-hook-form.com"},
        ],
        description:
            <>
                <p>I use <strong>Redux</strong> for managing state in complex applications, ensuring consistent state updates and smooth data flow. For simpler cases, I turn to the <strong>Context API</strong>, which is a lightweight way to handle global state without adding extra libraries, helping to boost performance and reduce unnecessary code. I also rely on <strong>React Hook Form</strong> to simplify form handling, efficiently managing edge cases, saving form data values, and ensuring smooth validation and user interactions.</p>
            </>
    },
    {
      name: "Database Management",
      icon: <CylindricalStack />,
      technologies: [
        {label: "PostgreSQL", link: "https://www.postgresql.org"},
        {label: "Firestore Database", link: "https://cloud.google.com/firestore/docs"},
      ],
      description:
        <>
            <p>I use <strong>PostgreSQL</strong> for designing and optimizing relational database schemas, for reliable data storage, and efficient querying. With <strong>Firestore Database</strong>, I create scalable applications that sync data across all users, even in low-latency environments.</p>
        </>
    }
  ]

  


  return (
        <StyledAboutMeSection id="about" ref={ref}>
            <span><LightingOutline/><h2>Development Skills</h2></span>
            {techStacks.map((stack, index) => (
                <TechStackContainer key={index}>
                    <TechStackHeader $isExpanded={expandedStack === index} onClick={() => setExpandedStack(expandedStack === index ? null : index)}>
                        <h3>{stack.name}</h3>
                        <TechStackIcon $isExpanded={expandedStack === index}>
                            {stack.icon}
                        </TechStackIcon>  
                        <ToggleDetailsButton>
                            <StyledChevronRight $isExpanded={expandedStack === index}/>
                        </ToggleDetailsButton>
                    </TechStackHeader>
                    {expandedStack === index && (
                    <StackDescription>
                        {stack.description}
                    </StackDescription>
                    )}
                    <TagsContainer $isHovered={hoveredStack === index}>
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