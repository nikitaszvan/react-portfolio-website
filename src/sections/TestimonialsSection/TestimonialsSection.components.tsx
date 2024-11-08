import TestimonialCard, { Testimonial } from "src/components/TestimonialsCard/TestimonialsCard.component";
import { 
    CardsContainer,
    StyledTestimonialsSection
 } from "./TestimonialsSection.styles";

import { ReactComponent as QuoteIcon } from "src/assets/svgs/QuoteIcon.svg";
import { forwardRef } from "react";
import traciImage from "src/assets/images/traci-image.jpeg";
import lukeImage from "src/assets/images/luke-image.jpeg";
import michelleImage from "src/assets/images/michelle-image.webp";
import helenImage from "src/assets/images/helen-image.jpeg";



const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Traci Levine",
    position: "Executive Director | Founder",
    company: "makeitMVP",
    testimonial: "Nikita consistently exceeds expectations in all aspects of her work. Her dedication, attention to detail, and innovative approach make her an invaluable asset to any team. She not only meets her goals but surpasses them, driving projects forward with exceptional skill and enthusiasm...",
    image: traciImage,
  },
  {
    id: 2,
    name: "Luke Nater",
    position: "Senior PT Specialist",
    company: "Toronto Metropolitan University",
    testimonial: "I've worked with Nikita at Media Services at TMU for over two years now, and she continues to go above and beyond the job description. Her technical expertise and eagerness to learn more makes her a valuable asset in our department...",
    image: lukeImage,
  },
  {
    id: 3,
    name: "Michelle Wong",
    position: "Software Engineer",
    company: "makeitMVP",
    testimonial: `I had the pleasure of working with Nikita, and I couldn't recommend her highly enough. She brings a bright, positive energy to the team, making every day better for those around her. Nikita is not only an incredible teammate but also an invaluable resource for knowledge and guidance...`,
    image: michelleImage,
  },
  {
    id: 4,
    name: "Helen Yan",
    position: "Product Designer",
    company: "SomeDesign Inc",
    testimonial: `I was fortunate to work alongside Nikita on the MakeitMVP team. She consistently brings energy to our collaborations, asking insightful questions and breaking the occasional silence with thoughtful contributions...`,
    image: helenImage,
  }
]

const TestimonialsSection = forwardRef((props, ref) => {
  return (
    <StyledTestimonialsSection id="testimonials" ref={ref}>
        <span><QuoteIcon/><h2>Testimonials</h2></span>
        <CardsContainer>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </CardsContainer>
    </StyledTestimonialsSection>
  )
});

export default TestimonialsSection;