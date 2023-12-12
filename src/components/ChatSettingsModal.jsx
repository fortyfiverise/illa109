import React, { useState } from "react";

const ChatSettingsModal = (props) => {
  return (
    <>
      <div className="modal-content">
        <form>
          <div className="inline-group">
            <select
              value={props.language}
              onChange={(event) => props.setLanguage(event.target.value)}
            >
              <option value="english">English</option>
              <option value="vietnamese">Vietnamese</option>
              <option value="korean">Korean</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
              <option value="thai">Thai</option>
            </select>
          </div>
          <span className="helper">Select the language.</span>
        </form>
        <div className="modal-button-group single-btn">
          <button onClick={() => props.setShowModal(false)}>Save</button>
        </div>
      </div>
    </>
  );
};

export default ChatSettingsModal;
