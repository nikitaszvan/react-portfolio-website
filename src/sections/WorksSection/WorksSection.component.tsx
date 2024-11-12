import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { 
    ButtonContainer,
    CardContent,
    CardHeader,
    ImageContainer,
    ProjectCard,
    StyledWorksSection,
    TagContainer
} from "./WorksSection.styles"; 

import Dialog from "src/components/Dialog/Dialog.component";

import InnolabShowcase from "src/assets/images/innolab-showcase.png";
import CitizenshipWeb from "src/assets/images/citizenship-web.png";
import SchoolPortal from "src/assets/images/school-portal.png";

import { ReactComponent as ExpandIcon } from "src/assets/svgs/ExpandIcon.svg";
import { ReactComponent as GitHubOutline } from "src/assets/svgs/GitHubOutline.svg";
import { ReactComponent as LightBulbOutlined } from "src/assets/svgs/LightBulbOutlined.svg";
import { ReactComponent as ExpandVector } from "src/assets/svgs/ExpandVector.svg";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imagePosition: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Innolab: Hackathon Suite",
    description: "Hackathon suite extension MVP for tech enthusiasts, enabling event management from registration to feedback, fostering collaboration, skill-building, and networking.",
    longDescription: "Collaborated with a multidisciplinary team to design and develop a hackathon suite as an extension of an existing platform, tailored for a focused community of tech enthusiasts. This suite enables end-to-end event management, including participant registration, project submissions, showcasing, and feedback—fostering skill-building, collaboration, and networking within the tech community.",
    imageUrl: InnolabShowcase,
    imagePosition: "center",
    technologies: ["React", "Typescript", "Firestore Database", "Firebase Hosting", "Firebase Auth", "Context API", "Tailwind", "shadcn/ui", "Miro", "Figma", "Zod", "react-hook-form"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/makeitMVPadmin/LAP5_InnoLab1"
  },
  {
    id: 2,
    title: "Canadian Citizenship Test 2024",
    description: "The Canadian Citizenship Test 2024 web app is an adaptation of the popular mobile app, designed to provide a seamless and consistent test preparation experience for users across devices.",
    longDescription: "Modeled after the highly ranked mobile version, this web application offers users interactive learning tools and practice tests, helping them prepare for their Canadian citizenship test with ease. With a user-friendly interface developed using HTML, CSS, and JavaScript, the app brings essential study resources online, maintaining the design and functionality that has landed the mobile app in the top 10 in the Education & Learning category for Canada.",
    imageUrl: CitizenshipWeb,
    imagePosition: "top",
    technologies: ["Javascript", "HTML", "CSS", "Firestore Database"],
    liveUrl: "https://app.wisdom.reev.ca/3/content",
    githubUrl: ""
  },
  {
    id: 3,
    title: "Online Learning Course Portal",
    description: "A user-friendly portal MVP that makes it easy to access, manage, and explore a wide range of online courses for an enjoyable learning experience.",
    longDescription: "This task management tool is designed to help teams collaborate effectively. Built with Vue.js and powered by Firebase, it offers real-time updates across all connected clients. The application features task creation, assignment, and tracking, as well as team management capabilities. Vuex is used for state management, ensuring a smooth and responsive user experience. The real-time database allows for instant synchronization of tasks and updates across team members.",
    imageUrl: SchoolPortal,
    imagePosition: "center",
    technologies: ["React", "Typescript", "Firestore Database", "Firebase Hosting", "Firebase Auth", "Redux", "styled-components", "Figma"],
    liveUrl: "https://example.com/task-manager",
    githubUrl: "https://github.com/yourusername/task-manager"
  }
]

const WorksSection = forwardRef((props, ref) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const openDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const openImageDialog = ({ src, alt }: { src: string; alt: string }) => {
    setSelectedImage({ src, alt });
    setIsImageOpen(true);
  };

  return (
    <StyledWorksSection id="works" ref={ref}>
      <span><LightBulbOutlined/><h2>My Work</h2></span>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
            <ImageContainer imagePosition={project.imagePosition}>
              <img
                src={project.imageUrl}
                alt={`${project.title} preview`}

              />
              <button
                onClick={() => openImageDialog({src: project.imageUrl, alt: `${project.title} preview`})}
              >
                <ExpandVector />
              </button>
              <Dialog isOpen={isImageOpen} onClose={() => setIsImageOpen(false)} title={null}>
              {selectedImage && (
                <img src={selectedImage.src} alt={selectedImage.alt} />
              )}
            </Dialog>
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
                  <Link to={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExpandIcon />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GitHubOutline />
                  </Link>
                )}
            </ButtonContainer>
          </CardContent>
        </ProjectCard>
      ))}
    </StyledWorksSection>
  )
});

export default WorksSection;