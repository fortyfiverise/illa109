import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    getInitialActiveLink(location.pathname)
  );

  const handleActiveLink = (id) => {
    setActiveLink(id);
  };

  function getInitialActiveLink(pathname) {
    switch (pathname) {
      case "/":
        return 1;
      case "/deck":
        return 2;
      case "/chat":
        return 3;
      case "/feedback":
        return 4;
      default:
        return 1;
    }
  }

  const isViewDeck = location.pathname.startsWith("/viewdeck");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="nav-bar"
      >
        <div className="nav-bar-wrapper">
          <div className="logo">
            <FontAwesomeIcon icon={faAccusoft} />
          </div>
          <div className="nav-btn-grp">
            {isViewDeck ? (
              <Link to="/" onClick={() => window.close()}>
                <div className="nav-title active">Return</div>
              </Link>
            ) : (
              <>
                <Link to="/" onClick={() => handleActiveLink(1)}>
                  <div
                    className={`nav-title ${activeLink === 1 ? "active" : ""}`}
                  >
                    Home
                  </div>
                </Link>
                <Link to="/deck" onClick={() => handleActiveLink(2)}>
                  <div
                    className={`nav-title ${activeLink === 2 ? "active" : ""}`}
                  >
                    Deck
                  </div>
                </Link>
                <Link to="/chat" onClick={() => handleActiveLink(3)}>
                  <div
                    className={`nav-title ${activeLink === 3 ? "active" : ""}`}
                  >
                    Chat
                  </div>
                </Link>
                <Link to="/feedback" onClick={() => handleActiveLink(4)}>
                  <div
                    className={`nav-title ${activeLink === 4 ? "active" : ""}`}
                  >
                    Feedback
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
