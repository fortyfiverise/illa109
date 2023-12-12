import React from "react";
import DeckSettingsModal from "./DeckSettingsModal";
import EditCardModal from "./EditCardModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import NewDeckModal from "./NewDeckModal";
import ChatSettingsModal from "./ChatSettingsModal";

const Modal = (props) => {
  const handleClick = (event) => {
    if (
      event.target.className === "overlay" ||
      event.target.tagName === "svg"
    ) {
      props.setShowModal(false);
    }
  };

  return (
    <>
      <motion.div
        className="overlay"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="modal"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="modal-header">
            <span>Options</span>
            <FontAwesomeIcon icon={faXmark} onClick={handleClick} />
          </div>
          {props.whatModal === "DeckSettings" && (
            <DeckSettingsModal
              selectedKey={props.selectedKey}
              setShowModal={props.setShowModal}
            />
          )}
          {props.whatModal === "EditCard" && (
            <EditCardModal
              setShowModal={props.setShowModal}
              object={props.object}
              selectedKey={props.selectedKey}
              currentIndex={props.currentIndex}
              placeHolderValue={props.placeHolderValue}
            />
          )}
          {props.whatModal === "NewDeck" && (
            <NewDeckModal setShowModal={props.setShowModal} />
          )}
          {props.whatModal === "ChatSettings" && (
            <ChatSettingsModal
              setShowModal={props.setShowModal}
              language={props.language}
              setLanguage={props.setLanguage}
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Modal;
