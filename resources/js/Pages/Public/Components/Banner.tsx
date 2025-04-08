import React from 'react';
import { ArrowRight } from '@/Assets';

// Define the prop types for the Banner component
interface BannerProps {
  children?: React.ReactNode;
  icon?: string | React.ReactElement; // Can be a string URL or a React component
  text?: string; 
  additionalText?: string; // Optional text to display
  animateIcon?: boolean; // New prop to control animation
}

export default function Banner({ 
  children, 
  icon = ArrowRight, // Default to ArrowRight if no icon is provided
  text = "Get Started for free",
  additionalText,
  animateIcon = true // Animation is on by default
}: BannerProps) {
  return (
    <div className='z-10 fixed w-full flex items-center justify-center gap-3 py-3 text-sm text-white bg-black'>
      <div className='inline-flex items-center gap-1'>
        <p className='hidden text-white/60 md:block'>
         {additionalText}
        </p>
        <p>{text}</p>
        {/* Handle both string paths and React components with animation */}
        {typeof icon === 'string' ? (
          <img 
            src={icon} 
            alt="Icon" 
            className={`inline-flex items-center justify-center w-4 h-4 ${animateIcon ? 'animate-arrow-pulse' : ''}`} 
          />
        ) : (
          <span 
            className={`inline-flex items-center justify-center w-4 h-4 ${animateIcon ? 'animate-arrow-pulse' : ''}`}
          >
            {icon}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}