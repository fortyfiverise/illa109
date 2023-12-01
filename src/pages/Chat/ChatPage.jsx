import React, { useState } from "react";
import axios from "axios";
import ChatMessages from "./components/chatBox";
import ChatForm from "./components/chatInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const apiKey = "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";

  const sendMessage = async (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: message },
      { type: "wait", text: "● ● ●" },
    ]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          prompt: "converstate in thai," + message,
          model: "text-davinci-003",
          temperature: 0,
          max_tokens: 800,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const chatbotResponse = response.data.choices[0].text;

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { type: "bot", text: chatbotResponse },
      ]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  const handleButtonClick = () => {
    setShowModal(true);
    console.error("e");
  };

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
              <div className="title">CHAT BUDDY</div>
            </div>
            <div
              className="subtitle"
              title="Settings"
              onClick={handleButtonClick}
            >
              <FontAwesomeIcon icon={faGear} />
            </div>
          </div>
          <ChatMessages messages={messages} />
          <ChatForm onSendMessage={sendMessage} />
        </div>
      </motion.div>
    </>
  );
};

export default ChatPage;
