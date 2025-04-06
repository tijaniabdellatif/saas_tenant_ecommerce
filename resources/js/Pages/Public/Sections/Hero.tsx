import { cn } from "@/libs/utils";
import { Element, Link as LinkScroll } from "react-scroll";
import LandingButton from "../Components/LandingButton";
import { Zap } from "@/Assets";
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '@/Assets/Animation - 1743586471539.json';
import { useRef, useEffect, useState } from "react";

export default function Hero() {
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    const [viewportWidth, setViewportWidth] = useState(0);
    
    // Effect to track viewport width changes
    useEffect(() => {
        // Set initial width
        setViewportWidth(window.innerWidth);
        
        // Handle resize
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <section className={cn([
            'relative',
            'pt-60 pb-40',
            'max-lg:pt-52 max-lg:pb-36',
            "max-md:pt-36 max-md:pb-32"
        ])}>
            <Element name="hero" className="relative">
                {/* Section-wide blur backdrop - full width but only section height */}
                <div className={cn([
                    "absolute",
                    "left-0 right-0",
                    "w-full",
                    "hidden max-md:block",
                    "bg-white/15 backdrop-blur-md", // Reduced opacity and blur for more glassy effect
                    "z-5",
                    "pointer-events-none"
                ])} 
                style={{
                    // Dynamically position to cover just the hero section
                    top: "0",
                    height: "100%"
                }}
                />
                
                <div className="container relative overflow-hidden">
                    {/* Animation backdrop */}
                    <div className={cn([
                        "absolute inset-0",
                        "w-full h-full",
                        "overflow-hidden pointer-events-none",
                        "-z-10", // Using negative z-index to force it behind everything
                        "opacity-100 max-md:opacity-100"
                    ])}>
                        <div className="flex items-center justify-center w-full h-full">
                            <Lottie
                                onComplete={() => {
                                    phoneAnimationRef.current?.setDirection(-1)
                                    phoneAnimationRef.current?.play()
                                }}
                                lottieRef={phoneAnimationRef}
                                animationData={animationData}
                                style={{ 
                                    width: viewportWidth < 768 ? '150%' : '50%',
                                    height: 'auto',
                                    position: 'absolute',
                                    left: viewportWidth < 768 ? '-25%' : 'auto',
                                    right: viewportWidth < 768 ? 'auto' : '0',
                                    top: '0',
                                    bottom: '0',
                                    margin: 'auto'
                                }}
                            />
                        </div>
                    </div>
                    
                    {/* Content container */}
                    <div className={cn([
                        'relative',
                        "max-w-512 max-lg:max-w-388",
                        "max-md:max-w-full max-md:w-full", // Full width on mobile
                        "bg-transparent pt-14", // Top padding for header space
                        "max-md:p-6", // Padding without blur
                        "z-20" // Higher z-index to ensure it's above animation
                    ])}>
                        <div className={cn([
                            'caption small-3 uppercase text-p3'
                        ])}>
                            Enimsay Store
                        </div>
                        <h1 className={cn([
                            'mb-6 h1 uppercase',
                            'max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl',
                            'max-md:leading-12'
                        ])}>
                            Amazingly Simple
                        </h1>
                        <p className={cn([
                            'leading-7 text-white',
                            'max-w-440 mb-14 body-1 max-md:mb-10',
                            'max-md:max-w-full', // Full width paragraph on mobile
                        ])}>
                            Launch Your Store Today, Scale Your Business Tomorrow with
                            <span className="italic text-[#FFD275] font-semibold"> Powerful AI tools</span>. <span className="italic text-[#FFD275] font-semibold">Beautiful templates</span>. <span className="italic text-[#FFD275] font-semibold">Seamless payments</span>. Everything you need to succeed in one platform
                        </p>
                        <LinkScroll to="features" offset={-100} spy smooth>
                            <LandingButton icon={Zap} markerFill="#ffd275">
                                Try it now
                            </LandingButton>
                        </LinkScroll>
                    </div>
                </div>
            </Element>
        </section>
    );
}