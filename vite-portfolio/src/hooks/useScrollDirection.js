import { useState, useEffect, useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const useScrollDirection = () => {
  const [direction, setDirection] = useState('up');
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const newDirection = latest > previous ? 'down' : 'up';
    
    if (newDirection !== direction && Math.abs(latest - previous) > 5) {
      setDirection(newDirection);
    }
    
    lastScrollY.current = latest;
  });

  return direction;
};

export default useScrollDirection;