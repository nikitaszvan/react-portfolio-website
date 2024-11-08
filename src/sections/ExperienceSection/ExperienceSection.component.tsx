import { useState, forwardRef } from "react";
import { 
    CardContent,
    CardHeader,
    CardsContainer,
    Circle,
    ContentDescription,
    ExpandButton,
    GradientOverlay,
    JobHistoryCard,
    JobHistoryItem,
    StyledChevronDown,
    StyledExperienceSection,
    TextHeaderContainer,
    VerticalLine
    } from "./ExperienceSection.styles";

import { ReactComponent as ChevronRight } from "src/assets/svgs/ChevronRight.svg";
import makeItMVPLogo from "src/assets/images/makeitMVPLogo.png";
import reevTechLogo from "src/assets/images/reevtechlogo.png";
import TMULogo from "src/assets/images/TMULogo.png";
import { ReactComponent as LocationPin } from "src/assets/svgs/LocationPin.svg";
import { ReactComponent as CalendarOutline } from "src/assets/svgs/CalendarOutline.svg";
import { ReactComponent as BriefcaseOutline } from "src/assets/svgs/BriefcaseOutline.svg";

const ExperienceSection = forwardRef((props, ref) => {
    const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({})

    const jobHistory = [
        {
          title: "Full Stack Developer",
          company: "makeitMVP",
          period: "Sept 2024 - Oct 2024",
          description: [
            "Conducted a six-week development sprint under agile methodologies, contributing to sprint planning and feature prioritization",
            "Collaborated with a multidisciplinary team of designers, developers, a team lead, and project manager to build a hackathon suite for a community platform aimed at tech enthusiasts",
            "Led front-end development using React to create a user-centric, UI/UX-friendly interface supporting event updates, form validation for participant registration, and project submissions. Utilized Firebase for data handling and real-time functionality.",
            "Presented the final product to company leadership and industry professionals, receiving positive feedback on its intuitive design and robust functionality.",
            "Outcome: Project is set for integration into the community platform."
            ],
          image: makeItMVPLogo
        },
        {
          title: "Junior Frontend Developer",
          company: "Reev Tech Inc.",
          period: "Aug 2023 - Present",
          description: [
            "Developed and maintained multiple client websites using a variety of technologies including JavaScript, PHP, and MySQL. Implemented responsive designs and improved site performance, resulting in a 40% increase in page load speed. Worked closely with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience across all devices.",
            ],
          image: reevTechLogo
        },
        {
          title: "Junior Technical Support",
          company: "Toronto Metropolitan University",
          period: "Aug 2022 - Aug 2024",
          description: [
            "Performed in-depth system troubleshooting and verification to ensure stability and high performance, facilitating seamless functionality and reliability for university faculty and staff.",
            "Conducted on-call diagnostics and maintenance for Crestron™ AV control systems and network-integrated classroom podiums.",
            "Provided advanced desktop and application support for Windows and macOS environments, executing timely issue resolution to optimize end-user productivity."
            ],
          image: TMULogo
        }
    ]

    const toggleJobDescription = (index: number) => {
        setExpandedJobs(prev => ({
          ...prev,
          [index]: !prev[index]
        }))
      }
    

  return (
    <StyledExperienceSection id="experience" ref={ref}>
            <span><BriefcaseOutline/><h2>My Experience</h2></span>
            <CardsContainer>
              {jobHistory.map((job, i) => (
                <JobHistoryItem key={i}>
                    <VerticalLine>
                        <Circle 
                            translateDown={expandedJobs[i]}
                            onClick={() => toggleJobDescription(i)}
                        />
                    </VerticalLine>
                    <JobHistoryCard>
                        <CardHeader>
                            <img src={job.image} alt={`${job.company} logo`} />
                            <TextHeaderContainer>
                                <h3>{job.title}</h3>
                                <p>{job.company}</p>
                                <p>{job.period}</p>
                            </TextHeaderContainer>
                        </CardHeader>
                        <CardContent expandedJob={expandedJobs[i]}>
                            {(job.description).map((desc, index) => 
                                <ContentDescription key={index} expandedJob={expandedJobs[i]}>
                                    <ChevronRight/>
                                    <p>
                                        {desc}
                                    </p>
                                </ContentDescription>
                            )}
                            <GradientOverlay expandedJob={expandedJobs[i]}/>
                        </CardContent>
                        <ExpandButton
                            onClick={() => toggleJobDescription(i)}
                            aria-expanded={expandedJobs[i]}
                            aria-controls={`job-description-${i}`}
                        >
                        {expandedJobs[i] ? (
                            <>
                                Show less
                                <StyledChevronDown rotateArrow/>
                            </>
                        ) : (
                            <>
                                Show more
                                <StyledChevronDown />
                            </>    
                            )}
                        </ExpandButton>
                    </JobHistoryCard>
                </JobHistoryItem>
              ))}
            </CardsContainer>
          </StyledExperienceSection>

  )
});

export default ExperienceSection;