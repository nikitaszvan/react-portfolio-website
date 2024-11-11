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

  const techStacks: TechStack[] = [
    {
      name: "Frontend Development",
      icon: <Fragment />,
      technologies: [
        {label: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
        {label: "TypeScript", link: "https://www.typescriptlang.org"},
        {label: "React", link: "https://react.dev"},
        {label: "Next.js", link: "https://nextjs.org"},
        {label: "Tailwind", link: "https://tailwindcss.com"},
        {label: "Bootstrap", link: "https://getbootstrap.com"},
        {label: "Material-UI", link: "https://mui.com/material-ui"},
        {label: "shadcn/ui", link: "https://ui.shadcn.com"},
        {label: "styled-components", link: "https://styled-components.com"}],
      description: 
        <>
            I use <span>JavaScript</span> and <span>TypeScript</span> to develop reliable, readable application logic with strong typing. With <span>React</span> and <span>Next.js</span>, I build scalable applications that focus on performance and user experience, applying either client-side or server-side rendering, as well as static site generation, to enhance SEO and load times. Additionally, I use <span>styled-components</span> for modular, maintainable styling directly within components. I occasionally leverage <span>Tailwind CSS</span> and <span>Bootstrap</span> for rapid prototyping and mobile-friendly layouts, alongside <span>Material-UI</span> and <span>shadcn/ui</span> to provide accessible, visually consistent designs.
        </>
    },
    {
      name: "Backend Development",
      icon: <Cloud />,
      technologies: [
        {label: "Nodejs", link: "https://nodejs.org"},
        {label: "Python", link: "https://www.python.org"},
      ],
      description: 
        <>
            I leverage <span>Node.js</span> to build robust server-side applications and RESTful APIs, ensuring high performance and scalability. With <span>Python</span>, I develop versatile solutions for data analysis and automation tasks. Together, these technologies enable me to create efficient, reliable backend systems that power modern web applications.
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
                I utilize <span>Redux</span> for state management, ensuring consistent state changes and smooth data flow in complex applications. On the other hand, <span>Context API</span> offers a lightweight solution for managing global state without the need for additional libraries, enhancing performance and reducing boilerplate code. Additionally, I employ <span>React Hook Form</span> to streamline form handling, ensuring smooth user interactions and validation with minimal effort.
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
            I use <span>PostgreSQL</span> for designing and optimizing relational database schemas, for reliable data storage, and efficient querying. With <span>Firebase Realtime Database</span>, I create scalable, real-time applications that sync data across all users, providing seamless experiences even in low-latency environments.
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
                    <TagsContainer>
                        {stack.technologies.map((tech, techIndex) => (
                            <StyledLink to={tech.link} target="_blank" rel="noopener noreferrer" key={techIndex}>
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