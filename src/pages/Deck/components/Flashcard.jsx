import { useState } from "react";
import { motion } from "framer-motion";

function Flashcard(props) {
  const [toggleFlip, setToggleFlip] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    if (props.selectedKey.length != 0) {
      if (!isAnimating) {
        setToggleFlip(!toggleFlip);
        props.onToggleFlip(toggleFlip);
        setIsAnimating(!isAnimating);
      }
    }
  };
  return (
    <motion.div
      title="Click to flip"
      className="card"
      initial={false}
      animate={{
        rotateY: toggleFlip ? 180 : 360,
        scale: toggleFlip ? 1 : 0.95,
      }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setIsAnimating(false)}
      onClick={() => handleButtonClick()}
    >
      <motion.span
        key={toggleFlip}
        initial={false}
        animate={{ rotateY: toggleFlip ? 180 : 360 }}
      >
        {toggleFlip ? props.textOutput.front : props.textOutput.back}
      </motion.span>
    </motion.div>
  );
}
export default Flashcard;
