import {
    GreenDot,
    HeroImage,
    HeroImageWrapper,
    HeroTextContainer,
    StyledHeroSection,
    } from "./HeroSection.styles";

import HeroImageSrc from "../../assets/images/portfolio-headshot.png";
import { forwardRef } from "react";

const HeroSection = forwardRef((props, ref) => {
  return (
    <StyledHeroSection id="home" ref={ref}>
        <HeroImageWrapper
            to='https://www.linkedin.com/in/nikita-van-162b9417b'
            target="_blank"
            rel="noopener noreferrer"
        >
            <HeroImage
                src={HeroImageSrc}
                alt="Profile picture"
            />
            <GreenDot />
        </HeroImageWrapper>
        <HeroTextContainer>
            <h1>
                I'm Nikita -&nbsp;
                <span> </span>
                <span></span>
            </h1>
            <p>
                I love the challenge of building beautiful, functional applications and embrace learning every step of the way.
            </p>
        </HeroTextContainer>
    </StyledHeroSection>
  )
});

export default HeroSection;