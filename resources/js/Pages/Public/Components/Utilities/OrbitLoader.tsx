import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const OrbitlLoader = () => {
    return (
      <div className="relative flex items-center justify-center w-48 h-48">
        {/* Outer orbit */}
        <motion.div
          className="absolute w-full h-full rounded-full border-2 border-dashed border-[#475569]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner orbit */}
        <motion.div
          className="absolute w-3/4 h-3/4 rounded-full border-2 border-dashed border-[#D4AF37]/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Orbiting element 1 (outer) */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-[#475569]"
          animate={{
            x: [0, 40, 0, -40, 0],
            y: [-40, 0, 40, 0, -40],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Orbiting element 2 (inner) */}
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-[#D4AF37]"
          animate={{
            x: [0, -20, 0, 20, 0],
            y: [20, 0, -20, 0, 20],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Central element */}
        <motion.div
          className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg"
          animate={{ 
            boxShadow: [
              '0 0 0 0 rgba(212, 175, 55, 0.3)',
              '0 0 20px 5px rgba(212, 175, 55, 0.4)',
              '0 0 0 0 rgba(212, 175, 55, 0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/80"
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    );
  };

export default OrbitlLoader;