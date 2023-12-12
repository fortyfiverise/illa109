import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import DeckPage from "./pages/Deck/DeckPage";
import ChatPage from "./pages/Chat/ChatPage";
import ViewDeck from "./pages/ViewDeck/ViewDeck";
import FeedbackPage from "./pages/Feedback/FeedbackPage";
import NavBar from "./components/NavBar";
import "./assets/style.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deck" element={<DeckPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/viewdeck/:selectedKey" element={<ViewDeck />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
