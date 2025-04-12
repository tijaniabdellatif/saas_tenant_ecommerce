import { faqItems } from "@/libs/constants";
import SectionContent from "../Components/Utilities/SectionContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/libs/utils";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isGlowing, setIsGlowing] = useState<boolean>(false);

    // Toggle the glow effect at an interval
    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlowing(prev => !prev);
        }, 1500);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="overflow-x-clip overflow-hidden bg-gradient-to-t from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 font-poppins relative">
            <SectionContent>
                <div className="max-w-[540px] mx-auto relative">
                    <div className="flex justify-center py-4">
                        <div className="text-white tag bg-neutral-800">
                            FAQ
                        </div>
                    </div>

                    <h2 className="text-center md:text-[54px] md:leading-[60px] text-color-dark text-3xl font-bold tracking-tighter bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text mt-5">
                        Questions? we've got <span className="text-neutral-800/50">Answers</span>
                    </h2>
                    <p className="text-base lg:text-[22px] pricing-head_before relative leading-[30px] text-center text-color-dark tracking-tight mt-5">
                        Curiosity didn't kill a man, it gives answers
                    </p>
                </div>

                {/* Centered FAQ items container */}
                <div className="relative flex flex-col items-center mt-12 pricing-head_before">
                    {faqItems.map(({ question, answer }, index) => (
                        <div
                            key={question}
                            className={cn([
                                'shadow-[0_7px_14px_#EAEAEA]',
                                'border border-neutral-800/10',
                                'rounded-2xl p-6',
                                'w-full max-w-[800px]', 
                                'mx-auto',
                                'mb-3'
                            ])}
                        >
                            <div className="relative z-40 flex items-center justify-between cursor-pointer" onClick={() => setSelectedIndex(index)}>
                                <div className="flex items-center justify-start gap-3">
                                    {/* Glowing circle with CSS animations instead of Framer Motion */}
                                    <div className="relative flex-shrink-0">
                                        <div 
                                            className={cn([
                                                "w-5 h-5 rounded-full bg-neutral-500/6",
                                                "transition-all duration-1000 ease-in-out",
                                                isGlowing ? "shadow-[0_0_15px_5px_#D4AF3788]" : "shadow-[0_0_10px_2px_#D4AF3799]"
                                            ])}
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold tracking-tight lg:text-lg lg:font-bold md:font-bold md:leading-8 lg:leading-8 text-color-dark">{question}</h3>
                                </div>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className={cn([
                                        'flex-shrink-0 text-[#D4AF37] transition duration-300 ease-linear',
                                        selectedIndex === index && 'rotate-45'
                                    ])}
                                />
                            </div>

                            <AnimatePresence>
                                {
                                    selectedIndex === index && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                marginTop: 0
                                            }}
                                            animate={{
                                                height: 'auto',
                                                marginTop: 24
                                            }}
                                            exit={{
                                                height: 0,
                                                marginTop: 0
                                            }}
                                            className={cn([
                                                'overflow-hidden',
                                            ])}>
                                            <p className="text-[#00000099] text-sm md:text-md lg:text-lg leading-8 tracking-tight">{answer}</p>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </SectionContent>
        </section>
    );
}