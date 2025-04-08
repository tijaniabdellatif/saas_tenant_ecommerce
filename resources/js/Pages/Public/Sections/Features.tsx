import { cn } from "@/libs/utils";
import { useRef, useState, useEffect } from "react";
import {
    SEO,
    Seamless,
    Analytics,
    ImageGeneration,
    ProductDescription,
    ChatBot,
    Recommandation,
    Templating
} from '@/Assets';
import SectionContent from "../Components/Utilities/SectionContent";
import LandingButton from "../Components/Utilities/LandingButton";
import Orbit from "../Components/Utilities/Orbit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import AnimationData from '@/Assets/Lottie_Lego.json';
import { motion } from 'framer-motion';

interface IFeatureLogos {
    id: number,
    alt: string,
    source: string | React.ReactElement,
    rotate: number,
    featureIndex: number // Maps to the index in the features list
}

const sectionFeaturs = [
    'AI SEO Automation',
    'Effortless Installation',
    'Intelligent Analytics',
    'Robust Image & Description Generation',
    'AI Chatbot',
    'Robust Product Recommendations',
    'Beautiful Templates'
];

const featureLogos: IFeatureLogos[] = [
    {
        id: 1,
        alt: "SEO automation",
        source: SEO,
        rotate: 0,
        featureIndex: 0
    },
    {
        id: 2,
        alt: "Seamless Installation",
        source: Seamless,
        rotate: 45,
        featureIndex: 1
    },
    {
        id: 3,
        alt: "Analytics",
        source: Analytics,
        rotate: 90,
        featureIndex: 2
    },
    {
        id: 4,
        alt: "Image Generation",
        source: ImageGeneration,
        rotate: 135,
        featureIndex: 3
    },
    {
        id: 5,
        alt: "Product Description",
        source: ProductDescription,
        rotate: 180,
        featureIndex: 3
    },
    {
        id: 6,
        alt: "ChatBot Assistant",
        source: ChatBot,
        rotate: 225,
        featureIndex: 4
    },
    {
        id: 7,
        alt: "Robust Recommandation",
        source: Recommandation,
        rotate: 270,
        featureIndex: 5
    },
    {
        id: 8,
        alt: "Beautiful Templates",
        source: Templating,
        rotate: 315,
        featureIndex: 6
    },
];

export default function Features() {
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [autoHighlightIndex, setAutoHighlightIndex] = useState(0);

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

    return (
        <section className={cn([
            'py-10 md:py-12',
            'min-h-screen',
            'bg-gradient-to-t from-[#FFFFFF] to-[#b0b9c626]'
        ])}>
            <SectionContent classes="relative flex flex-col md:flex-row justify-between items-center">
                {/* Left side content */}
                <div className="md:w-1/2">
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
                    <LandingButton
                        text='Try it Now'
                        buttonClassName='text-white bg-[#E5C04D]'
                        animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                        isTransparent={true}
                       
                    />
                </div>

                {/* Right side - Orbits */}
                <div className="flex justify-center mt-12 md:w-1/2 md:mt-0">
                    <div className="relative size-[370px] flex items-center justify-center">
                        {/* Static orbits */}
                        <Orbit className="absolute size-[370px] border-2 border-gray-300 rounded-full" />
                        <Orbit className="absolute size-[280px] border-2 border-gray-300 rounded-full" />
                        <Orbit className="absolute size-[180px] border-2 border-gray-300 rounded-full" />

                        {/* Center logo with Lottie animation */}
                        <div className="absolute flex items-center justify-center size-[80px] z-10">
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
                            className="absolute size-full"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 40,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >
                            {/* Individual logos positioned on the outer orbit */}
                            {featureLogos.map((logo) => {
                                // Calculate position on the outermost orbit
                                const orbitRadius = 185; // Half of 370px
                                const isHighlighted = highlightedFeatureIndex === logo.featureIndex;

                                return (
                                    <div
                                        key={logo.id}
                                        className="absolute size-16"
                                        style={{
                                            left: `calc(50% - 32px)`,
                                            top: `calc(50% - 32px)`,
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
                                                className="object-contain cursor-pointer size-10"
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