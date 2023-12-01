import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import PersonalDeck from "./components/PersonalDeck";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../components/Modal";
import Flashcard from "./components/Flashcard";
import FlashcardButtons from "./components/FlashcardButtons";

const DeckPage = () => {
  let object = {
    cards: [],
  };
  const [showModal, setShowModal] = useState(false);
  const [editCardModal, setEditCardModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardCounter, setCardCounter] = useState({ curr: 0, max: 0 });
  const [cardIndicator, setCardIndicator] = useState(false);
  const [cardOutput, setCardOutput] = useState({ front: "", back: "" });

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleKeySelect = (key) => {
    setSelectedKey(key);
  };

  useEffect(() => {
    if (selectedKey.length > 0) {
      let obj_deserialized = JSON.parse(localStorage.getItem(selectedKey));

      if (obj_deserialized && obj_deserialized.cards) {
        object = obj_deserialized;

        if (currentIndex >= object.cards.length) {
          setCurrentIndex(0);
        } else if (currentIndex < 0) {
          setCurrentIndex(object.cards.length - 1);
        } else {
          let front = object.cards[currentIndex].front;
          let back = object.cards[currentIndex].back;
          const cardCount = object.cards.length;
          setCardCounter({ curr: currentIndex, max: cardCount });
          setCardOutput({ front, back });
        }
      }
    }
  }, [selectedKey, currentIndex, editCardModal]);

  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="wrapper">
          <div className="component-title">
            <div>
              <div className="indicator"></div>
              <AnimatePresence mode="wait">
                <motion.div
                  className="title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key={selectedKey}
                >
                  {selectedKey.length === 0 ? (
                    "NO DECK SELECTED"
                  ) : (
                    <span>{selectedKey.toLocaleUpperCase()}</span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div
              className="subtitle"
              title="Settings"
              onClick={selectedKey ? handleButtonClick : null}
            >
              <FontAwesomeIcon icon={faGear} />
            </div>
          </div>
          <AnimatePresence node="wait">
            <Flashcard
              textOutput={cardOutput}
              onToggleFlip={() => setCardIndicator(!cardIndicator)}
            />
          </AnimatePresence>
          <FlashcardButtons
            selectedKey={selectedKey}
            textOutput={cardOutput}
            editCardModal={setEditCardModal}
            cardIndicator={cardIndicator}
            cardCounter={cardCounter}
            currentIndex={setCurrentIndex}
          />
        </div>

        <div className="wrapper">
          <div className="component-title">
            <div>
              <div className="indicator"></div>
              <div className="title">DECKS</div>
            </div>
            <div className="subtitle" title="New deck">
              <FontAwesomeIcon icon={faCirclePlus} />
            </div>
          </div>
          <div className="deck-selector">
            <AnimatePresence mode="wait">
              <PersonalDeck
                onKeySelect={handleKeySelect}
                resetCurrentIndex={setCurrentIndex}
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            selectedKey={selectedKey}
            whatModal={"DeckSettings"}
          />
        )}
        {editCardModal && (
          <Modal
            object={object}
            setShowModal={setEditCardModal}
            whatModal={"EditCard"}
            selectedKey={selectedKey}
            placeHolderValue={cardOutput}
            currentIndex={currentIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DeckPage;
