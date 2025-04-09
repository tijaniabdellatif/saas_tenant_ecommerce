
import { IntegrationType } from "@/libs/constants";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/libs/utils";
export default function IntegrationColumn(props: { integrations: IntegrationType, className?: string }) {

    const { integrations, className } = props;
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Check for touch device on mount
    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        checkTouch();
        window.addEventListener('touchstart', checkTouch, { once: true });

        return () => window.removeEventListener('touchstart', checkTouch);
    }, []);
    const rotatingBorderAnimation = {
        animate: {
            background: "linear-gradient(90deg, #000, white, #000)",
            backgroundSize: "200% 100%",
            backgroundPosition: ["0% 0%", "100% 0%", "0% 100%"],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
            }
        },
        tap: {
            background: "linear-gradient(90deg, #000, white, #000)",
            boxShadow: "0 0 15px rgba(212, 175, 55, 0.8)",
            transition: { duration: 0.3 }
        }
    };
    return (
        <div className={cn([
            'flex flex-col gap-4 pb-4',
            className
        ])}>
            {
                        integrations.map(({
                            name,
                            icon,
                            description
                        }, index) => {
                            // Create unique animation controls for each card
                            const controls = useAnimationControls();
                            
                            // Touch event handlers
                            const handleTouchStart = useCallback(() => {
                                controls.start("tap");
                            }, [controls]);
                            
                            const handleTouchEnd = useCallback(() => {
                                controls.start("animate");
                            }, [controls]);
                            
                            return (
                                <div 
                                    key={name} 
                                    className="relative p-[3px] rounded-3xl overflow-hidden"
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                    onTouchCancel={handleTouchEnd}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Learn more about ${name}`}
                                >
                                    {/* Animated border wrapper */}
                                    <motion.div 
                                        className="absolute inset-0 z-0 rounded-3xl"
                                        variants={rotatingBorderAnimation}
                                        animate={controls}
                                        initial="animate"
                                    />
                                    
                                    {/* Content */}
                                    <motion.div 
                                        className={cn([
                                            'relative z-10 bg-slate-900 rounded-3xl p-6 h-full group',
                                            
                                            
                                        ])}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <div className="flex justify-center">
                                            <img src={icon} alt={name} className="w-32 h-30" />
                                        </div>
                                        <h3 className="mt-4 text-3xl font-semibold text-center text-[#D4AF37]/40 transition-colors duration-300 group-hover:text-[#D4AF37]/80">{name}</h3>
                                        <p className="mt-2 text-center text-white/80 ">{description}</p>
                                        
                                        {/* Feedback ripple effect for touch */}
                                        {isTouchDevice && (
                                            <motion.div 
                                                className="absolute inset-0 z-0 opacity-0 bg-amber-300 rounded-3xl"
                                                whileTap={{ 
                                                    opacity: 0.05, 
                                                    scale: [1, 1.05],
                                                    transition: { duration: 0.3 } 
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                </div>
                            );
                        })
                    }
        </div>
    );
}

