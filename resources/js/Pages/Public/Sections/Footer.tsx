import SectionContent from "../Components/Utilities/SectionContent";
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import AnimationData from '@/Assets/Lottie_Lego.json';
import { useRef } from "react";
import { cn } from "@/libs/utils";
import {
    FacebookLogo,
    TwitterLogo,
    InstagramLogo,
    LinkedInLogo,
    YoutubeLogo
} from '@/Assets';
import { Link } from "@inertiajs/react";

export default function Footer() {
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    return (
        <footer className={cn([
            'overflow-x-clip overflow-hidden',
            'bg-gradient-to-t from-neutral-800 to-neutral-800/90',
            'py-10 md:py-12 font-poppins relative text-center'
        ])}>
            <SectionContent>
                <div className="relative">
                    {/* Glowing background effect */}
                    <div className={cn([
                        'absolute',
                        'w-24 h-24 md:w-28 md:h-28', 
                        'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                        'rounded-full blur-md opacity-40',
                        'bg-gradient-to-br from-neutral-800 via-[#D4AF37] to-amber-300',
                        'animate-pulse'
                    ])}></div>
                    
                    {/* Additional glow rays */}
                    <div className={cn([
                        'absolute',
                        'w-26 h-26 md:w-30 md:h-30', 
                        'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                        'rounded-full blur-lg opacity-20',
                        'bg-gradient-to-r from-[#D4AF37] via-amber-400 to-neutral-700',
                        'animate-pulse'
                    ])} 
                    style={{ animationDuration: '3s' }}></div>
                    
                    {/* Lottie component */}
                    <div className={cn([
                        'inline-flex relative z-10',
                        'w-24 h-16 overflow-hidden md:w-28 md:h-20'
                    ])}>
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
                </div>

                {/* Animated "Follow us on" text with inclined wavy underlines */}
                <div className="relative inline-block mt-10 mb-8">
                    <h3 className="relative z-10 text-xl font-medium tracking-wide text-white animate-pulse">
                        Follow us on
                    </h3>
                    
                    {/* Inclined wavy line 1 */}
                    <svg className="absolute -bottom-5 -left-2 w-[110%]" height="20" width="110%">
                        <path 
                            d="M0,15 Q10,12 20,14 Q30,16 40,13 Q50,10 60,12 Q70,14 80,11 Q90,8 100,10 Q110,12 120,9 Q130,6 140,8 Q150,10 160,7" 
                            fill="none" 
                            stroke="#D4AF37" 
                            strokeWidth="2"
                            strokeLinecap="round"
                            transform="rotate(-5)"
                        >
                            <animate 
                                attributeName="d" 
                                dur="4s"
                                repeatCount="indefinite"
                                values="
                                M0,15 Q10,12 20,14 Q30,16 40,13 Q50,10 60,12 Q70,14 80,11 Q90,8 100,10 Q110,12 120,9 Q130,6 140,8 Q150,10 160,7;
                                M0,13 Q10,15 20,12 Q30,9 40,11 Q50,13 60,10 Q70,7 80,9 Q90,11 100,8 Q110,5 120,7 Q130,9 140,6 Q150,3 160,5;
                                M0,15 Q10,12 20,14 Q30,16 40,13 Q50,10 60,12 Q70,14 80,11 Q90,8 100,10 Q110,12 120,9 Q130,6 140,8 Q150,10 160,7
                                "
                            />
                        </path>
                    </svg>
                    
                    {/* Inclined wavy line 2 */}
                    <svg className="absolute -bottom-8 -left-4 w-[115%]" height="20" width="115%">
                        <path 
                            d="M0,9 Q10,11 20,8 Q30,5 40,7 Q50,9 60,6 Q70,3 80,5 Q90,7 100,4 Q110,1 120,3 Q130,5 140,2 Q150,0 160,2" 
                            fill="none" 
                            stroke="rgba(212, 175, 55, 0.6)" 
                            strokeWidth="2"
                            strokeLinecap="round"
                            transform="rotate(-7)"
                        >
                            <animate 
                                attributeName="d" 
                                dur="4.5s"
                                repeatCount="indefinite"
                                values="
                                M0,9 Q10,11 20,8 Q30,5 40,7 Q50,9 60,6 Q70,3 80,5 Q90,7 100,4 Q110,1 120,3 Q130,5 140,2 Q150,0 160,2;
                                M0,7 Q10,4 20,6 Q30,8 40,5 Q50,2 60,4 Q70,6 80,3 Q90,0 100,2 Q110,4 120,1 Q130,0 140,2 Q150,4 160,1;
                                M0,9 Q10,11 20,8 Q30,5 40,7 Q50,9 60,6 Q70,3 80,5 Q90,7 100,4 Q110,1 120,3 Q130,5 140,2 Q150,0 160,2
                                "
                            />
                        </path>
                    </svg>
                </div>

                <div className="flex justify-center mt-8 space-x-4">
                <Link href="#" className="transition-transform duration-500 hover:scale-110">
                        <img src={FacebookLogo} alt='Facebook' className="w-7 h-7" />
                    </Link>
                    <Link href="#" className="transition-transform duration-500 hover:scale-110">
                        <img src={LinkedInLogo} alt='LinkedIn' className="w-7 h-7" />
                    </Link>
                    <Link href="#" className="transition-transform duration-500 hover:scale-110">
                        <img src={InstagramLogo} alt='Instagram' className="relative w-8 h-9 -top-1" />
                    </Link>
                    <Link href="#" className="transition-transform duration-500 hover:scale-110">
                        <img src={TwitterLogo} alt='Twitter' className="w-7 h-7" />
                    </Link>
                    <Link href="#" className="transition-transform duration-500 hover:scale-110">
                        <img src={YoutubeLogo} alt='YouTube' className="w-7 h-7" />
                    </Link>
                </div>
            </SectionContent>
        </footer>
    );
}

/**
 *  
 * 
 
 */