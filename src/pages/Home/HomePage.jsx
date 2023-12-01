import React from "react";
import { motion } from "framer-motion";

function HomePage() {
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
              <div className="title">HOME</div>
            </div>
          </div>
          <div className="home">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span>
                <strong>ILLA</strong>, or
                <strong> Interactive Language Learning App</strong>, is a
                technologically advanced language learning application designed
                to address existing issues in language learning systems. It
                integrates cutting-edge technologies, including Artificial
                Intelligence (AI), to offer users a personalized and interactive
                language learning experience. It leverages the use of AI to
                further enchance the user experience.
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="features"
            >
              <div>
                <span>FLASHCARDS</span>
                <span>
                  A highly customizable deck/flashcard system that ensures a
                  systematic progression in language acquisition, allowing users
                  to focus on different language components, such as vocabulary,
                  grammar, and cultural nuances, in a well-organized manner.
                </span>
              </div>
              <div>
                <span>CHAT BUDDY</span>
                <span>
                  It is an AI chat buddy that serves as a virtual mentor, guide,
                  and companion, assisting users in exploring and learning new
                  languages and cultures. It provides an interactive and dynamic
                  conversation experience.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default HomePage;
