
import React, { useState, useEffect } from 'react';

const FlashlightCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* The Flashlight Halo */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(250, 146, 255, 0.05), transparent 80%)`
        }}
      />
      
      {/* The Small Cursor Dot */}
      <div 
        className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-peanuts-accent pointer-events-none z-[10000] mix-blend-difference transition-transform duration-200 ease-out`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 2.5 : 1})`,
          boxShadow: isPointer ? '0 0 20px rgba(250, 146, 255, 0.6)' : 'none'
        }}
      />
    </>
  );
};

export default FlashlightCursor;
