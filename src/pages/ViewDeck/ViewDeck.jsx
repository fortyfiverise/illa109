import React from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ViewDeck() {
  const { selectedKey } = useParams();

  const deckData = JSON.parse(localStorage.getItem(selectedKey));

  return (
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
            <div
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
            </div>
          </div>
        </div>
        <div className="card-table">
          {deckData && deckData.cards && (
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Front</th>
                  <th>Back</th>
                </tr>
              </thead>
              <tbody>
                {deckData.cards.map((card, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ViewDeck;
