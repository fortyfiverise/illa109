import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ChatMessages = ({ messages }) => {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chat-box" ref={chatBoxRef}>
      {messages.map((message, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={index}
          className={`message ${message.type}`}
        >
          <span>{message.text}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default ChatMessages;
