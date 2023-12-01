import React, { useState } from "react";

function AddCardModal(props) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleClick = () => {
    setFront("");
    setBack("");
    console.log(front, back);
  };
  return (
    <div className="modal-content is-none">
      <form>
        <label>
          Front
          <input
            type="text"
            placeholder="Front of the card"
            autocomplete="off"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
        </label>
        <label>
          Back
          <input
            type="text"
            placeholder="Back of the card"
            autocomplete="off"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </label>
        <span className="helper">
          Please ensure you input the foreign word in the front input box and
          the English word or its meaning in the back input box.
        </span>
      </form>
      <div className="modal-button-group">
        <button onClick={() => handleClick()}>Add</button>
      </div>
    </div>
  );
}

export default AddCardModal;
