import SectionContent from '@/Pages/Public/Components/Utilities/SectionContent'
import LandingButton from "@/Pages/Public/Components/Utilities/LandingButton";
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import AnimationData from '@/Assets/Lottie_Lego.json';
import { cn } from '@/libs/utils';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dashboard as DashboardImage } from '@/Assets';

export default function Demo() {
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const buttonContainerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const horizontalLineRef = useRef<HTMLDivElement>(null);

    // Force the line to connect to the border
    useEffect(() => {
        const updateLinePosition = () => {
            const buttonElement = buttonContainerRef.current;
            const imageElement = imageContainerRef.current;
            const lineElement = horizontalLineRef.current;

            if (!buttonElement || !imageElement || !lineElement) return;

            const buttonRect = buttonElement.getBoundingClientRect();
            const imageRect = imageElement.getBoundingClientRect();

            // Calculate exact width needed - add 4px to ensure it touches the border
            const lineWidth = imageRect.left - buttonRect.right + 4;

            if (lineWidth > 0) {
                lineElement.style.width = `${lineWidth}px`;
                lineElement.style.display = 'block';
            } else {
                lineElement.style.display = 'none';
            }
        };

        // Run on mount and resize
        updateLinePosition();
        window.addEventListener('resize', updateLinePosition);

        // Run additional checks to catch layout shifts
        setTimeout(updateLinePosition, 100);
        setTimeout(updateLinePosition, 500);

        return () => {
            window.removeEventListener('resize', updateLinePosition);
        };
    }, []);

    // Handle touch events
    const handleTouchStart = () => {
        setIsHovering(true);
    };

    const handleTouchEnd = () => {
        setIsHovering(false);
    };

    // Toggle video display for desktop
    const openVideo = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowVideo(true);
    };

    const closeVideo = () => {
        setShowVideo(false);
    };

    // Handle button click differently based on device size
    const handleWatchDemoClick = (e: React.MouseEvent) => {
        // Check if we're on mobile (less than 768px width)
        if (window.innerWidth < 768) {
            // For mobile, we'll just let the link open in a new tab
            // So we don't prevent default or do anything else

            // This is for demonstration - in reality this function would not be called
            // because the link will handle the navigation directly
            return true;
        } else {
            // For desktop, open the modal
            e.preventDefault();
            setShowVideo(true);
            return false;
        }
    };

    // Close video when ESC key is pressed
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && showVideo) {
                setShowVideo(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);

        // Lock body scroll when video is open
        if (showVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [showVideo]);

    // YouTube video URL
    const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with your actual video URL

    return (
        <section className="overflow-x-clip pricing-head_before overflow-hidden bg-gradient-to-t from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 font-poppins relative">
            {/* Vertical line from top to image container */}
            <motion.div
                initial={{ backgroundColor: "rgba(31, 41, 55, 0.2)" }}
                animate={{
                    backgroundColor: isHovering ? "rgba(212, 175, 55, 0.6)" : "rgba(31, 41, 55, 0.2)",
                    boxShadow: isHovering ? "0 0 4px #D4AF37" : "none"
                }}
                transition={{ duration: 0.4 }}
                className="absolute right-[45%] top-0 w-[1px] h-[144px] hidden md:block z-10"
            />

            <SectionContent classes="relative pricing-head_before  pb-24 pt-24 max-lg:pb-24 max-md:py-16">
                <div className='md:flex md:items-center'>
                    <div className='relative flex flex-col items-center md:mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100 md:items-start md:w-[300px] lg:w-[350px] xl:w-[400px]'>
                        {/* Lottie animation container */}
                        <div className='flex justify-center md:justify-start'>
                            <Lottie
                                onComplete={() => {
                                    phoneAnimationRef.current?.setDirection(-1);
                                    phoneAnimationRef.current?.play();
                                }}
                                animationData={AnimationData}
                                lottieRef={phoneAnimationRef}
                                loop={true}
                                className='object-contain w-[150px] h-[100px] lg:mb-4 lg:-my-5 md:-ml-10'
                            />
                        </div>

                        {/* Text content */}
                        <p className={cn([
                            'max-w-md',
                            'text-center lg:text-left mt-5 text-base leading-7 tracking-tight',
                            "md:text-[18px] md:text-left md:mt-0 md:leading-8 lg:text-1xl lg:leading-10 text-color-dark font-poppins"

                        ])}>
                            Try it now on any device IOS, Android, PC, Web - what ever your flavor. Watch the demo or read
                            the documentation
                        </p>

                        {/* Button container with connecting line - now with touch events */}
                        <div
                            ref={buttonContainerRef}
                            className='relative flex justify-center mt-4 md:justify-start'
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <LandingButton
                                text={'Read the Documentation'}
                                buttonClassName='text-white bg-neutral-800'
                                animationClassName='bg-gradient-to-l from-white to-black'
                                styleBorderAnimationClassname="linear-gradient(90deg, #000, white, #000)"
                            />

                            {/* Watch Demo button - desktop: show modal, mobile: open in new tab */}
                            <div className="relative mx-2">
                                {/* For desktop, we use the modal approach */}
                                <div className="hidden md:block">
                                    <LandingButton
                                        text={'Watch Demo'}
                                        buttonClassName='text-white bg-[#D4AF37]'
                                        animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                                        styleBorderAnimationClassname="linear-gradient(90deg, #000, white, #000)"
                                        onClick={openVideo}
                                    />
                                </div>

                                {/* For mobile, use a regular link that opens in a new tab */}
                                <div className="md:hidden">
                                    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                                        <LandingButton
                                            text={'Watch Demo'}
                                            buttonClassName='text-white bg-[#D4AF37]'
                                            animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                                            styleBorderAnimationClassname="linear-gradient(90deg, #000, white, #000)"
                                        />
                                    </a>
                                </div>

                                {/* Horizontal line with direct positioning */}
                                <motion.div
                                    ref={horizontalLineRef}
                                    className="absolute top-1/2 -right-0  h-[1px] bg-gray-800/20 hidden md:block z-10"
                                    style={{
                                        transform: 'translateX(100%)',
                                        position: 'absolute'
                                    }}
                                    animate={{
                                        backgroundColor: isHovering ? "rgba(212, 175, 55, 0.6)" : "rgba(31, 41, 55, 0.2)",
                                        boxShadow: isHovering ? "0 0 4px #D4AF37" : "none"
                                    }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image container - positioned to the right with overflow - hidden on small screens */}
                    <div
                        ref={imageContainerRef}
                        className='mb-10 max-md:hidden md:flex-1 md:overflow-visible'
                        style={{
                            position: 'relative'
                        }}
                    >
                        {/* Animated container with border */}
                        <motion.div
                            className='relative p-6 rounded-40'
                            style={{
                                borderWidth: "2px",
                                borderColor: isHovering ? "#D4AF37" : "#47556933",
                                borderStyle: "solid",
                                width: 'calc(100% + 50%)', // Make it wider than the container
                                maxWidth: '1100px',
                                position: 'relative',
                                left: '0'
                            }}
                            animate={{
                                borderColor: isHovering ? "#D4AF37" : "#47556933",
                                boxShadow: isHovering ? "0 0 8px rgba(212, 175, 55, 0.4)" : "none"
                            }}
                            transition={{ duration: 0.4 }}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className='relative px-6 pb-6 rounded-3xl bg-p2/20 pt-14'>
                                <span className='bg-[#475569] download_preview-dot left-6' />
                                <span className='bg-[#47556988] download_preview-dot left-11' />
                                <span className='bg-[#47556977] download_preview-dot left-16' />

                                {/* Image with overlay */}
                                <div
                                    className="relative overflow-hidden cursor-pointer rounded-xl group"
                                    onClick={openVideo}
                                >
                                    {/* The image */}
                                    <img
                                        src={DashboardImage}
                                        alt="Dashboard preview"
                                        className='w-full h-auto'
                                    />

                                    {/* Semi-transparent black overlay with play icon */}
                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-50">
                                        {/* Play button icon */}
                                        <div className="w-20 h-20 rounded-full bg-[#D4AF37] bg-opacity-90 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                                            {/* Play triangle */}
                                            <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </SectionContent>

            {/* Video modal with blurred background - only used on desktop */}
            {showVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                    {/* Blurred background overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        onClick={closeVideo}
                    ></div>

                    {/* Video container */}
                    <div className="relative z-10 w-full max-w-5xl overflow-hidden bg-black shadow-2xl rounded-xl">
                        {/* Close button */}
                        <button
                            className="absolute z-20 flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-white rounded-full top-4 right-4 bg-opacity-20 hover:bg-opacity-30"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeVideo();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video player - replace src with your actual video URL */}
                        <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Replace with your actual video URL
                                title="Video Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}