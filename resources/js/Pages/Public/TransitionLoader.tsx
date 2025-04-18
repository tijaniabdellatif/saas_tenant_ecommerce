import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { FacebookLogo } from '@/Assets';
import MatrixRain from '@/Pages/Public/Components/Utilities/MatrixRain';
import OrbitLoader from '@/Pages/Public/Components/Utilities/OrbitLoader';

interface ITransition {
    nextRoute: string;
    transitionTime?: number;
    referrer?: string;
}
export default function TransitionLoader({
    nextRoute,
    transitionTime = 10000,
    referrer
}: ITransition) {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    const messages = [
        'Welcome to Enimsay',
        'Where we satisfy our users by providing cutting edge solutions',
        "We are preparing your amazing experience"
    ];

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.6,
                ease: "easeIn"
            }
        }
    };

    const logoVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    // Text animation timing
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTextIndex(prev => prev < messages.length - 1 ? prev + 1 : prev)
        }, 1800);

        return () => clearInterval(timer)
    }, [messages.length]);

    // Navigation timing
    useEffect(() => {
        const navigationTimer = setTimeout(() => {
            router.visit(nextRoute, { replace: true });
        }, transitionTime);

        return () => clearTimeout(navigationTimer);
    }, [nextRoute, transitionTime]);

    // Store referrer for back navigation
    useEffect(() => {
        if (referrer) {
            localStorage.setItem(`backFrom_${nextRoute}`, referrer);
        }
    }, [referrer, nextRoute])

    return (
        <>
            <Head title='Enimsay Loading...' />

            {/* Main container with white background */}
            <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-white">
                {/* Matrix-like rain on the full page */}
                <MatrixRain />

                {/* Radial white gradient for better text visibility */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-white via-white/95 to-white/80" />

                {/* Main content container */}
                <div className="relative z-10 flex flex-col items-center max-w-lg px-4">
                    {/* Logo */}
                    <motion.div
                        variants={logoVariants}
                        initial="initial"
                        animate={["animate", "pulse"]}
                        className="mb-8"
                    >
                        <div className="relative w-32 h-32">
                            {/* Glow effect behind logo */}
                            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full"></div>

                            <img
                                src={FacebookLogo}
                                alt="Enimsay Logo"
                                className="relative z-10 object-contain w-full h-full"
                            />
                        </div>
                    </motion.div>

                    {/* Orbital loader (separate from the Matrix rain) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-10"
                    >
                        <OrbitLoader />
                    </motion.div>

                    {/* Animated text messages */}
                    <div className="flex items-center justify-center h-24 mb-8 text-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentTextIndex}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="text-[#475569] text-xl md:text-2xl font-medium"
                            >
                                {messages[currentTextIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Progress bar with animation */}
                    <motion.div
                        className="relative w-64 h-2 overflow-hidden bg-gray-100 rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* Main progress indicator */}
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#475569]"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: transitionTime / 1000,
                                ease: "linear"
                            }}
                        />

                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: [-80, 300] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeInOut",
                                repeatDelay: 0.5
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}