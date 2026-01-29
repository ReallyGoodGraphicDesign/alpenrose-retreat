// 01 first modal primitive      
// 02 added escape key      
// 03 blurred triggering button (change in main.js, not here)

import { useEffect } from "react";
import "./Modal.css";

function Modal({ children, onClose }) {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup when modal unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
