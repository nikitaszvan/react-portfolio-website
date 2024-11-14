import TestimonialCard, { Testimonial } from "src/components/TestimonialsCard/TestimonialsCard.component";
import { 
    CardsContainer,
    CircleIndicatorContainer,
    StyledTestimonialsSection
 } from "./TestimonialsSection.styles";

import { ReactComponent as QuoteIcon } from "src/assets/svgs/QuoteIcon.svg";
import { forwardRef, useState, useRef, useEffect, TouchEvent } from "react";
import traciImage from "src/assets/images/traci-image.jpeg";
import lukeImage from "src/assets/images/luke-image.jpeg";
import michelleImage from "src/assets/images/michelle-image.webp";
import helenImage from "src/assets/images/helen-image.jpeg";
import jayImage from "src/assets/images/jay-image.jpeg";
import samanImage from "src/assets/images/saman-image.jpeg";



const testimonials: Testimonial[] = [
  {
    name: "Traci Levine",
    position: "Executive Director | Founder",
    company: "makeitMVP",
    testimonial: "Nikita consistently exceeds expectations in all aspects of her work. Her dedication, attention to detail, and innovative approach make her an invaluable asset to any team. She not only meets her goals but surpasses them, driving projects forward with exceptional skill and enthusiasm...",
    image: traciImage,
  },
  {
    name: "Luke Nater",
    position: "Senior PT Specialist",
    company: "Toronto Metropolitan University",
    testimonial: "I've worked with Nikita at Media Services at TMU for over two years now, and she continues to go above and beyond the job description. Her technical expertise and eagerness to learn more makes her a valuable asset in our department...",
    image: lukeImage,
  },
  {
    name: "Michelle Wong",
    position: "Software Engineer",
    company: "makeitMVP",
    testimonial: `I had the pleasure of working with Nikita, and I couldn't recommend her highly enough. She brings a bright, positive energy to the team, making every day better for those around her. Nikita is not only an incredible teammate but also an invaluable resource for knowledge and guidance...`,
    image: michelleImage,
  },
  {
    name: "Helen Yan",
    position: "Product Designer",
    company: "SomeDesign Inc",
    testimonial: `I was fortunate to work alongside Nikita on the MakeitMVP team. She consistently brings energy to our collaborations, asking insightful questions and breaking the occasional silence with thoughtful contributions...`,
    image: helenImage,
  },
  {
    name: "Jay Li",
    position: "Technical Project Manager",
    company: "Noise Digital",
    testimonial: `I had the pleasure of working alongside Nikita Van at makeitMVP, where I served as the Team Product Lead. Her contributions as a Full Stack Developer were crucial in developing an MVP feature set for the Communiti platform within just six weeks...`,
    image: jayImage,
  },
  {
    name: "Saman Pourshafiei",
    position: "Dart and Flutter Developer",
    company: "Reev Tech Inc",
    testimonial: `I highly recommend Nikita. Her strong technical skills enable her to work fluently across multiple programming languages and frameworks, with an advanced understanding of full-stack architecture and efficient data flow between backend and frontend...`,
    image: samanImage,
  }
];

const TestimonialsSection = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1144);

  const extendedTestimonials = isMobileView ? testimonials : [...testimonials, ...testimonials];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1144);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileView) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    const moveCarousel = () => {
      if (isHovered || isDragging) return;
      carousel.scrollLeft += 1;
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(moveCarousel, 20);

    return () => clearInterval(intervalId);
  }, [isHovered, isDragging, isMobileView]);

  const updateActiveCard = () => {
    if (!carouselRef.current) return
    const index = Math.round(carouselRef.current.scrollLeft / 476) % testimonials.length;
    setActiveCard(index)
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].clientX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.touches[0].clientX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
    updateActiveCard()
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleScroll = () => {
    updateActiveCard()
  }

  return (
    <StyledTestimonialsSection 
      id="testimonials" 
      ref={ref}
    >
        <span><QuoteIcon/><h2>Testimonials</h2></span>
        <CardsContainer 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
          role="region"
          aria-label="Moving carousel"
          tabIndex={0}
          ref={carouselRef}
          itemsCount = {testimonials.length}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial}/>
          ))}
        </CardsContainer>
        {!isMobileView && <CircleIndicatorContainer activeCircle={activeCard}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (carouselRef.current) {
                  if (index !== 0) {
                    carouselRef.current.scrollLeft = ((index * 476) - (carouselRef.current.offsetWidth / 5));
                    console.log(carouselRef);
                  }
                  else {
                    carouselRef.current.scrollLeft = 0;
                  }
                  setActiveCard(index)
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </CircleIndicatorContainer>}
    </StyledTestimonialsSection>
  )
});

export default TestimonialsSection;