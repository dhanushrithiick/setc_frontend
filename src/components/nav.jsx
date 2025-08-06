import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../stylesheets/nav.css';

const SideMenuBtn = ({ crossed, toggle }) => {
  return (
    <button
      className="side-menu-btn"
      aria-expanded={crossed}
      onClick={toggle}
    >
      <motion.div
        className="bar"
        initial={{ translateY: '-4.5px' }}
        animate={
          crossed
            ? { rotate: '45deg', translateY: '1px' }
            : { translateY: '-4.5px', rotate: '0deg' }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        className="bar"
        initial={{ translateY: '4.5px' }}
        animate={
          crossed
            ? { rotate: '-45deg', translateY: '-1px' }
            : { translateY: '4.5px', rotate: '0deg' }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
    </button>
  );
};

const SlidingPanel = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="sliding-panel"
          role="navigation"
        >
          <div className="nav_content">
            <ul className="nav_container1">
              <li><Link to="/" onClick={onClose}>Home</Link></li>
              <li><Link to="/about" onClick={onClose}>About us</Link></li>
              <li><Link to="/pathways" onClick={onClose}>Pathways</Link></li>
              <li><Link to="/meettheteam" onClick={onClose}>Meet the team</Link></li>
              <li><Link to="/contact" onClick={onClose}>Contact us</Link></li>
            </ul>
            <ul className="nav_container2">
              <li><a href="https://www.instagram.com/sri.eshwar_toastmasters_club/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://www.linkedin.com/in/sri-eshwar-toastmasters-club-7b331630b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                  <li><a href="https://www.youtube.com/@srieshwartoastmastersclub2417/videos" target="_blank" rel="noopener noreferrer">Youtube</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(prev => !prev);
  const closePanel = () => setIsOpen(false);

  return (
    <>
      <SideMenuBtn crossed={isOpen} toggle={togglePanel} />
      <SlidingPanel isOpen={isOpen} onClose={closePanel} />
    </>
  );
};

export default Navbar;
