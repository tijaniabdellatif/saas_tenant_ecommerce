
import LandingButton from './LandingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useState ,useEffect} from 'react';

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

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="md:max-w-[60%]">
                    <div className="flex justify-center py-4 md:justify-start">
                        <div className="mb-2 text-white tag bg-neutral-800">
                            Launch Your Store Today
                        </div>
                    </div>

                    <motion.h2
                        className="text-3xl py-3 md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Amazingly Simple
                    </motion.h2>

                    <motion.p
                        className="mb-6 text-base leading-8 tracking-tight lg:text-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        Launch Your Store Today, Scale Your Business Tomorrow with Powerful
                        AI features, Beautiful Templates, Seamless payments. Everything you
                        need to start selling online in one place.
                    </motion.p>

                    <div className="flex flex-col gap-2 mb-4 text-sm md:flex-row md:gap-6">
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

                <div className="flex flex-col gap-4 sm:flex-row">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <LandingButton
                            text='Get Started'
                            buttonClassName='text-white bg-[#D4AF37] w-[200px] md:w-[120px] lg:w-[150px]'
                            animationClassName='bg-gradient-to-r from-[#E5C04D] to-slate-600'
                            styleBorderAnimationClassname="linear-gradient(90deg, #D4AF37, white, #D4AF37)"

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
                            buttonClassName='text-white bg-neutral-800 w-[200px] md:w-[120px] lg:w-[150px]'
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