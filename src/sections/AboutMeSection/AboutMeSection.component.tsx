import { useState, forwardRef, SVGProps } from 'react';
import { 
    ExpandButton,
    StyledAboutMeSection,
    StyledChevronRight,
    StyledChevronDown,
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

type TechStack = {
  name: string;
  icon: SVGProps<SVGSVGElement>,
  technologies: string[];
  description: string;
}

const AboutMeSection = forwardRef((props, ref) => {
  const [showMore, setShowMore] = useState(false)
  const [expandedStack, setExpandedStack] = useState<number | null>(null)

  const moreInfo = "When I'm not exploring new technologies, you can find me contributing to open-source projects or mentoring aspiring developers. I'm passionate about creating efficient, scalable, and user-friendly applications."

  const techStacks: TechStack[] = [
    {
      name: "Frontend Development",
      icon: <Fragment />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "Specializing in creating responsive and interactive user interfaces with a focus on performance and accessibility."
    },
    {
      name: "Backend Development",
      icon: <Cloud />,
      technologies: ["Node.js", "Express", "Python", "Django"],
      description: "Building robust server-side applications and RESTful APIs to power modern web applications."
    },
    {
        name: "State Management",
        icon: <Network />,
        technologies: ["Node.js", "Express", "Python", "Django"],
        description: "Building robust server-side applications and RESTful APIs to power modern web applications."
    },
    {
      name: "Database Management",
      icon: <CylindricalStack />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      description: "Designing and optimizing database schemas for efficient data storage and retrieval in various application contexts."
    }
  ]


  return (
        <StyledAboutMeSection id="about" ref={ref}>
            <span><LightingOutline/><h2>Development Skills</h2></span>
            {techStacks.map((stack, index) => (
                <TechStackContainer>
                    <TechStackHeader isExpanded={expandedStack === index}>
                        <h3>{stack.name}</h3>
                        <TechStackIcon>
                            {stack.icon}
                        </TechStackIcon>  
                        <ToggleDetailsButton
                            onClick={() => setExpandedStack(expandedStack === index ? null : index)}
                        >
                            <StyledChevronRight rotateArrow={expandedStack === index ? true : false}/>
                        </ToggleDetailsButton>
                    </TechStackHeader>
                    {expandedStack === index && (
                    <p id={`stack-content-${index}`} className="mt-3 text-sm text-gray-600">
                        {stack.description}
                    </p>
                    )}
                    <TagsContainer>
                        {stack.technologies.map((tech, techIndex) => (
                            <span key={techIndex}>
                            {tech}
                            </span>
                        ))}
                    </TagsContainer>
                    
                </TechStackContainer>
            ))}
            <ExpandButton
                onClick={() => setShowMore(!showMore)}
            >
                <StyledChevronDown rotateArrow={!showMore}/>
                {showMore ? 'Show Less' : 'Show More'}
            </ExpandButton>
            {showMore && (
            <p className="mt-4 text-gray-600">{moreInfo}</p>
            )}

        </StyledAboutMeSection>
    )
});

export default AboutMeSection;