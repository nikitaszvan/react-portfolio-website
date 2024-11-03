import {
    Overlay,
    DialogContainer,
    CloseButton
    } from "./Dialog.styles";

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <DialogContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <h2>{title}</h2>
        {children}
      </DialogContainer>
    </Overlay>
  );
};

export default Dialog;