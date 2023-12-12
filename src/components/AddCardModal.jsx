import React, { useState } from "react";

function AddCardModal(props) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [helperText, setHelperText] = useState(1);

  const handleClick = () => {
    if (front.length != 0 && back.length != 0) {
      let obj_deserialized = JSON.parse(
        localStorage.getItem(props.selectedKey)
      );

      obj_deserialized.cards.push({
        front: front,
        back: back,
      });

      let obj_serialized = JSON.stringify(obj_deserialized);

      localStorage.setItem(props.selectedKey, obj_serialized);

      setFront("");
      setBack("");
      window.handleStorageChange();
      setHelperText(2);
      setTimeout(() => {
        setHelperText(1);
      }, 2000);
    }
  };

  return (
    <div className="modal-content">
      <form>
        <label>
          Front
          <input
            type="text"
            placeholder="Front of the card"
            autoComplete="off"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
        </label>
        <label>
          Back
          <input
            type="text"
            placeholder="Back of the card"
            autoComplete="off"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </label>
        <Helper helperText={helperText} />
      </form>
      <div className="modal-button-group">
        <button className="ghost" onClick={() => props.setShowModal(false)}>
          Cancel
        </button>
        <button onClick={() => handleClick()}>Add</button>
      </div>
    </div>
  );
}

export default AddCardModal;

const Helper = ({ helperText }) => {
  switch (helperText) {
    case 1:
      return (
        <span className="helper">
          Please ensure you input the foreign word in the front input box and
          its meaning in the back input box.
        </span>
      );
    case 2:
      return <span className="helper success">Card added to deck.</span>;
    default:
      return null;
  }
};
