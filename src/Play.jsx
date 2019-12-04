import React, { useState } from "react";
import "./Play.css";
import Modal from "./Modal"

const Play = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = (): void => setShow(false);

  return (
    <div className="Play">
      <h1>Creating react modal</h1>
      {!show && <button onClick={openModal}>Show modal</button>}
      <Modal closeModal={closeModal} show={show} />
    </div>
  );
}

export default Play;