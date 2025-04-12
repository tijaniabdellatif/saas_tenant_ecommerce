import { cn } from "@/libs/utils";
import { useRef, useState, useEffect } from "react";
import SectionContent from "../Components/Utilities/SectionContent";
import LandingButton from "../Components/Utilities/LandingButton";
import Orbit from "../Components/Utilities/Orbit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import AnimationData from '@/Assets/Lottie_Lego.json';
import { motion } from 'framer-motion';
import { sectionFeaturs, featureLogos } from "@/libs/constants";



export default function Features() {
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [autoHighlightIndex, setAutoHighlightIndex] = useState(0);
    const orbitContainerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState(370);

    // Detect touch device on component mount
    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        // For touch devices, set up automatic highlighting cycle
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            const interval = setInterval(() => {
                setAutoHighlightIndex((prevIndex) => (prevIndex + 1) % sectionFeaturs.length);
            }, 3000); // Change highlight every 3 seconds

            return () => clearInterval(interval);
        }
    }, []);

    // Handle responsive sizing of orbit container
    useEffect(() => {
        const updateOrbitSize = () => {
            if (orbitContainerRef.current) {
                const parentWidth = orbitContainerRef.current.parentElement?.clientWidth || 0;
                // For mobile (under 768px), we want to adjust the size based on available width
                if (window.innerWidth < 768) {
                    // Make sure it has margins on smaller screens
                    const newSize = Math.min(parentWidth - 32, 370); // subtract 32px (16px each side)
                    setContainerSize(newSize);
                } else {
                    // For desktop, use the original size
                    setContainerSize(370);
                }
            }
        };

        // Initialize size
        updateOrbitSize();

        // Add resize listener
        window.addEventListener('resize', updateOrbitSize);

        // Cleanup
        return () => window.removeEventListener('resize', updateOrbitSize);
    }, []);

    // Handle mouse/touch interactions
    const handleInteractionStart = (featureIndex: number) => {
        setActiveFeatureIndex(featureIndex);
    };

    const handleInteractionEnd = () => {
        // Only clear on mouse devices - on touch we keep the selection
        if (!isTouchDevice) {
            setActiveFeatureIndex(null);
        }
    };

    // Determine which feature to highlight
    const highlightedFeatureIndex = isTouchDevice
        ? (activeFeatureIndex !== null ? activeFeatureIndex : autoHighlightIndex)
        : activeFeatureIndex;

    // Calculate orbit sizes proportionally based on container size
    const outerOrbitSize = containerSize;
    const middleOrbitSize = containerSize * (280 / 370);
    const innerOrbitSize = containerSize * (180 / 370);
    const centerSize = containerSize * (80 / 370);
    const logoSize = containerSize * (64 / 370);
    const orbitRadius = containerSize / 2;

    return (
        <section className={cn([
            'py-10 md:py-12',
            'bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626]'
        ])}>

            <SectionContent classes="relative flex flex-col md:flex-row justify-between items-center">
                {/* Left side content */}
                <div className="relative w-full mb-12 md:w-1/2 md:mb-0 pricing-head_before">
                    <h2 className={cn([
                        'text-xl md:text-3xl font-semibold tracking-tighter',
                        'font-poppins',
                        "w-full",
                        'bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text',
                    ])}>Your store is Managed by AI-empowered tools</h2>
                    <ul className="flex flex-col gap-8 mt-10 mb-4">
                        {
                            sectionFeaturs.map((item, index) => (
                                <motion.li
                                    key={item}
                                    className={cn([
                                        "flex items-center gap-2 transition-all duration-300",
                                        // Add a highlight effect when the corresponding logo is active
                                        highlightedFeatureIndex === index
                                            ? "scale-105 bg-amber-50 p-2 rounded-md -ml-2 shadow-sm"
                                            : ""
                                    ])}
                                    onClick={() => setActiveFeatureIndex(index)} // For touch devices
                                >
                                    <FontAwesomeIcon
                                        size={'1x'}
                                        className={cn([
                                            "flex-shrink-0 transition-colors duration-300",
                                            highlightedFeatureIndex === index ? "text-amber-500" : "text-[#D4AF37]"
                                        ])}
                                        icon={faCircleCheck}
                                    />
                                    <span className={cn([
                                        "font-medium text-md transition-colors duration-300",
                                        highlightedFeatureIndex === index ? "text-black" : "text-slate-500"
                                    ])}>
                                        {item}
                                    </span>
                                </motion.li>
                            ))
                        }
                    </ul>

                    <div className="flex justify-center w-full lg:justify-start">
                    

                        <LandingButton
                            text='Discover more'
                             buttonClassName='text-white bg-[#D4AF37] mt-5 md:w-[200px] lg:mx-0'
                            animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                            isTransparent={true}
                            fullWidthOnMobile={true}
                             marginClassName="lg:ml-0 lg:mr-auto"
                        />
                    </div>

                </div>

                {/* Right side - Orbits */}
                <div ref={orbitContainerRef} className="flex justify-center w-full md:w-1/2 md:pl-4">
                    <div
                        className="relative flex items-center justify-center mx-auto"
                        style={{
                            width: `${containerSize}px`,
                            height: `${containerSize}px`,
                            maxWidth: '95%'
                        }}
                    >
                        {/* Static orbits */}
                        <Orbit
                            className="absolute border-2 border-gray-300 rounded-full"
                            style={{ width: `${outerOrbitSize}px`, height: `${outerOrbitSize}px` }}
                        />
                        <Orbit
                            className="absolute border-2 border-gray-300 rounded-full"
                            style={{ width: `${middleOrbitSize}px`, height: `${middleOrbitSize}px` }}
                        />
                        <Orbit
                            className="absolute border-2 border-gray-300 rounded-full"
                            style={{ width: `${innerOrbitSize}px`, height: `${innerOrbitSize}px` }}
                        />

                        {/* Center logo with Lottie animation */}
                        <div
                            className="absolute z-10 flex items-center justify-center"
                            style={{ width: `${centerSize}px`, height: `${centerSize}px` }}
                        >
                            <Lottie
                                onComplete={() => {
                                    phoneAnimationRef.current?.setDirection(-1);
                                    phoneAnimationRef.current?.play();
                                }}
                                animationData={AnimationData}
                                lottieRef={phoneAnimationRef}
                                loop={true}
                                className='object-contain w-full h-full'
                            />
                        </div>

                        {/* Rotating container for the logos */}
                        <motion.div
                            className="absolute"
                            style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 40,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >
                            {/* Individual logos positioned on the outer orbit */}
                            {featureLogos.map((logo) => {
                                const iconSize = containerSize * (40 / 370); // Proportional icon size
                                const logoContainerSize = containerSize * (64 / 370); // Proportional logo container size
                                const isHighlighted = highlightedFeatureIndex === logo.featureIndex;

                                return (
                                    <div
                                        key={logo.id}
                                        className="absolute"
                                        style={{
                                            width: `${logoContainerSize}px`,
                                            height: `${logoContainerSize}px`,
                                            left: `calc(50% - ${logoContainerSize / 2}px)`,
                                            top: `calc(50% - ${logoContainerSize / 2}px)`,
                                            transform: `rotate(${logo.rotate}deg) translateX(${orbitRadius}px) rotate(-${logo.rotate}deg)`,
                                            pointerEvents: 'all',
                                            zIndex: isHighlighted ? 5 : 1,
                                        }}
                                    >
                                        <div
                                            className="relative flex items-center justify-center w-full h-full"
                                            onMouseEnter={() => handleInteractionStart(logo.featureIndex)}
                                            onMouseLeave={handleInteractionEnd}
                                            onClick={() => handleInteractionStart(logo.featureIndex)}
                                            onTouchStart={() => handleInteractionStart(logo.featureIndex)}
                                        >
                                            <motion.img
                                                src={logo.source as string}
                                                alt={logo.alt}
                                                style={{
                                                    width: `${iconSize}px`,
                                                    height: `${iconSize}px`
                                                }}
                                                className="object-contain cursor-pointer"
                                                animate={{
                                                    rotate: isHighlighted ? [0, 10, -10, 0] : 0,
                                                    scale: isHighlighted ? 1.2 : 1
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    repeat: isHighlighted ? Infinity : 0,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </SectionContent>
        </section>
    )
}