import { useState, forwardRef } from "react";
import { 
    ButtonContainer,
    CardContainer,
    CardContent,
    CardHeader,
    ProjectCard,
    StyledProjectsSection,
    TagContainer
} from "./ProjectsSection.styles"; 

import Dialog from "src/components/Dialog/Dialog.component";

import Project1 from "src/assets/images/project1.png";
import Project2 from "src/assets/images/project2.png";
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
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    longDescription: "This e-commerce platform provides a comprehensive solution for online retail. It features user authentication, product catalog management, shopping cart functionality, and secure payment processing using Stripe. The frontend is built with React for a responsive and interactive user interface, while the backend uses Node.js and Express to handle API requests and database operations. MongoDB is used as the database to store product and user information.",
    imageUrl: Project1,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A responsive weather application that provides real-time weather data and forecasts.",
    longDescription: "This weather application offers users real-time weather information and forecasts for any location worldwide. It utilizes the OpenWeather API to fetch accurate and up-to-date weather data. The app is built with React and styled using Tailwind CSS, ensuring a responsive design that works well on both desktop and mobile devices. Users can search for locations, view current weather conditions, and see a 5-day forecast.",
    imageUrl: Project2,
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
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                />
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
        </CardContainer>
    </StyledProjectsSection>
  )
});

export default ProjectsSection;