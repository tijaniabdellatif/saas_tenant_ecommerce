
import React from 'react';


interface EnimsayLogoProps {
    width?: number;
    height?: number;
    className?: string;
    alt?: string;
}



export default function Logo({ width = 400, height = 200, className = '', alt = 'Enimsay logo' }: EnimsayLogoProps) {

    const aspectRatio = 400 / 200;
    const calculatedHeight = width / aspectRatio;
    const calculatedWidth = height * aspectRatio;

    // Use the provided dimensions, but maintain aspect ratio if only one dimension is provided
    const finalWidth = height && !width ? calculatedWidth : width;
    const finalHeight = width && !height ? calculatedHeight : height;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 200"
            width={finalWidth}
            height={finalHeight}
            className={className}
            preserveAspectRatio="xMidYMid meet"
            aria-labelledby="logoTitle"
            role="img"
        >
            <title id="logoTitle">{alt}</title>
            {/* No background or overlay rectangles */}

            {/* Decorative elements */}
            <path
                d="M50,100 C70,60 120,60 140,100 C160,140 210,140 230,100 C250,60 300,60 320,100"
                stroke="#FF6B35"
                strokeWidth="8"
                fill="none"
            />

            <path
                d="M80,150 C100,110 150,110 170,150 C190,190 240,190 260,150"
                stroke="#75B9BE"
                strokeWidth="6"
                fill="none"
                opacity="0.7"
            />

            {/* Main logo text */}
            <text
                x="200"
                y="110"
                fontFamily="Arial, sans-serif"
                fontSize="48"
                fontWeight="bold"
                textAnchor="middle"
                fill="#F7C59F"
            >
                enimsay
            </text>

            {/* Dot accent */}
            <circle cx="320" cy="85" r="10" fill="#FFD275" />

            {/* No gradient overlay */}

            {/* Optional: Gradient definitions kept for future use but not applied anywhere */}
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#547AA5" />
                    <stop offset="100%" stopColor="#FFD275" />
                </linearGradient>
            </defs>
        </svg>
    );
}