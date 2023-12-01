import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post(
        "https://getform.io/f/d098a15b-2715-4716-80a1-13b1b07b71b3",
        formData
      )
      .then((response) => {
        console.log("Success:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              <div className="title">FEEDBACK</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="feedback-form">
            <motion.label
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </motion.label>

            <motion.label
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </motion.label>

            <motion.label
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Message
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </motion.label>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              type="submit"
            >
              Send
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default FeedbackPage;
