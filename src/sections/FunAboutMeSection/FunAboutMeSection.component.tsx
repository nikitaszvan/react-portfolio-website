import { useState, forwardRef } from 'react';
import { ReactComponent as Croissant } from "../../assets/svgs/Croissant.svg";
import { ReactComponent as Camera } from "../../assets/svgs/Camera.svg";
import { ReactComponent as Prawn } from "../../assets/svgs/Prawn.svg";
import { ReactComponent as Camping } from "../../assets/svgs/Camping.svg";
import { ReactComponent as PaperPlane } from "../../assets/svgs/PaperPlane.svg";
import { 
    HobbiesContainer,
    HobbyColumn,
    IconContainer,
    ImageContainer,
    StyledFunAboutMe,
    StyledHeader
 } from './FunAboutMeSection.styles';

import sourdoughBread from "src/assets/images/sourdough-bread.jpg";
import cookies from "src/assets/images/cookies.jpg";
import cremeBrulee from "src/assets/images/creme-brulee.jpg";
import filmCamera from "src/assets/images/film-camera.png";
import boatsHarbour from "src/assets/images/boats-harbour.png";
import parasolsWindow from "src/assets/images/parasols-window.png";
import steak from "src/assets/images/steak.jpg";
import seafoodBoil from "src/assets/images/seafood-boil.jpg";
import sinigang from "src/assets/images/sinigang.jpg";
import campsite from "src/assets/images/campsite.jpg";
import hiking from "src/assets/images/hiking.jpg";
import canoe from "src/assets/images/canoe.jpg";

const FunAboutMeSection = forwardRef((props, ref) => {
    const [hoveredHobby, setHoveredHobby] = useState<string | null>(null)

    const hobbies = [
        { 
          icon: Croissant, 
          label: 'Homebaker',
          images: [ sourdoughBread, cookies, cremeBrulee ]
        },
        { 
          icon: Camera, 
          label: 'Photography',
          images: [ filmCamera, boatsHarbour, parasolsWindow ]
        },
        { 
          icon: Camping,
          label: 'Nature Lover',
          images: [ campsite, hiking, canoe ]
        },
        { 
          icon: Prawn, 
          label: 'Home cook',
          images: [ steak, seafoodBoil, sinigang ]
        },
      ]
    
  return (

    <StyledFunAboutMe id="fun" ref={ref}>
        <span><PaperPlane/><h2>Fun</h2></span>
        <StyledHeader>
            <h2>Beyond the Code...</h2>
            <p><span></span> to catch a glimpse of my life beyond the screen.</p>
        </StyledHeader>
        <HobbiesContainer>
        {hobbies.map((hobby, index) => (
            <HobbyColumn
                key={index}
            >
                <IconContainer
                    onMouseEnter={() => setHoveredHobby(hobby.label)}
                    onMouseLeave={() => setHoveredHobby(null)}
                >
                    <hobby.icon />
                </IconContainer>
                <p>{hobby.label}</p>
                <ImageContainer $isVisible={hoveredHobby === hobby.label}>
                    {hobby.images.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`${hobby.label} image ${index + 1}`}
                            />
                        </div>
                    ))}
                </ImageContainer>
            </HobbyColumn>
        ))}
        </HobbiesContainer>
    </StyledFunAboutMe>
  )
});

export default FunAboutMeSection;