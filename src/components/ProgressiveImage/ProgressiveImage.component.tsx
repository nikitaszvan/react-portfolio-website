import { useState, useEffect } from 'react';
import { StyledProgressiveImage } from "./ProgressiveImage.styles";

const ProgressiveImage = ({ lowSrc, highSrc, alt }) => {
  const [src, setSrc] = useState(lowSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = highSrc;

    img.onload = () => {
      setSrc(highSrc);
      setIsLoading(false);
    };
  }, [highSrc]);

  return (
    <StyledProgressiveImage
      src={src}
      alt={alt}
      isLoading = {isLoading}
    />
  );
};

export default ProgressiveImage;
