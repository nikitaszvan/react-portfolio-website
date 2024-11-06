import { useState, forwardRef } from "react";
import { 
    CardContent,
    CardHeader,
    CardsContainer,
    Circle,
    ExpandButton,
    JobHistoryCard,
    JobHistoryItem,
    StyledChevronDown,
    StyledExperienceSection,
    TextHeaderContainer,
    VerticalLine
    } from "./ExperienceSection.styles";

import googleLogo from "src/assets/images/googleLogo.jpg";
import makeItMVP from "src/assets/images/makeItMVP.jpeg";
import TMULogo from "src/assets/images/TMULogo.jpg";
import { ReactComponent as LocationPin } from "src/assets/svgs/LocationPin.svg";
import { ReactComponent as CalendarOutline } from "src/assets/svgs/CalendarOutline.svg";
import { ReactComponent as BriefcaseOutline } from "src/assets/svgs/BriefcaseOutline.svg";

const ExperienceSection = forwardRef((props, ref) => {
    const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({})

    const jobHistory = [
        {
          title: "Senior Web Developer",
          company: "Tech Innovations Inc.",
          period: "Jan 2020 - Present",
          description: "Led development of cutting-edge web applications using React and Node.js. Mentored junior developers and implemented best practices in code reviews. Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget. Implemented CI/CD pipelines to streamline deployment processes and improve overall development efficiency.",
          image: googleLogo
        },
        {
          title: "Full Stack Developer",
          company: "Digital Solutions Ltd.",
          period: "Mar 2017 - Dec 2019",
          description: "Developed and maintained multiple client websites using a variety of technologies including JavaScript, PHP, and MySQL. Implemented responsive designs and improved site performance, resulting in a 40% increase in page load speed. Worked closely with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience across all devices.",
          image: makeItMVP
        },
        {
          title: "Junior Developer",
          company: "Startup Ventures",
          period: "Jun 2015 - Feb 2017",
          description: "Assisted in the development of a social media management platform using Ruby on Rails and PostgreSQL. Gained experience in agile methodologies and collaborative development practices. Participated in daily stand-ups and sprint planning sessions, contributing to the team's overall productivity and project success.",
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
                            <p>
                                {job.description}
                            </p>
                            {job.description.length > 100 && (
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
                            )}
                        </CardContent>
                    </JobHistoryCard>
                </JobHistoryItem>
              ))}
            </CardsContainer>
          </StyledExperienceSection>

  )
});

export default ExperienceSection;