import { cn } from "@/libs/utils";
import { ArrowRight } from "@/Assets";
import { HTMLAttributes } from "react";

interface LandingButtonProps {
    text?: string;
    buttonClassName?: string;
    animationClassName?: string;
    isTransparent?: boolean;
    styleBorderAnimationClassname?:string
}



export default function LandingButton({
    text,
    buttonClassName,
    animationClassName,
    isTransparent = false,
    styleBorderAnimationClassname
}: LandingButtonProps) {
    return (
        <div className="relative inline-block">
            {/* Animated border background */}
            <div 
                className="absolute inset-0 rounded-md"
                style={{
                    background: styleBorderAnimationClassname,
                    backgroundSize: '200% 100%',
                    animation: 'gradientMove 3s linear infinite',
                }}
            ></div>
            
            {/* Your actual button - slightly inset to show the border */}
            <button
                className={cn([
                    'relative m-[2px]', // This margin creates space for the border
                    'inline-flex items-center justify-center px-2 py-2 overflow-hidden',
                    'rounded-md whitespace-nowrap lg:px-4 lg:text-base group',
                    'text-sm font-medium tracking-tight',
                    'font-poppins',
                    buttonClassName,
                ])}
            >
                {/* Hover animation overlay */}
                <span
                    className={cn([
                        animationClassName,
                        "absolute inset-0 w-0 transition-all duration-500 ease-out group-hover:w-full opacity-20",
                    ])}
                ></span>

                {/* Button text */}
                <span className="relative z-10 uppercase transition-colors duration-300 group-hover:text-white">
                    {text}
                </span>

                <span className="relative left-1">
                    {isTransparent && (
                        <img
                            src={ArrowRight}
                            alt="Icon"
                            className={`inline-flex items-center justify-center w-4 h-4 ${isTransparent ? 'animate-arrow-pulse' : ''}`}
                        />
                    )}
                </span>
            </button>
        </div>
    );
}