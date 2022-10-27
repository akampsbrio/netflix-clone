import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  //Use state for handling the transition
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  //use effect fires off the react script
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      window.addEventListener('scroll', transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        {/* Netflix Logo */}
        <img className="nav__logo" src="./logo.png" />

        {/* Avatar */}
        <img className="nav__avatar" src="./avatar.png" />
      </div>
    </div>
  );
};

export default Nav;
