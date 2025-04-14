import LandingButton from "../Components/Utilities/LandingButton";
import SectionContent from "../Components/Utilities/SectionContent";
import { pricingTiers } from '@/libs/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/libs/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Number counter animation component
const AnimatedCounter = ({ value, className }: { value: number, className?: string }) => {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        // Start from the current display value
        let startValue = displayValue;
        const endValue = value;
        const duration = 800; // ms - longer duration for more visible animation
        const startTime = performance.now();

        const animateCounter = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Enhanced easing function that slows down significantly near the end
            // This cubic-bezier inspired function creates a more dramatic slowdown
            const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            const easedProgress = easeOutExpo(progress);

            const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
            setDisplayValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            }
        };

        requestAnimationFrame(animateCounter);
    }, [value]);

    return <span className={className}>${displayValue}</span>;
};

export default function Pricing() {
    const [monthly, setMonthly] = useState<boolean>(true);

    return (
        <section className={cn([
            'overflow-x-clip',
            'bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626]',
            'pt-4 md:pt-6 lg:pt-10 mt-2 font-poppins',
        ])}>
            <SectionContent classes="overflow-visible max-w-[1400px] mx-auto">
                <div className="max-w-[540px] mx-auto pricing-head_before relative">
                    <h2 className={cn([
                        'text-center',
                        'text-color-dark bg-gradient-to-l from-[#475569] to-[#D4AF37]',
                        'text-transparent bg-clip-text',
                        'text-3xl lg:text-6xl md:text-4xl py-2 font-semibold tracking-tighter'
                    ])}>Pricing</h2>
                    <p className={cn([
                         'text-center mt-4 text-base leading-7 tracking-tight',
                         "md:text-[18px] md:text-center md:leading-8 lg:text-1xl lg:leading-10 text-color-dark font-poppins"
                    ])}>
                        Flexible pricing tailored 
                        to your needs. Whether you're just 
                        starting out or scaling fast, our on-demand
                         plans grow with you. Only pay for what you need—no hidden fees, no long-term commitments. Choose the features that fit your 
                        business and upgrade anytime as you grow.
                    </p>

                    {/* Toggle button */}
                    <div className="flex flex-col items-center mt-5">
                        <div className="relative flex items-center justify-between w-[300px] sm:w-[375px] rounded-full border-2 border-[#475569] p-1 transition-all duration-300 hover:shadow-md overflow-hidden">
                            {/* Monthly option */}
                            <motion.div
                                className={cn(
                                    "flex-1 flex justify-center py-2 z-10 rounded-full relative cursor-pointer",
                                    monthly ? "text-white" : "text-slate-700"
                                )}
                                onClick={() => setMonthly(true)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="font-medium">Monthly</span>
                            </motion.div>

                            {/* Annually option */}
                            <motion.div
                                className={cn(
                                    "flex-1 flex justify-center py-2 z-10 rounded-full relative cursor-pointer",
                                    !monthly ? "text-white" : "text-slate-700"
                                )}
                                onClick={() => setMonthly(false)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="font-medium">Annually</span>
                            </motion.div>

                            {/* Active background pill that slides */}
                            <motion.div
                                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#222222] shadow-md"
                                initial={false}
                                animate={{
                                    left: monthly ? "0.25rem" : "calc(50% - 0.25rem)"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    duration: 0.5
                                }}
                            />
                        </div>

                        {/* Savings text with animation */}
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={monthly ? "monthly" : "annually"}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="h-6 mt-2 text-sm"
                            >
                                {monthly ? (
                                    <span className="text-slate-500">Billed monthly</span>
                                ) : (
                                    <span className="flex items-center">
                                        <span className="text-slate-500">Save </span>
                                        <motion.span
                                            className="mx-1 font-bold text-amber-500"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, -3, 3, 0]
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: 1,
                                                repeatDelay: 1.5
                                            }}
                                        >
                                            20%
                                        </motion.span>
                                        <span className="text-slate-500">with annual billing</span>
                                    </span>
                                )}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    {/* end toggle button */}

                </div>
                <div className={cn([
                    'flex flex-col items-center gap-6 mt-6',
                    "lg:flex-row lg:items-end lg:justify-center lg:px-4"
                ])}>
                    {
                        pricingTiers.map((item) => {
                            // Calculate price based on billing period
                            const { title, buttonText, monthlyPrice, features, inverse, popular } = item;
                            const displayPrice = monthly ? monthlyPrice : Math.round(monthlyPrice * 0.8 * 12); // 20% discount for annual

                            return (
                                <motion.div
                                    key={title}
                                    className={cn([
                                        'p-10 rounded-3xl',
                                        'shadow-[0_7px_14px_#EAEAEA]',
                                        'border border-[#F1F1F1]',
                                        
                                        // Wider card on mobile/tablet (column layout)
                                        "w-[90%] sm:w-[85%] md:w-[500px] md:max-w-[500px]",
                                        // Fixed width for row layout on large screens
                                        "lg:w-[340px] lg:max-w-[340px]  xl:w-[380px] xl:max-w-[380px]",
                                        "lg:flex-shrink-0", // Prevent shrinking on large screens
                                        inverse && 'border-black bg-neutral-800 text-white/60'
                                    ])}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex justify-between">
                                        <h3 className={cn([
                                            'text-lg font-bold text-color-dark',
                                            inverse && 'text-white/80'
                                        ])}>{title}</h3>
                                        {popular &&
                                            <motion.div
                                                className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20"
                                                animate={{
                                                    boxShadow: ['0px 0px 0px rgba(212, 175, 55, 0)', '0px 0px 10px rgba(212, 175, 55, 0.5)', '0px 0px 0px rgba(212, 175, 55, 0)']
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 1
                                                }}
                                            >
                                                <span className={cn([
                                                    'bg-[linear-gradient(to_right,#D4AF37,white)]',
                                                    'text-transparent bg-clip-text',
                                                    'tag font-bold tracking-wide'
                                                ])}>Popular</span>
                                            </motion.div>
                                        }
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-[30px]">
                                        <AnimatedCounter
                                            value={displayPrice}
                                            className={cn([
                                                'text-4xl font-bold leading-none tracking-tighter text-color-dark',
                                                inverse && 'text-white/80'
                                            ])}
                                        />
                                        <motion.span
                                            className={cn([
                                                'font-bold tracking-tight text-black/50',
                                                inverse && 'text-white/50'
                                            ])}
                                            key={monthly ? 'month' : 'year'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            /{monthly ? 'month' : 'year'}
                                        </motion.span>
                                    </div>

                                    {/* Button container - centered with 80% width exactly at medium sizes */}
                                    <div className="mt-[30px] flex justify-center">
                                        <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[auto]">
                                            <LandingButton
                                                text={buttonText}
                                                buttonClassName='text-white bg-[#222222] w-full sm:w-[250px]'
                                                animationClassName='bg-gradient-to-l from-white to-black'
                                                styleBorderAnimationClassname="linear-gradient(90deg, #000, white, #000)"
                                            />
                                        </div>
                                    </div>

                                    <ul className="flex flex-col gap-5 mt-8">
                                        {features.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-center gap-4 text-sm"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <FontAwesomeIcon className={cn(['text-color-dark', inverse && "text-white"])} icon={faCheck} />
                                                <span className={cn([
                                                    'text-base tracking-tight text-color-dark',
                                                    inverse && 'text-white/70'
                                                ])}>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })
                    }
                </div>
            </SectionContent>
        </section>
    );
}