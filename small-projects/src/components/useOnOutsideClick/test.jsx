import { useState, useRef } from "react";
import PopUp from "../modal-popup/popup";
import useOnOutsideClick from "./useOnOutsideclick";

export default function TestOutsideClick() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  useOnOutsideClick(ref, () => setShowModal(false));

  function handleToggleModal() {
    setShowModal(true);
  }

  function handleOnClose() {
    setShowModal(false);
  }

  return (
    <div>
      <h1>OnOutsideClick Hook React</h1>
      <button onClick={() => handleToggleModal()}>Open PopUp!</button>
      {showModal ? (
        <div ref={ref}>
          <PopUp title={"MODAL POPUP!"} onClose={handleOnClose} />
        </div>
      ) : null}
    </div>
  );
}
