import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ConfirmationModal = forwardRef(function ConfirmationModal(
  { onConfirmClick, children },
  ref
) {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        };
    });
  return createPortal(
    <dialog ref={dialogRef} className="rounded-md p-4 backdrop:bg-stone-900/90">
      <p className="pb-4">
        {children}
      </p>
      <form method="dialog" className="flex gap-4 justify-center">
        <button
          onClick={onConfirmClick}
          className="py-1 min-w-24 rounded-md bg-stone-200 hover:font-bold"
        >
          Yes
        </button>
        <button className="py-1 min-w-24 rounded-md bg-stone-200 hover:font-bold">
          No
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ConfirmationModal;
