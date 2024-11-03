import TestimonialCard, { Testimonial } from "src/components/TestimonialsCard/TestimonialsCard.component";
import { 
    CardsContainer,
    StyledTestimonialsSection
 } from "./TestimonialsSection.styles";

import { ReactComponent as StarOutline } from "src/assets/svgs/StarOutline.svg";

import { forwardRef } from "react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Project Manager",
    company: "TechInnovate Inc.",
    testimonial: "Working with this developer was an absolute pleasure. Their attention to detail and ability to meet tight deadlines while maintaining high-quality code was impressive. They're not just a coder, but a true problem solver.",
    image: "/placeholder.svg?height=100&width=100",
    link: ""
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "StartUp Dynamics",
    testimonial: "I've worked with many developers, but few have shown the level of creativity and technical expertise that this individual possesses. They have a unique ability to translate complex ideas into user-friendly applications.",
    image: "/placeholder.svg?height=100&width=100",
    link: ""
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UX Designer",
    company: "DesignCraft Co.",
    testimonial: "As a UX designer, I appreciate developers who understand the importance of user experience. This developer not only implemented our designs flawlessly but also suggested improvements that enhanced overall usability. A true team player!",
    image: "/placeholder.svg?height=100&width=100",
    link: ""
  }
]

const TestimonialsSection = forwardRef((props, ref) => {
  return (
    <StyledTestimonialsSection id="testimonials" ref={ref}>
        <span><StarOutline/><h2>Testimonials</h2></span>
        <CardsContainer>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </CardsContainer>
    </StyledTestimonialsSection>
  )
});

export default TestimonialsSection;