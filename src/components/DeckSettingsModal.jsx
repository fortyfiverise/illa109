import React, { useState } from "react";
import ExportButton from "./ExportButton";
import DeleteButton from "./DeleteButton";
import AddCardModal from "./AddCardModal";

const DeckSettingsModal = (props) => {
  const [modal, setModal] = useState(true);
  const [selectedKey, setSelectedKey] = useState(props.selectedKey);
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [helperText, setHelperText] = useState(1);

  const handleEditDeckName = (event) => {
    event.preventDefault();
    const newDeckName = inputValue.trim();

    if (!newDeckName) {
      return;
    } else {
      const itemValue = localStorage.getItem(selectedKey);

      localStorage.removeItem(selectedKey);

      localStorage.setItem(newDeckName, itemValue);

      setInputValue("");
      setInputDisabled(true);

      window.handleStorageChange();
      setSelectedKey(newDeckName);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setHelperText(1);
    if (event.target.value.length >= 30) {
      setHelperText(3);
    } else if (localStorage.getItem(event.target.value) !== null) {
      setHelperText(2);
    }
  };

  const handleViewAllCards = () => {
    window.open(`/viewdeck/${selectedKey}`, "_blank");
  };

  return (
    <>
      {modal ? (
        <div className="modal-content">
          <span className="modal-deck-name">{selectedKey}</span>
          <form onSubmit={handleEditDeckName}>
            <div className="inline-group">
              <input
                type="text"
                placeholder="Enter a new deck name"
                autoComplete="off"
                value={inputValue}
                onChange={handleInputChange}
                disabled={inputDisabled}
              />
              <button type="submit" disabled={inputDisabled}>
                Set
              </button>
            </div>
            <Helper helperText={helperText} />
          </form>
          <div className="modal-button-group">
            <DeleteButton selectedKey={selectedKey} />
            <ExportButton selectedKey={selectedKey} />
            <button onClick={handleViewAllCards}>View all cards</button>
            <button onClick={() => setModal(!modal)}>Add card</button>
          </div>
        </div>
      ) : (
        <AddCardModal
          selectedKey={selectedKey}
          setShowModal={props.setShowModal}
        />
      )}
    </>
  );
};

export default DeckSettingsModal;

const Helper = ({ helperText }) => {
  switch (helperText) {
    case 1:
      return <span className="helper">Set a new deck name.</span>;
    case 2:
      return (
        <span className="helper error">
          Deck name already exists! Type something different.
        </span>
      );
    case 3:
      return <span className="helper error">Deck name is too long.</span>;
    default:
      return null;
  }
};
