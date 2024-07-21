import { useState } from "react";
import PopUp from "./popup";

function handleToggleModal() {
  setShowModal(true);
}

export default function ModalPopUp() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={handleToggleModal}>Open PopUp!</button>
      {showModal ? <PopUp /> : null}
    </div>
  );
}
