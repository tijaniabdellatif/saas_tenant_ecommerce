
import LandingButton from './LandingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useState, useEffect } from 'react';
import { cn } from '@/libs/utils';

export default function CTAItems() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, -15]);
    const { scrollYProgress } = useScroll();
    const cardY = useTransform(scrollYProgress, [0, 1], [0, -50]);


    // Handle mouse move for hover effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);


    return (
        <motion.div
            className=" text-[#2A2A2A] shadow-[0_7px_14px_#D4AF37989] border border-neutral-800/10 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto relative overflow-hidden z-10"
            style={{ y: cardY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Background gradient overlay with parallax */}
            <motion.div
                className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-b from-[#FFFFFF] to-[#D4AF37989]"
                style={{
                    x: gradientX
                }}
            />

            {/* Floating elements for visual interest */}
            <motion.div
                className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[#D4AF37] opacity-20"
                animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute -left-6 bottom-0 w-20 h-20 rounded-full bg-[#475569] opacity-10"
                animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.15, 1]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="relative z-10 flex flex-col items-center lg:items-start justify-between gap-8">
                <div className="flex flex-col items-center justify-center lg:flex-col md:flex-col lg:items-start">
                    <div className="flex py-4">
                        <div className="mx-auto mb-2 text-white tag bg-neutral-800">
                            Launch Your Store Today
                        </div>
                    </div>

                    <motion.h2
                        className="text-3xl text-center lg:text-left py-2 md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Amazingly Simple
                    </motion.h2>

                    <motion.p
                        className={cn([
                            'text-center mt-2 text-base leading-7 tracking-tight',
                            "md:text-[18px] lg:text-left md:text-center md:leading-8 lg:text-1xl lg:leading-10 text-color-dark font-poppins"
                        ])}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        Launch Your Store Today, Scale Your Business Tomorrow with Powerful
                        AI features, Beautiful Templates, Seamless payments. Everything you
                        need to start selling online in one place.
                    </motion.p>

                    <div className="flex flex-col justify-center gap-3 mb-4 mt-4 text-sm md:flex-row md:gap-6">
                        {[
                            "14-day free trial",
                            "No credit card required",
                            "Cancel anytime"
                        ].map((text, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                            >
                                <FontAwesomeIcon icon={faCheck} className="text-[#D4AF37]" />
                                <span>{text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-0 sm:flex-row">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        
                    >
                        <LandingButton
                            text='Get Started'
                            buttonClassName='text-white bg-[#D4AF37] w-[300px] md:w-[300px] max-w-[250px]'
                            animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                            isTransparent={true}
                          

                        />


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <LandingButton
                            text='Learn More'
                            buttonClassName='text-white bg-neutral-800 w-[300px] md:w-[300px] max-w-[250px]'
                            animationClassName='bg-gradient-to-l from-white to-black'
                            isTransparent={true}
                        
                            styleBorderAnimationClassname="linear-gradient(90deg, #000, white, #000)"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}