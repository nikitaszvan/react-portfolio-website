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
  padding: ${({textbox}) => textbox ? '2rem' : '0'};
  width: ${({textbox}) => textbox ? '25rem' : '65%'};
  max-height: 80%;
  position: relative;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%; 
    scale: 1.05;
    object-fit: cover;
    
  }

  > svg {
    fill: var(--black);
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