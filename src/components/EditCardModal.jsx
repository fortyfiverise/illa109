import React, { useState } from "react";

function EditCardModal(props) {
  const [front, setFront] = useState(props.placeHolderValue.front);
  const [back, setBack] = useState(props.placeHolderValue.back);

  const handleButtonClick = () => {
    if (front.length != 0 && back.length != 0) {
      let obj_deserialized = JSON.parse(
        localStorage.getItem(props.selectedKey)
      );

      obj_deserialized.cards[props.currentIndex].front = front;
      obj_deserialized.cards[props.currentIndex].back = back;

      const obj_serialized = JSON.stringify(obj_deserialized);
      localStorage.setItem(props.selectedKey, obj_serialized);
      setFront("");
      setBack("");
      props.setShowModal(false);
    }
  };

  const handleButtonClickDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");

    if (isConfirmed) {
      let obj_deserialized = JSON.parse(
        localStorage.getItem(props.selectedKey)
      );

      if (
        obj_deserialized &&
        obj_deserialized.cards &&
        props.currentIndex >= 0 &&
        props.currentIndex < obj_deserialized.cards.length
      ) {
        obj_deserialized.cards.splice(props.currentIndex, 1);

        const obj_serialized = JSON.stringify(obj_deserialized);
        localStorage.setItem(props.selectedKey, obj_serialized);
        props.setShowModal(false);
      }
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
          its meaning in the back input box.
        </span>
      </form>
      <div className="modal-button-group">
        <button className="ghost" onClick={() => handleButtonClickDelete()}>
          Delete
        </button>
        <button onClick={() => handleButtonClick()}>Save</button>
      </div>
    </div>
  );
}

export default EditCardModal;
