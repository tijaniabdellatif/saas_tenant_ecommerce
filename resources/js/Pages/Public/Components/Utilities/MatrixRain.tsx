import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const MatrixRain = () => {
    // Create columns for the Matrix effect
    const columns = useMemo(() => {
      return Array.from({ length: 30 }, (_, i) => {
        const speed = Math.random() * 15 + 15; // seconds
        const delay = Math.random() * -10; // negative delay for staggered start
        const xPos = `${Math.random() * 100}%`;
        const fontSize = Math.random() * 0.4 + 0.8; // rem
        const opacity = Math.random() * 0.12 + 0.05;
        
        // Create predominantly "01" with occasional "ENIMSAY" characters
        const chars = Math.random() > 0.8 
          ? 'ENIMSAY'.split('')
          : '01'.split('');
        
        // Random column length
        const columnLength = Math.floor(Math.random() * 15) + 8;
          
        return {
          id: i,
          xPos,
          speed,
          delay,
          fontSize,
          opacity,
          chars: Array.from({ length: columnLength }, () => 
            chars[Math.floor(Math.random() * chars.length)]
          )
        };
      });
    }, []);
  
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {columns.map(column => (
          <motion.div
            key={column.id}
            className="absolute top-0 flex flex-col items-center"
            style={{
              left: column.xPos,
              color: '#475569',
              opacity: column.opacity,
              fontSize: `${column.fontSize}rem`,
            }}
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            transition={{
              duration: column.speed,
              repeat: Infinity,
              ease: "linear",
              delay: column.delay,
            }}
          >
            {column.chars.map((char, i) => (
              <div 
                key={i} 
                className="my-1 font-mono font-bold"
                style={{
                  opacity: Math.max(0.3, 1 - (i / column.chars.length)),
                }}
              >
                {char}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
  };
  

export default MatrixRain;