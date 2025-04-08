import { cn } from "@/libs/utils";
import { ArrowRight } from "@/Assets";

interface LandingButtonProps {
  text?: string;
  buttonClassName?: string;
  animationClassName?: string;
  isTransparent?: boolean;
  styleBorderAnimationClassname?: string;
  fullWidthOnMobile?: boolean;
  marginClassName?: string; // New prop for custom margins
}

export default function LandingButton({
  text,
  buttonClassName,
  animationClassName,
  isTransparent = false,
  styleBorderAnimationClassname,
  fullWidthOnMobile = false,
  marginClassName = "", // Default to empty string
}: LandingButtonProps) {
  return (
    // Wrapper div with optional margins applied
    <div className={cn("relative", fullWidthOnMobile && "w-full sm:w-auto sm:inline-block md:inline-block", marginClassName)}>
      {/* Inner container for button and animated border */}
      <div className="relative inline-block w-full">
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
            'relative m-[0.09rem]', // This margin creates space for the border
            'px-2 py-2 overflow-hidden',
            'rounded-md whitespace-nowrap lg:px-4 lg:text-base group',
            'text-sm font-medium tracking-wide',
            'font-poppins',
            // Apply full width only to the button when fullWidthOnMobile is true
            fullWidthOnMobile && "w-full sm:w-auto",
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
          <span className="relative z-10 text-[12px] uppercase transition-colors duration-300 group-hover:text-white">
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
    </div>
  );
}