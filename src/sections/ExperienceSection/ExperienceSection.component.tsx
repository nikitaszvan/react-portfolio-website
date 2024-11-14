import { useState, forwardRef, useRef } from "react";
import { 
    CardContent,
    CardHeader,
    CardsContainer,
    Circle,
    ContentDescription,
    ContributionsContainer,
    ExpandButton,
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
import { ReactComponent as BriefcaseOutline } from "src/assets/svgs/BriefcaseOutline.svg";
import { ReactComponent as ArrowUpRight } from "../../assets/svgs/ArrowUpRight.svg";

const ExperienceSection = forwardRef((props, ref) => {
    const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({})
    const jobRefs = useRef<(HTMLDivElement | null)[]>([])

    const jobHistory = [
        {
            title: "Full Stack Developer",
            company: "makeitMVP",
            period: "Sept 2024 - Oct 2024",
            description: 
                {
                    role: <p>I was part of the full-stack development team for a <a href="#project-1">Hackathon <span>Suite<ArrowUpRight/></span></a> to integrate into a community tech platform, helping to create a user-friendly interface for event updates, registration, and project submissions. I leveraged Firebase for real-time data management and collaborated with a multidisciplinary team in an Agile environment, actively participating in sprint planning and feature prioritization.</p>, 
                    keyContributions: [
                        "Conducted a six-week development sprint under agile methodologies, contributing to sprint planning and feature prioritization.",
                        "Built a user-centric interface with React, implementing form validation for participant registration, project submissions, and real-time event updates using Firebase.",
                        "Developed and optimized reusable UI components, improving feature delivery and maintaining clean, maintainable code.",
                        "Presented the final product to company leadership, receiving positive feedback on its intuitive design and robust functionality."
                    ], 
                    outcome: "The project is set for integration into the community platform, enhancing engagement and collaboration for tech enthusiasts."
                },
            image: makeItMVPLogo
        },
        {
            title: "Junior Frontend Developer",
            company: "Reev Tech Inc.",
            period: "Aug 2023 - Present",
            description: 
                {
                    role: <p>Maintained the web version of the <a href="#project-2">Canadian Citizenship Test <span>2024<ArrowUpRight/></span></a>, built using HTML, CSS, and vanilla JavaScript. My primary focus was aligning the web experience with the mobile app, which ranks among the top 10 in the Education & Learning category. Responsibilities included code maintenance, feature development, debugging, and collaborating with senior front-end and back-end teams. I also initiated UI improvements to create a more seamless cross-platform experience.</p>, 
                    keyContributions: [
                        "Ensured seamless cross-platform consistency, enhancing the transition between the mobile and web apps, resulting in a more integrated user experience.",
                        "Collaborated with cross-functional teams, including design, backend, and product, to deliver timely updates that aligned with the overall project vision and goals.",
                        "Proposed and implemented several UI/UX improvements, proactively identifying opportunities to enhance usability and user engagement."
                    ], 
                    outcome: "Since the integration of these improvements, the web app's revenue share has seen a consistent increase, contributing to 10% of the project's annual revenue, with strong user retention and engagement metrics aligning closely with the mobile experience."
                },
            image: reevTechLogo
        },
        {
            title: "Junior Technical Support",
            company: "Toronto Metropolitan University",
            period: "Aug 2022 - Aug 2024",
            description: 
                {
                    role: <p>I provided technical assistance and support for classroom technology and AV equipment. My role included troubleshooting technical issues, ensuring the smooth operation of equipment, and managing the scheduling and checkout process for audiovisual resources.</p>, 
                    keyContributions: [
                        "Provided on-site and remote troubleshooting support for classroom technology, resolving media equipment issues. Minimized downtime and disruptions during class sessions by proactively ensuring all media equipment was network-connected, fully operational, and easily accessible.",
                        "Collaborated with faculty to address specific technical needs, delivering timely resolutions to enhance the teaching experience.",
                        "Managed the scheduling and checkout process for media equipment, ensuring that faculty had the necessary resources for their lectures and presentations.",
                    ], 
                    outcome: "Enhanced classroom technology reliability and faculty satisfaction by resolving issues and maintaining equipment."
                },
          image: TMULogo
        }
    ]

    const toggleJobDescription = (index: number) => {
    setExpandedJobs(prev => {
        const isExpanding = !prev[index];
        
        
        if (!isExpanding && jobRefs.current[index]) {
        jobRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start"});
        }

        return {
        ...prev,
        [index]: isExpanding
        };
    });
    }
    

  return (
    <StyledExperienceSection id="experience" ref={ref}>
            <span><BriefcaseOutline/><h2>My Experience</h2></span>
            <CardsContainer>
              {jobHistory.map((job, i) => (
                <JobHistoryItem key={i} ref={el => jobRefs.current[i] = el}>
                    <VerticalLine>
                        <Circle 
                            translateDown={expandedJobs[i]}
                            onClick={() => toggleJobDescription(i)}
                        />
                    </VerticalLine>
                    <JobHistoryCard>
                        <img src={job.image} alt={`${job.company} logo`} />
                        <CardContent expandedJob={expandedJobs[i]}>
                            <CardHeader>
                                <img src={job.image} alt={`${job.company} logo`} />
                                <TextHeaderContainer>
                                    <h3>{job.title}</h3>
                                    <p>{job.company}</p>
                                    <p>{job.period}</p>
                                </TextHeaderContainer>
                            </CardHeader>
                            {job.description.role}
                            <ContributionsContainer>
                                <p><strong>Key Contributions:</strong></p>
                                {(job.description.keyContributions).map((desc, index) =>
                                    (index <= 0 || expandedJobs[i]) && (
                                        <ContentDescription key={index} expandedJob={expandedJobs[i]}>
                                            <ChevronRight/>
                                            <p>
                                                {desc}{!expandedJobs[i] && '..'}
                                            </p>
                                        </ContentDescription>
                                    )
                                )}
                                {(!expandedJobs[i] && (job.description.keyContributions.length - 2) !== 0) && <p onClick={() => toggleJobDescription(i)}>{job.description.keyContributions.length - 1} more contribution{job.description.keyContributions.length - 1 >= 2 && 's' }...</p>}
                            </ContributionsContainer>
                            {expandedJobs[i] &&
                                <p><strong>Outcome: </strong>{job.description.outcome}</p>
                            }
                            { expandedJobs[i] &&
                                <ExpandButton
                                    onClick={() => toggleJobDescription(i)}
                                    aria-expanded={expandedJobs[i]}
                                    aria-controls={`job-description-${i}`}
                                >
                                    Collapse
                                    <StyledChevronDown rotateArrow/>
                               
                                </ExpandButton> 
                            }
                        </CardContent>
                    </JobHistoryCard>
                </JobHistoryItem>
              ))}
            </CardsContainer>
          </StyledExperienceSection>

  )
});

export default ExperienceSection;