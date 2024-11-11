import { 
    CardHeader,
    HeaderText,
    IconContainer,
    ImageContainer,
    MainCard,
    StyledTestimonialCard
} from "./TestimonialsCard.styles";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronRight } from "src/assets/svgs/ChevronRight.svg";
import { ReactComponent as ArrowUpRight } from "src/assets/svgs/ArrowUpRight.svg";
import { ReactComponent as QuoteIcon } from "src/assets/svgs/QuoteIcon.svg";


export type Testimonial = {
    name: string;
    position: string;
    company: string;
    testimonial: string;
    image: string;
};

const TestimonialCard = ({ testimonial}: { testimonial: Testimonial}) => {
    
    return (
    <StyledTestimonialCard>
        <MainCard>
          <CardHeader>
            <ImageContainer>
              <img src={testimonial.image} alt={testimonial.name} />
              <IconContainer>
                <QuoteIcon/>
              </IconContainer>
            </ImageContainer>
            <HeaderText>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
                <p>{testimonial.company}</p>
            </HeaderText>
          </CardHeader>
          <blockquote>
            <p>"{testimonial.testimonial}"</p>
          </blockquote>
          <Link
              to='https://www.linkedin.com/in/nikita-van-162b9417b/details/recommendations'
              target="_blank"
              rel="noopener noreferrer"
            >
                Read on LinkedIn
                <ArrowUpRight />
            </Link>
        </MainCard>
    </StyledTestimonialCard>
    )}

export default TestimonialCard;