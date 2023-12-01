import React, { useEffect, useState } from "react";

const PersonalDeck = (props) => {
  const [activeKey, setActiveKey] = useState("");
  const [localStorageKeys, setLocalStorageKeys] = useState(
    Object.keys(localStorage)
  );

  const handleLocalStorageKeyClick = (key) => {
    props.onKeySelect(key);
    props.resetCurrentIndex(0);
    setActiveKey(key);
  };

  const handleLoadKeys = (key) => {
    const deckData = localStorage.getItem(key);
    const deckArray = deckData ? JSON.parse(deckData) : [];
    const cardCount = deckArray.cards ? deckArray.cards.length : 0;
    return cardCount;
  };

  useEffect(() => {
    // Update localStorageKeys when the keys in localStorage change
    const handleStorageChange = () => {
      setLocalStorageKeys(Object.keys(localStorage));
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="deck-content">
        {localStorageKeys.length > 0 ? (
          localStorageKeys.map((key) => (
            <>
              <div
                key={key}
                onClick={() => handleLocalStorageKeyClick(key)}
                className={activeKey === key ? "active" : ""}
              >
                <span className="title">{key}</span>
                <div className="row">
                  <span>{handleLoadKeys(key)} cards</span>
                  <span>view all cards</span>
                </div>
              </div>
              <hr />
            </>
          ))
        ) : (
          <span>NoKeys</span>
        )}
      </div>
    </>
  );
};

export default PersonalDeck;
