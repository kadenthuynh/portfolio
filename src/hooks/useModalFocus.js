import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Focus management for a modal dialog.
 * Attach the returned ref (plus tabIndex={-1}) to the dialog container.
 * On open: captures the trigger element, moves focus into the dialog, traps Tab.
 * On close: restores focus to the trigger element.
 */
export default function useModalFocus(isOpen) {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    triggerRef.current = document.activeElement;
    const container = containerRef.current;
    if (container) container.focus();

    const onKeyDown = (e) => {
      if (e.key !== "Tab" || !containerRef.current) return;
      const items = Array.from(
        containerRef.current.querySelectorAll(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) {
        e.preventDefault();
        containerRef.current.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (e.shiftKey) {
        if (current === first || !containerRef.current.contains(current)) {
          e.preventDefault();
          last.focus();
        }
      } else if (current === last || !containerRef.current.contains(current)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      const trigger = triggerRef.current;
      triggerRef.current = null;
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    };
  }, [isOpen]);

  return containerRef;
}
