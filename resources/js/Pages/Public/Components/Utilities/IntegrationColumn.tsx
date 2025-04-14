import { IntegrationType } from "@/libs/constants";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useCallback, useEffect, Fragment } from "react";
import { cn } from "@/libs/utils";

export default function IntegrationColumn(props: { integrations: IntegrationType, className?: string, reverse?: boolean }) {
    const { integrations, className, reverse } = props;
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const columnAnimationControls = useAnimationControls();

    // Check for touch device on mount
    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        checkTouch();
        window.addEventListener('touchstart', checkTouch, { once: true });

        return () => window.removeEventListener('touchstart', checkTouch);
    }, []);

    // Function to start or resume the animation
    const startColumnAnimation = useCallback(() => {
        columnAnimationControls.start({
            y: reverse ? 0 : "-50%",
            transition: {
                duration: 80,
                repeat: Infinity,
                repeatType: "loop",
                ease: 'linear',
                from: reverse ? "-50%" : 0
            }
        });
    }, [reverse, columnAnimationControls]);

    // Control the column animation based on hover state
    useEffect(() => {
        if (isPaused) {
            // Pause the animation
            columnAnimationControls.stop();
        } else {
            // Resume the animation
            startColumnAnimation();
        }
    }, [isPaused, startColumnAnimation]);

    // Start animation on initial render and handle window resize
    useEffect(() => {
        startColumnAnimation();

        // Add resize handler to restart animation when window size changes
        const handleResize = () => {
            columnAnimationControls.stop();
            // Short delay to ensure DOM is updated before restarting
            setTimeout(() => {
                startColumnAnimation();
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [startColumnAnimation]);

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
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0
            }}
            animate={columnAnimationControls}
            className={cn([
                'flex flex-col gap-4 pb-4',
                className
            ])}>

            {Array.from({ length: 2 }).map((_, i) => {
                return (
                    <Fragment key={i}>
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
                                    setIsPaused(true); // Pause column animation on touch
                                }, [controls]);

                                const handleTouchEnd = useCallback(() => {
                                    controls.start("animate");
                                    setIsPaused(false); // Resume column animation after touch
                                }, [controls]);

                                return (
                                    <div
                                        key={`${i}-${name}-${index}`}
                                        className="relative p-[3px] rounded-3xl overflow-hidden pricing-head_before"
                                        onTouchStart={handleTouchStart}
                                        onTouchEnd={handleTouchEnd}
                                        onTouchCancel={handleTouchEnd}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Learn more about ${name}`}
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                    >
                                      

                                        {/* Content */}
                                        <motion.div
                                            className={cn([
                                                'relative z-10 rounded-3xl p-6 h-full group',
                                                'max-w-xs w-full',
                                                'shadow-[0_7px_14px_#EAEAEA]',
                                                'border border-neutral-800/15',
                                                'mt-2',
                                            ])}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            <div className="flex justify-center">
                                                <img src={icon} alt={name} className="w-32 h-30" />
                                            </div>
                                            <h3 className="mt-4 text-3xl font-semibold text-center text-[#D4AF37]/40 transition-colors duration-300 group-hover:text-[#D4AF37]/80">{name}</h3>
                                            <p className="mt-2 text-base leading-6 tracking-tight text-center md:text-md lg:text-base lg:text-start text-color-dark">{description}</p>

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
                    </Fragment>
                );
            })}
        </motion.div>
    );
}