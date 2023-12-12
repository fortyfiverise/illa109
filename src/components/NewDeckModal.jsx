import React, { useState } from "react";
import ImportButton from "./ImportButton";
import AddCardModal from "./AddCardModal";

function NewDeckModal(props) {
  const [showAddCardModal, setShowAddCardModal] = useState(true);
  const [helperText, setHelperText] = useState(1);
  const [newKey, setNewKey] = useState("");

  function handleInputChange(event) {
    setNewKey(event.target.value);
    setHelperText(1);
    if (localStorage.getItem(event.target.value) !== null) {
      setHelperText(2);
    } else if (event.target.value.length >= 30) {
      setHelperText(3);
    }
  }

  function handleButtonClick() {
    if (helperText === 2 || helperText === 3 || newKey.length <= 0) {
      return;
    } else {
      const object = {
        cards: [],
      };
      localStorage.setItem(newKey, JSON.stringify(object));
      setShowAddCardModal(!showAddCardModal);
      window.handleStorageChange();
    }
  }

  return (
    <>
      {showAddCardModal ? (
        <div className="modal-content">
          <form>
            <label htmlFor="new-deck-name-input">
              Deck Name
              <input
                type="text"
                placeholder="Enter a deck name"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </label>
            <Helper helperText={helperText} />
          </form>
          <div className="modal-button-group">
            <ImportButton setShowModal={props.setShowModal} />
            <button onClick={() => handleButtonClick()}>Create</button>
          </div>
        </div>
      ) : (
        <AddCardModal selectedKey={newKey} />
      )}
    </>
  );
}

export default NewDeckModal;

const Helper = ({ helperText }) => {
  switch (helperText) {
    case 1:
      return <span className="helper">Click create to proceed</span>;
    case 2:
      return (
        <span className="helper error">
          Deck name already exists! Type something different.
        </span>
      );
    case 3:
      return <span className="helper error">Deck name is too long!</span>;
    default:
      return null;
  }
};
