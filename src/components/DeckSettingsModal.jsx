import React, { useState } from "react";
import ExportButton from "./ExportButton";
import DeleteButton from "./DeleteButton";
import AddCardModal from "./AddCardModal";
import { testing, toTesting } from "./test";

const DeckSettingsModal = (props) => {
  const [modal, setModal] = useState(true);
  const selectedKey = props.selectedKey;
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [helperText, setHelperText] = useState(1);

  const handleEditDeckName = (event) => {
    event.preventDefault();

    const newDeckName = inputValue.trim();

    if (newDeckName) {
      if (newDeckName.length <= 70) {
        if (localStorage.getItem(newDeckName) !== null) {
          setHelperText(2);
        } else {
          const itemValue = localStorage.getItem(selectedKey);

          localStorage.removeItem(selectedKey);

          localStorage.setItem(newDeckName, itemValue);

          setInputValue("");
          setInputDisabled(true);

          setHelperText(4);
        }
      } else {
        setHelperText(5);
      }
    } else {
      setHelperText(3);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const test = () => {
    testing(inputValue);
  };

  const toTest = () => {
    toTesting();
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
            <DeleteButton></DeleteButton>
            <ExportButton selectedKey={selectedKey} />
            <button>View all cards</button>
            <button onClick={() => setModal(!modal)}>Add card</button>
            <button onClick={() => test()}>Test</button>
            <button onClick={() => toTest()}>toTest</button>
          </div>
        </div>
      ) : (
        <AddCardModal selectedKey={selectedKey} />
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
          Deck already exists! Type something different.
        </span>
      );
    case 3:
      return <span className="helper error">Please enter a deck name.</span>;
    case 4:
      return <span className="helper success">Deck name updated!</span>;
    case 5:
      return <span className="helper error">Deck name is too long.</span>;
    default:
      return null;
  }
};
