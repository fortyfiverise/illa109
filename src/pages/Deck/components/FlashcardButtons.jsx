import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faPenToSquare,
  faShuffle,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function FlashcardButtons(props) {
  const [randomIndex, setRandomIndex] = useState(false);
  const handleEditButton = () => {
    props.editCardModal(true);
  };
  const handleShuffleButton = () => {
    setRandomIndex(!randomIndex);
  };
  const handleNextButton = () => {
    if (randomIndex) {
      let max = props.cardCounter.max;
      let random = Math.floor(Math.random() * max);
      props.currentIndex(random);
    }
    props.currentIndex((prevIndex) => prevIndex + 1);
  };
  const handlePrevButton = () => {
    if (randomIndex) {
      let max = props.cardCounter.max;
      let random = Math.floor(Math.random() * max);
      props.currentIndex(random);
    }
    props.currentIndex((prevIndex) => prevIndex - 1);
  };
  const handleSpeakButton = () => {
    alert(props.textOutput.front);
  };

  return (
    <div className="card-btn-grp">
      <div className="left-btn-grp">
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="2xl"
          onClick={props.selectedKey ? handleEditButton : null}
        />
        <FontAwesomeIcon
          icon={faShuffle}
          size="2xl"
          className={randomIndex ? "active" : ""}
          onClick={props.selectedKey ? handleShuffleButton : null}
        />
      </div>
      <div className="center-btn-grp">
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          size="2xl"
          onClick={props.selectedKey ? handlePrevButton : null}
        />
        <div className="row">
          <span className="counter">
            {props.cardCounter.max === 0
              ? "0/0"
              : `${props.cardCounter.curr + 1}/${props.cardCounter.max}`}
          </span>
          <span className="card-indicator">
            {props.cardIndicator ? "BACK" : "FRONT"}
          </span>
        </div>
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          size="2xl"
          onClick={props.selectedKey ? handleNextButton : null}
        />
      </div>
      <FontAwesomeIcon
        icon={faVolumeHigh}
        size="2xl"
        onClick={props.selectedKey ? handleSpeakButton : null}
      />
    </div>
  );
}
export default FlashcardButtons;
