import React, { useState } from 'react';

const NavIcon = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  //   {isOpen ? "hamburger hamburger--collapse" : "hamburger hamburger--collapse is-active" }
  return (
    <button
      className={
        isOpen
          ? 'hamburger hamburger--collapse'
          : 'hamburger hamburger--collapse is-active'
      }
      onClick={handleIsOpen}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default NavIcon;
