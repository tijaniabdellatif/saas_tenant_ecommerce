import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

interface MouseFollowerProps {
  // Default styles
  defaultColor?: string;
  defaultSize?: number;
  
  // Button style 1 (gold)
  primaryColor?: string;
  primaryHoverSize?: number;
  
  // Button style 2 (neutral)
  secondaryColor?: string;
  secondaryHoverSize?: number;
  
  // Link style
  linkColor?: string;
  linkHoverSize?: number;
  
  // General settings
  opacity?: number;
  trail?: boolean;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({
  // Default styles
  defaultColor = '#475569',
  defaultSize = 10,
  
  // Button style 1 (gold)
  primaryColor = '#D4AF37',
  primaryHoverSize = 60,
  
  // Button style 2 (neutral)
  secondaryColor = '#475569',
  secondaryHoverSize = 50,
  
  // Link style
  linkColor = '#475569',
  linkHoverSize = 30,
  
  // General settings
  opacity = 0.7,
  trail = true,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Hover states
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<'gold' | 'neutral' | 'link' | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Spring configurations for smooth movement
  const smoothConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, smoothConfig);
  const y = useSpring(mouseY, smoothConfig);

  // Trail dots (with increasing delay)
  const trail1X = useSpring(mouseX, { damping: 35, stiffness: 250 });
  const trail1Y = useSpring(mouseY, { damping: 35, stiffness: 250 });
  const trail2X = useSpring(mouseX, { damping: 45, stiffness: 200 });
  const trail2Y = useSpring(mouseY, { damping: 45, stiffness: 200 });

  useEffect(() => {
    // Check if this is a mobile device
    const checkMobile = () => {
      const isTouchDevice = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(isTouchDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Show cursor after a short delay to prevent initial flash
    const visibilityTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Mouse tracking handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Find the element under the cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      
      if (elementUnderCursor) {
        // Check elements and their parent elements up to 5 levels up
        let currentElement: Element | null = elementUnderCursor;
        let found = false;
        
        for (let i = 0; i < 5; i++) {
          if (!currentElement) break;
          
          // Function to check if element contains specific class
          const hasClass = (element: Element, className: string): boolean => {
            if (!element.classList) return false;
            
            // Handle escaped class names like bg-\[\#D4AF37\]
            if (className.includes('\\')) {
              const fullClassName = element.className.toString();
              return fullClassName.includes('#D4AF37');
            } 
            
            return element.classList.contains(className);
          };
          
          // Function to safely check background color of HTMLElement
          const hasBackgroundColor = (element: Element, color: string): boolean => {
            if (element instanceof HTMLElement) {
              return element.style.backgroundColor === color;
            }
            return false;
          };
          
          // Check for gold buttons (look for the gold color in any ancestor)
          const isGoldButton = 
            hasClass(currentElement, 'bg-[#D4AF37]') || 
            currentElement.className.toString().includes('D4AF37') ||
            hasBackgroundColor(currentElement, '#D4AF37');
          
          // Check for neutral buttons
          const isNeutralButton = 
            hasClass(currentElement, 'bg-neutral-800') || 
            hasBackgroundColor(currentElement, '#475569');
          
          // Check for links or Inertia links
          const isLink = 
            currentElement.tagName === 'A' ||
            currentElement.hasAttribute('href') || 
            hasClass(currentElement, 'inertia-link') ||
            (currentElement.getAttribute && currentElement.getAttribute('role') === 'link');
          
          if (isGoldButton) {
            setIsHovering(true);
            setHoverType('gold');
            found = true;
            break;
          } else if (isNeutralButton) {
            setIsHovering(true);
            setHoverType('neutral');
            found = true;
            break;
          } else if (isLink) {
            setIsHovering(true);
            setHoverType('link');
            found = true;
            break;
          }
          
          // Move up to parent element
          currentElement = currentElement.parentElement;
        }
        
        if (!found) {
          setIsHovering(false);
          setHoverType(null);
        }
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    // Handle mouse entering/leaving the window
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(visibilityTimeout);
    };
  }, [mouseX, mouseY]);

  // Helper function to get correct color and size based on hover type
  const getHoverStyles = () => {
    if (!isHovering) return { color: defaultColor, size: defaultSize };
    
    switch (hoverType) {
      case 'gold':
        return { color: primaryColor, size: primaryHoverSize };
      case 'neutral':
        return { color: secondaryColor, size: secondaryHoverSize };
      case 'link':
        return { color: linkColor, size: linkHoverSize };
      default:
        return { color: defaultColor, size: defaultSize };
    }
  };

  // Don't render on mobile
  if (isMobile) return null;

  const hoverStyles = getHoverStyles();

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              x,
              y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: hoverStyles.size,
                height: hoverStyles.size,
                backgroundColor: hoverStyles.color,
                opacity: isHovering ? opacity : opacity * 0.8,
                boxShadow: isHovering 
                  ? `0 0 20px 5px ${hoverStyles.color}40` 
                  : `0 0 10px 2px ${defaultColor}20`,
              }}
              transition={{
                type: "spring",
                damping: 17,
                stiffness: 250,
                bounce: 0.4
              }}
            />
            
            {/* Pulsing ring when hovering */}
            {isHovering && (
              <motion.div
                className="absolute rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  backgroundColor: 'transparent',
                  border: `1px solid ${hoverStyles.color}`,
                }}
                animate={{
                  width: [hoverStyles.size, hoverStyles.size * 1.5],
                  height: [hoverStyles.size, hoverStyles.size * 1.5],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  repeat: Infinity,
                }}
              />
            )}
          </motion.div>
          
          {/* Trail elements */}
          {trail && (
            <>
              {/* First trail dot */}
              <motion.div
                className="pointer-events-none fixed top-0 left-0 z-40"
                style={{
                  x: trail1X,
                  y: trail1Y,
                  translateX: '-50%',
                  translateY: '-50%',
                  opacity: 0.25,
                }}
              >
                <motion.div
                  className="rounded-full"
                  style={{
                    width: defaultSize * 0.8,
                    height: defaultSize * 0.8,
                    backgroundColor: isHovering ? hoverStyles.color : defaultColor,
                  }}
                />
              </motion.div>
              
              {/* Second trail dot */}
              <motion.div
                className="pointer-events-none fixed top-0 left-0 z-30"
                style={{
                  x: trail2X,
                  y: trail2Y,
                  translateX: '-50%',
                  translateY: '-50%',
                  opacity: 0.12,
                }}
              >
                <motion.div
                  className="rounded-full"
                  style={{
                    width: defaultSize * 0.6,
                    height: defaultSize * 0.6,
                    backgroundColor: isHovering ? hoverStyles.color : defaultColor,
                  }}
                />
              </motion.div>
            </>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default MouseFollower;