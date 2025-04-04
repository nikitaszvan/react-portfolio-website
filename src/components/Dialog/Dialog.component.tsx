import {
    Overlay,
    DialogContainer
    } from "./Dialog.styles";

import { ReactComponent as CloseVector } from "src/assets/svgs/CloseVector.svg";

const Dialog = ({ isOpen, onClose, title, children, image }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <DialogContainer onClick={(e) => e.stopPropagation()} textbox={title}>
        <CloseVector onClick={onClose} style={{fill: "blue", top: image && "2rem", right: image && "3rem"}}/>
        {title && <h2>{title}</h2>}
        {children}
      </DialogContainer>
    </Overlay>
  );
};

export default Dialog;