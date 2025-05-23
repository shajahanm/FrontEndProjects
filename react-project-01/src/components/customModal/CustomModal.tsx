import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './CustomModal.css';

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
};

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
  width = '500px',
  height = 'auto',
}) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
