import { 
    AccentBorder,
    CardHeader,
    HeaderText,
    // IconContainer,
    ImageContainer,
    MainCard,
    StyledTestimonialCard
} from "./TestimonialsCard.styles";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronRight } from "src/assets/svgs/ChevronRight.svg";
import { ReactComponent as ArrowUpRight } from "src/assets/svgs/ArrowUpRight.svg";


export type Testimonial = {
    id: number;
    name: string;
    position: string;
    company: string;
    testimonial: string;
    image: string;
    link: string;
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
    
    return (
    <StyledTestimonialCard>
        <AccentBorder/>
        <MainCard>
          <CardHeader>
            <ImageContainer>
              <img src='https://i.pravatar.cc/300' alt={testimonial.name} />
              {/* <IconContainer>
                <QuoteIcon/>
              </IconContainer> */}
            </ImageContainer>
            <HeaderText>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
                <p>{testimonial.company}</p>
            </HeaderText>
          </CardHeader>
          <blockquote>
            <p>{testimonial.testimonial}</p>
          </blockquote>
          <Link
                to={testimonial.link}
            >
                Read on LinkedIn
                <ArrowUpRight />
            </Link>
        </MainCard>
    </StyledTestimonialCard>
    )}

export default TestimonialCard;