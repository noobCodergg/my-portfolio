import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const toggleVisibility = () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (scrolled / height) * 100;

    setScrollPercent(scrolledPercentage);

    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: `conic-gradient(#C80541 ${scrollPercent}%, #333 ${scrollPercent}% 100%)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'background 0.2s linear'
        }}
        title="Scroll to Top"
      >
        ↑
      </div>
    )
  );
};

export default ScrollToTopButton;
