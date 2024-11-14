import {
    HeroImage,
    HeroTextContainer,
    StyledHeroSection,
    } from "./HeroSection.styles";

import HeroImageSrc from "../../assets/images/portfolio-headshot.png";
import { forwardRef } from "react";

const HeroSection = forwardRef((props, ref) => {
  return (
    <StyledHeroSection id="home" ref={ref}>
        <HeroImage
            src={HeroImageSrc}
            alt="Profile picture"
        />
        <HeroTextContainer>
            <h1>
                I'm Nikita – <span>a full-stack developer.</span>
            </h1>
            <p>
                I love the challenge of building beautiful, functional applications and embrace learning every step of the way.
            </p>
        </HeroTextContainer>
    </StyledHeroSection>
  )
});

export default HeroSection;