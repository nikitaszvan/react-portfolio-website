import { useState, forwardRef } from "react";
import { 
    ButtonContainer,
    CardContent,
    CardHeader,
    ImageContainer,
    ProjectCard,
    StyledProjectsSection,
    TagContainer
} from "./ProjectsSection.styles"; 

import Dialog from "src/components/Dialog/Dialog.component";

import InnolabShowcase from "src/assets/images/innolab-showcase.png";
import CitizenshipWeb from "src/assets/images/citizenship-web.png";
import Project3 from "src/assets/images/project3.png";

import { ReactComponent as ExpandIcon } from "src/assets/svgs/ExpandIcon.svg";
import { ReactComponent as GitHubOutline } from "src/assets/svgs/GitHubOutline.svg";
import { ReactComponent as LightBulbOutlined } from "src/assets/svgs/LightBulbOutlined.svg";

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  imageUrl: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Innolab: Hackathon Suite",
    description: "Hackathon suite extension for tech enthusiasts, enabling event management from registration to feedback, fostering collaboration, skill-building, and networking.",
    longDescription: "Collaborated with a multidisciplinary team to design and develop a hackathon suite as an extension of an existing platform, tailored for a focused community of tech enthusiasts. This suite enables end-to-end event management, including participant registration, project submissions, showcasing, and feedback—fostering skill-building, collaboration, and networking within the tech community.",
    imageUrl: InnolabShowcase,
    technologies: ["React", "Typescript", "Firestore Cloud Database", "Firebase Hosting", "Context API", "Tailwind", "shadcn/ui", "Miro", "Figma"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A responsive weather application that provides real-time weather data and forecasts.",
    longDescription: "This weather application offers users real-time weather information and forecasts for any location worldwide. It utilizes the OpenWeather API to fetch accurate and up-to-date weather data. The app is built with React and styled using Tailwind CSS, ensuring a responsive design that works well on both desktop and mobile devices. Users can search for locations, view current weather conditions, and see a 5-day forecast.",
    imageUrl: CitizenshipWeb,
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://example.com/weather-app",
    githubUrl: "https://github.com/yourusername/weather-app"
  },
  {
    id: 3,
    title: "Task Management Tool",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription: "This task management tool is designed to help teams collaborate effectively. Built with Vue.js and powered by Firebase, it offers real-time updates across all connected clients. The application features task creation, assignment, and tracking, as well as team management capabilities. Vuex is used for state management, ensuring a smooth and responsive user experience. The real-time database allows for instant synchronization of tasks and updates across team members.",
    imageUrl: Project3,
    technologies: ["Vue.js", "Firebase", "Vuex"],
    liveUrl: "https://example.com/task-manager",
    githubUrl: "https://github.com/yourusername/task-manager"
  }
]

const ProjectsSection = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <StyledProjectsSection id="projects" ref={ref}>
      <span><LightBulbOutlined/><h2>My Projects</h2></span>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
            <ImageContainer>
              <img
                src={project.imageUrl}
                alt={`${project.title} preview`}
              />
            </ImageContainer>
          <CardHeader>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
          </CardHeader>
          <CardContent>
            <TagContainer>
              {project.technologies.map((tech) => (
                <span key={tech} 
                >
                  {tech}
                </span>
              ))}
            </TagContainer>
            <ButtonContainer>
                <button
                    onClick={() => openDialog(project)}
                >
                    Learn More
                </button>

                <Dialog
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    title={selectedProject?.title}
                >
                    <p>{selectedProject?.longDescription}</p>
                </Dialog>

                {project.liveUrl && (
                    <button>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExpandIcon />
                        </a>
                    </button>
                )}
                {project.githubUrl && (
                    <button>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <GitHubOutline />
                        </a>
                    </button>
                )}
            </ButtonContainer>
          </CardContent>
        </ProjectCard>
      ))}
    </StyledProjectsSection>
  )
});

export default ProjectsSection;