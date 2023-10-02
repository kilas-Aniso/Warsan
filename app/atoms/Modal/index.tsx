import React, { MouseEventHandler, ReactNode } from 'react';

interface LogoutProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  closeModal: MouseEventHandler;
  children: ReactNode;
}

const Modal: React.FC<LogoutProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
