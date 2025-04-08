import React, { useState } from 'react';

interface MenuIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  className?: string; // Added className prop
}

const MenuIcon: React.FC<MenuIconProps> = ({ 
  size = 24, 
  color = '#000', 
  onClick,
  className = '' // Default to empty string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100"
      width={size}
      height={size}
      onClick={handleClick}
      className={className} // Apply the className prop
      style={{ cursor: 'pointer' }}
    >
      <line 
        x1="25" y1="35" x2="75" y2="35"
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 6,
          strokeLinecap: 'round',
          transition: 'all 0.3s ease',
          transformOrigin: '50px 35px',
          transform: isOpen ? 'translateY(15px) rotate(45deg)' : 'none'
        }}
      />
      <line 
        x1="25" y1="50" x2="75" y2="50"
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 6,
          strokeLinecap: 'round',
          transition: 'all 0.3s ease',
          opacity: isOpen ? 0 : 1
        }}
      />
      <line 
        x1="25" y1="65" x2="75" y2="65"
        style={{
          fill: 'none',
          stroke: color,
          strokeWidth: 6,
          strokeLinecap: 'round',
          transition: 'all 0.3s ease',
          transformOrigin: '50px 65px',
          transform: isOpen ? 'translateY(-15px) rotate(-45deg)' : 'none'
        }}
      />
    </svg>
  );
};

export default MenuIcon;