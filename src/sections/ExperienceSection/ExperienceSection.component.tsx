import { 
  useState,
  forwardRef,
  useRef,
  useEffect,
  isValidElement,
  Fragment,
  ElementType 
  } from "react";

import parse from "html-react-parser";

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
import { ReactComponent as BriefcaseOutline } from "src/assets/svgs/BriefcaseOutline.svg";
import { ReactComponent as ArrowUpRight } from "../../assets/svgs/ArrowUpRight.svg";
import useContentful from "../../hooks/useContentful";

interface ProjectRoleProps {
  description: any;
}

const ProjectRole: React.FC<ProjectRoleProps> = ({ description }) => {
  if (!description) return null;

  const regex = /<([^<>]+?)\/>/g;
  const parts = description.split(regex);
  
  return (
    <p>
      {parts.map((part, index) => {
        if (part === 'ArrowUpRight') {
          return <ArrowUpRight key={index}/>;
        }
        return <Fragment key={index}>{parse(part)}</Fragment>;
      })}
    </p>
  );
};

const ExperienceSection = forwardRef((props, ref) => {
  const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({})
  const [jobHistory, setJobHistory] = useState([]);
  const { getJobHistories } = useContentful();
  const jobRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
      getJobHistories().then((response) => {setJobHistory(response)});
  }, []);


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
                      $translateDown={expandedJobs[i]}
                      onClick={() => toggleJobDescription(i)}
                  />
              </VerticalLine>
              <JobHistoryCard>
                  <img src={job.logo.file.url} alt={`${job.company} logo`} />
                  <CardContent>
                      <CardHeader>
                        <img src={job.logo.file.url} alt={`${job.company} logo`} />
                          <TextHeaderContainer>
                              <h3>{job.title}</h3>
                              <p>{job.company}</p>
                              <p>{job.period}</p>
                          </TextHeaderContainer>
                      </CardHeader>
                      <ProjectRole description={job.role} />
                      <ContributionsContainer>
                          <p><strong>Key Contributions:</strong></p>
                          {(job.keyContributions).map((desc, index) =>
                              (index <= 0 || expandedJobs[i]) && (
                                  <ContentDescription key={index}>
                                      <ChevronRight/>
                                      <p>
                                          {desc}{!expandedJobs[i] && '..'}
                                      </p>
                                  </ContentDescription>
                              )
                          )}
                          {(!expandedJobs[i] && (job.keyContributions.length - 2) !== 0) && <p onClick={() => toggleJobDescription(i)}>{job.keyContributions.length - 1} more contribution{job.keyContributions.length - 1 >= 2 && 's' }...</p>}
                      </ContributionsContainer>
                      {expandedJobs[i] &&
                          <p><strong>Outcome: </strong>{job.outcome}</p>
                      }
                      { expandedJobs[i] &&
                          <ExpandButton
                              onClick={() => toggleJobDescription(i)}
                              aria-expanded={expandedJobs[i]}
                              aria-controls={`job-description-${i}`}
                          >
                              Collapse
                              <StyledChevronDown $rotateArrow/>
                          
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