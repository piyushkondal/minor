import { useRef } from 'react';

function Modal() {
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <dialog ref={dialogRef}>
        <h2>Native Modal Title</h2>
        <p>This modal uses native HTML dialog behavior.</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
}

export default Modal;