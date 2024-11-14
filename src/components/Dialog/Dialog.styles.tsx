import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const DialogContainer = styled.div<{textbox: boolean}>`
  background: var(--bg);
  border-radius: 8px;
  padding: ${({textbox}) => textbox ? '1.5rem' : '0'};

  ${({textbox}) => textbox ? 
  `width: 25rem` 
  : 
  `width: 65%; min-width: 30rem;`};
  height: auto;
  @media (min-width: 640px) {
    position: relative;
  }

  @media (min-width: 640px) and (max-width: 1144px) {
    width: 80%;
    height: auto;
    min-width: unset;
  }

  @media (max-width: 639px) {
    width: 100%;
    height: auto;
    min-width: unset;
  }

  overflow: hidden;

  > img {
    width: 100%;
    height: 100%; 
    scale: 1.05;
    object-fit: cover;
  }

  > svg {
    fill: var(--black);
    @media (max-width: 639px) {
      top: 2rem;
      right: 2rem;
      fill: var(--bg);
    }
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.6rem;
    height: 1.6rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
  }
`;