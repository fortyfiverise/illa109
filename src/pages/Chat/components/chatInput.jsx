import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

const ChatInput = ({ onSendMessage }) => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const mic = new SpeechRecognition();

  mic.continuous = true;
  mic.interimResults = true;
  mic.lang = "en-US";

  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isListening) {
      mic.start();
    } else {
      mic.stop();
    }

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setMessage(transcript);
    };

    mic.onerror = (event) => {
      console.log(event.error);
    };

    mic.onend = () => {
      if (isListening) {
        console.log("Continue listening...");
        mic.start();
      }
    };

    return () => {
      mic.stop();
      mic.onresult = null;
      mic.onerror = null;
      mic.onend = null;
    };
  }, [isListening]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <FontAwesomeIcon
        icon={faMicrophone}
        onClick={() => setIsListening((prevState) => !prevState)}
        className={isListening ? "active" : ""}
      />
      <input
        autoComplete="off"
        placeholder="Type your message here"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="send-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
