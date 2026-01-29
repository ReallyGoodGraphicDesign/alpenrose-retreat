// 01 first modal primitive      
// 02 added escape key      
// 03 blurred triggering button (change in main.js, not here)
// 04 added bg scroll lock
// 05 added ft, BUT bg scrolls to top on mm & doesn't return on mu, & sb disappears

import { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({ children, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // ---------- SCROLL LOCK ----------
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // ---------- ESC + FOCUS TRAP ----------
    const modal = modalRef.current;

    if (!modal) return;

    // Find all focusable elements inside modal
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ];

    const focusableElements = modal.querySelectorAll(
      focusableSelectors.join(",")
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable =
      focusableElements[focusableElements.length - 1];

    // Move focus into modal
    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      // ESC closes modal
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Trap focus
      if (e.key === "Tab") {
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // ---------- CLEANUP ----------
    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        ref={modalRef}
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
