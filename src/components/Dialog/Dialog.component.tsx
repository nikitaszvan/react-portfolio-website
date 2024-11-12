import {
    Overlay,
    DialogContainer
    } from "./Dialog.styles";

import { ReactComponent as CloseVector } from "src/assets/svgs/CloseVector.svg";

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <DialogContainer onClick={(e) => e.stopPropagation()} textbox={title}>
        <CloseVector onClick={onClose} />
        {title && <h2>{title}</h2>}
        {children}
      </DialogContainer>
    </Overlay>
  );
};

export default Dialog;