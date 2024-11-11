import { useState, forwardRef } from "react";
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
            description: 
                {
                    role: "I led front-end development for a hackathon suite using React, creating a user-friendly interface for event updates, registration, and project submissions. I utilized Firebase for real-time data management and collaborated with a multidisciplinary team in an Agile environment, contributing to sprint planning and feature prioritization.", 
                    keyContributions: [
                        "Conducted a six-week development sprint under agile methodologies, contributing to sprint planning and feature prioritization",
                        "Collaborated with a multidisciplinary team of designers, developers, a team lead, and project manager to build a hackathon suite for a community platform aimed at tech enthusiasts",
                        "Led front-end development using React to create a user-centric, UI/UX-friendly interface supporting event updates, form validation for participant registration, and project submissions. Utilized Firebase for data handling and real-time functionality.",
                        "Presented the final product to company leadership and industry professionals, receiving positive feedback on its intuitive design and robust functionality.",
                        "Outcome: Project is set for integration into the community platform.",
                        "Spearheaded development of three core platform features, significantly enhancing user experience and engagement.",
                        "Built and optimized reusable UI components, improving feature delivery speed and code maintainability.",
                        "Created a hackathon organization feature that fosters community collaboration and engagement.",
                        "Successfully presented the product to company leadership, receiving recognition for its intuitive design and robust performance."
                    ], 
                    outcome: "The project is now set for integration into the community platform, positioning it as a central tool for tech enthusiasts."
                },
            image: makeItMVPLogo
        },
        {
            title: "Junior Frontend Developer",
            company: "Reev Tech Inc.",
            period: "Aug 2023 - Present",
            description: 
                {
                    role: "Maintained and enhanced a suite of web apps for test preparation, built with HTML, CSS, and vanilla JavaScript. I focused on aligning the web experience with the mobile app, ranked among the top 10 in Education & Learning. Responsibilities included code maintenance, feature development, debugging, and collaborating with the senior frontend and backend teams. Initiated UI improvements for a more cohesive cross-platform experience.", 
                    keyContributions: [
                        "User Engagement Improvement: Enhanced user engagement by 15%, with increased average session duration as a result of optimized UI/UX design and smoother functionality.",
                        "Cross-Device Consistency: Ensured seamless cross-platform consistency, improving transitions between mobile and web apps, leading to a more integrated experience for users.",
                        "Performance Optimization: Reduced page load time by 20%, providing a faster, smoother experience for users on various devices.",
                        "Effective Collaboration: Worked closely with cross-functional teams, including design, backend, and product, to deliver timely, cohesive updates that aligned with the overall project vision.",
                        "Proactive Innovation: Proposed and implemented several UI/UX enhancements, proactively identifying areas where the web app could better reflect the mobile app's top-rated design.",
                        "Technical Skill Growth: Strengthened skills in front-end debugging, performance optimization, and user-centric design to create efficient, reliable web applications."
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
                    role: "I was responsible for providing technical assistance and support for classroom technology and media equipment. My role involved troubleshooting various technical issues, ensuring seamless operation of equipment, and facilitating the scheduling and checkout process for media tools.", 
                    keyContributions: [
                        "Delivered on-site and remote troubleshooting support for classroom technology, resolving issues with media equipment and ensuring all devices were networked and ready for use by faculty.",
                        "Streamlined the technical setup process, reducing downtime during class sessions by ensuring that media equipment was easily operable and accessible.",
                        "Coordinated with faculty to address specific technical needs, providing timely resolutions to enhance the teaching experience.",
                        "Managed the scheduling and checkout process for media equipment, ensuring that faculty had the necessary resources for their lectures and presentations.",
                    ], 
                    outcome: "Enhanced classroom technology reliability and faculty satisfaction by proactively resolving issues and maintaining equipment, while improving media equipment usage efficiency through a streamlined scheduling and checkout process, ensuring faculty had the necessary tools for effective teaching."
                },
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
                        <img src={job.image} alt={`${job.company} logo`} />
                        <CardContent expandedJob={expandedJobs[i]}>
                            <CardHeader>
                                <TextHeaderContainer>
                                    <h3>{job.title}</h3>
                                    <p>{job.company}</p>
                                    <p>{job.period}</p>
                                </TextHeaderContainer>
                            </CardHeader>
                            <p>{job.description.role}</p>
                            <ContributionsContainer>
                                <p><strong>Key Contributions:</strong></p>
                                {(job.description.keyContributions).map((desc, index) =>
                                    (index <= 0 || expandedJobs[i]) && (
                                        <ContentDescription key={index} expandedJob={expandedJobs[i]}>
                                            <ChevronRight/>
                                            <p>
                                                {desc}
                                            </p>
                                        </ContentDescription>
                                    )
                                )}
                                {(!expandedJobs[i] && (job.description.keyContributions.length - 2) !== 0) && <p>{job.description.keyContributions.length - 2} more contribution{job.description.keyContributions.length - 2 >= 2 && 's' }...</p>}
                            </ContributionsContainer>
                            {expandedJobs[i] &&
                                <p><strong>Outcome: </strong>{job.description.outcome}</p>
                            }
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
                        </CardContent>
                    </JobHistoryCard>
                </JobHistoryItem>
              ))}
            </CardsContainer>
          </StyledExperienceSection>

  )
});

export default ExperienceSection;