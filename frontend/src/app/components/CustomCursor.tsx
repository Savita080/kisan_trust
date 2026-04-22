import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { isDarkTheme } = useTheme();

  // On mount, listen to mouse move across the entire window
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Check if what we're hovering over is clickable
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const computedStyle = window.getComputedStyle(target);
      const isClickable = 
        computedStyle.cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
        
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important; /* Hide original cursor globally */
        }
      `}</style>

      {/* The trailing transparent ring dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] border transition-colors duration-300"
        style={{
          borderColor: isDarkTheme ? 'rgba(255, 255, 255, 0.4)' : 'rgba(100, 180, 60, 0.7)',
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          marginLeft: isHovering ? -24 : -16,
          marginTop: isHovering ? -24 : -16,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 45, mass: 0.2 }}
      />
      
      {/* The solid center dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100000] mix-blend-difference"
        style={{
          backgroundColor: '#FAFBF7', // Always use a high-contrast dot with mix-blend-difference
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          opacity: isHovering ? 0 : 1, // Hide solid dot when hovering over clickable
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 2500, damping: 100, mass: 0.05 }}
      />
    </>
  );
}
