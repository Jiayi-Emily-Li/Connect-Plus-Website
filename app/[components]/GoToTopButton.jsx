'use client';
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={buttonStyle}>
       <FaArrowUp />
      </button>
    )
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '90px',
  right: '20px',
  padding: '10px',
  backgroundColor: '#87CEEB',
  color: '#000',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
};

export default GoToTopButton;
