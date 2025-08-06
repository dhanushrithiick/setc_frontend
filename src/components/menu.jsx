import { motion } from 'framer-motion';
import { useState } from 'react';

const Menu = ({ setIsOpen }) => {
  const [crossed, setCrossedState] = useState(false);

  const handleClick = () => {
    setCrossedState(!crossed);  // Toggle the crossed state
    setIsOpen((prevState) => !prevState);  // Toggle menu state
  };

  return (
    <button
      aria-expanded={crossed}
      onClick={handleClick}
      className="flex aspect-square h-fit bg-transparent  flex-col items-center justify-center cursor-pointer "
    >
      <motion.div
        style={{
          width: '34px',
          borderTop: '1px solid #fff',
          transformOrigin: 'center',
        }}
        initial={{ translateY: '-4.5px' }}
        animate={
          crossed
            ? { rotate: '45deg', translateY: '1px' }
            : { translateY: '-4.5px', rotate: '0deg' }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: '34px',
          borderTop: '1px solid #fff',
          transformOrigin: 'center',
        }}
        initial={{ translateY: '4.5px' }}
        animate={
          crossed
            ? { rotate: '-45deg', translateY: '-1px' }
            : { translateY: '4.5px', rotate: '0deg', scaleX: 1 }
        }
      />
    </button>
  );
};

export default Menu;
