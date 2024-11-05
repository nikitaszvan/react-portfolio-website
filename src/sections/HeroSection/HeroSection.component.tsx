import {
    HeroImage,
    HeroTextContainer,
    StyledHeroSection,
    } from "./HeroSection.styles";

import HeroImageSrc from "../../assets/images/headshot.jpg";
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
                I'm Nikita – <span>designer and engineer</span>
            </h1>
            <p>
                I love building products. I have a decade of experience with over
                15 digital products.
            </p>
        </HeroTextContainer>
    </StyledHeroSection>
  )
});

export default HeroSection;