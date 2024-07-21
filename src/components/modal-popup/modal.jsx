import { useState } from "react";
import PopUp from "./popup";

export default function ModalPopUp() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(true);
  }
  function handleOnClose() {
    console.log(showModal);
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={() => handleToggleModal()}>Open PopUp!</button>
      {showModal ? (
        <PopUp title={"MODAL POPUP!"} onClose={handleOnClose} />
      ) : null}
    </div>
  );
}
