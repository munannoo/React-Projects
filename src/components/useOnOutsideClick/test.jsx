import { useState } from "react";
import PopUp from "../modal-popup/popup";

export default function TestOutsideClick() {
  const [showModal, setShowModal] = useState(false);

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
        <PopUp title={"MODAL POPUP!"} onClose={handleOnClose} />
      ) : null}
    </div>
  );
}
