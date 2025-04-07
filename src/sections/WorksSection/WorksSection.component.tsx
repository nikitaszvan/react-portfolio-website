import { useState, forwardRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage.component';
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
import InnolabShowcasePlaceholder from "src/assets/images/innolab-showcase-placeholder.png";
import CitizenshipWeb from "src/assets/images/citizenship-web.png";
import CitizenshipWebPlaceholder from "src/assets/images/citizenship-web-placeholder.png";
import SchoolPortal from "src/assets/images/school-portal.png";
import SchoolPortalPlaceholder from "src/assets/images/school-portal-placeholder.png";
import ValerieWeb from "src/assets/images/valerie.png";

import { ReactComponent as ExpandIcon } from "src/assets/svgs/ExpandIcon.svg";
import { ReactComponent as GitHubOutline } from "src/assets/svgs/GitHubOutline.svg";
import { ReactComponent as LightBulbOutlined } from "src/assets/svgs/LightBulbOutlined.svg";
import { ReactComponent as ExpandVector } from "src/assets/svgs/ExpandVector.svg";

type Project = {
  id: number;
  title: string;
  description: ReactNode;
  longDescription: string;
  imageUrl: string;
  imagePlaceholder: string;
  imagePosition: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 0,
    title: "Men's Streetwear eCommerce Platform",
    description: <p>A modern men's streetwear eCommerce platform built with Next.js for fast and scalable performance, styled using Tailwind CSS for a sleek, responsive design, and integrated with Stripe for secure and seamless payment processing.</p>,
    longDescription: "A modern men's streetwear eCommerce platform built with Next.js for fast performance, Tailwind CSS for a sleek, responsive design, and Stripe for secure payments. It utilizes IndexedDB for cart state, Redis for fast session storage, and Redux for efficient state management. DynamoDB powers scalable database operations, ensuring seamless data handling. The platform delivers a high-performance, user-friendly shopping experience with dynamic routing, server-side rendering, and smooth transactions, making it an ideal solution for online streetwear retailers. Combining modern frameworks and technologies, it offers a visually appealing, scalable, and optimized eCommerce experience across all devices.",
    imageUrl: ValerieWeb,
    imagePlaceholder: ValerieWeb,
    imagePosition: "bottom",
    technologies: ["React", "Next.js", "Redis", "TypeScript", "Vercel Hosting", "DynamoDB", "Redux", "Tailwind", "shadcn/ui"],
    liveUrl: "https://nextjs-streetwear-ecommerce.vercel.app",
    githubUrl: "https://github.com/nikitaszvan/nextjs-streetwear-ecommerce"
  },
  {
    id: 1,
    title: "Innolab: Hackathon Suite",
    description: <p>MVP for a hackathon suite, designed for tech enthusiasts to streamline event management—from registration to feedback—promoting collaboration, skill-building, and networking. <br /><strong>Demo: </strong>email: testuser@mail.com, password: password</p>,
    longDescription: "Worked closely with a multidisciplinary team to design and develop a hackathon suite as an extension of an existing platform, tailored for tech enthusiasts. This suite supports end-to-end event management, from participant registration and project submissions to showcasing and feedback, fostering skill-building, collaboration, and networking within the tech community.",
    imageUrl: InnolabShowcase,
    imagePlaceholder: InnolabShowcasePlaceholder,
    imagePosition: "center",
    technologies: ["React", "Typescript", "Firestore Database", "Firebase Hosting", "Firebase Auth SDK", "Firebase Storage", "Context API", "Tailwind CSS", "shadcn/ui", "Figma", "Zod", "React Hook Form"],
    liveUrl: "https://innolab-hackathon-suite.web.app/",
    githubUrl: "https://github.com/makeitMVPadmin/LAP5_InnoLab1"
  },
  {
    id: 2,
    title: "Canadian Citizenship Test 2025: Web Edition",
    description: <p>The Canadian Citizenship Test 2025 is a web-based extension of the widely used mobile app of the same name, delivering a unified test preparation experience across multiple devices. It features the same standardized content, enabling prospective citizens to access and study the material.</p>,
    longDescription: "Built on the success of the highly rated mobile version, this web application provides interactive learning tools and practice tests to help users prepare for the Canadian citizenship test. Featuring a user-friendly interface, the app brings essential study resources to the web while maintaining the design and functionality that contributed to the mobile app's ranking in the top 10 of Canada's Education & Learning category.",
    imageUrl: CitizenshipWeb,
    imagePlaceholder: CitizenshipWebPlaceholder,
    imagePosition: "top",
    technologies: ["Javascript", "HTML", "CSS", "Firestore Database"],
    liveUrl: "https://app.wisdom.reev.ca/3/content",
    githubUrl: ""
  },
  {
    id: 3,
    title: "eCourseFlow: Online Learning Hub",
    description: <p>An educational portal designed for academic institutions, providing seamless access, management, and exploration of courses. With a range of learning tools and testing modes, it enhances the online learning experience for students across institutions, all virtually connected. <br /><strong>Demo: </strong>email: testuser@mail.com, password: password</p>,
    longDescription: "An innovative educational portal designed for academic institutions, offering students and faculty an intuitive platform for accessing, managing, and exploring a wide range of courses. The portal provides an array of learning tools, including interactive content and progress tracking, to help students engage with their coursework effectively. Additionally, it includes testing modes for practice exams and assessments, enabling students to test their knowledge and track their learning proficiency. By connecting all users through the internet, this platform fosters collaboration and streamlined communication between students, instructors, and academic administrators, enhancing the overall learning experience and making education more accessible, flexible, and interactive.",
    imageUrl: SchoolPortal,
    imagePlaceholder: SchoolPortalPlaceholder,
    imagePosition: "center",
    technologies: ["React", "Typescript", "Firestore Database", "Firebase Hosting", "Firebase Auth", "Redux", "styled-components", "Figma"],
    liveUrl: "https://real-estate-project-356e9.web.app",
    githubUrl: "https://github.com/nikitaszvan/online-learning-portal"
  },
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
        <ProjectCard key={project.id} id={`project-`+ project.id}>
            <ImageContainer $imagePosition={project.imagePosition}>
              <ProgressiveImage
                lowSrc={project.imagePlaceholder}
                highSrc={project.imageUrl}
                alt={`${project.title} preview`}
              />
              <button
                onClick={() => openImageDialog({src: project.imageUrl, alt: `${project.title} preview`})}
              >
                <ExpandVector />
              </button>
              <Dialog isOpen={isImageOpen} onClose={() => setIsImageOpen(false)} title={null} image>
              {selectedImage && (
                <img src={selectedImage.src} alt={selectedImage.alt} />
              )}
            </Dialog>
            </ImageContainer>
          <CardHeader>
                <h1>{project.title}</h1>
                {project.description}
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
                    image={false}
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