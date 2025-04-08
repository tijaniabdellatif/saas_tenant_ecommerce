import React, { useRef, useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import AnimationData from '@/Assets/Lottie_Lego.json';
import MenuIcon from '@/Pages/Public/Components/MenuIcon';
import { Link } from '@inertiajs/react';
import LandingButton from '../Components/Utilities/LandingButton';

export default function Header() {
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll event listener to track when user scrolls
    useEffect(() => {
        const handleScroll = () => {
            // Check if page is scrolled more than 10px
            setIsScrolled(window.scrollY > 10);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='fixed top-0 w-full z-50'>
            <Banner text='Get Started for Free' additionalText='Launch Your Store Today' />
            <div className={`relative mt-10 py-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]' : ''}`}>
                <div className='px-4 mx-auto max-w-7xl md:px-6 lg:px-8'>
                    <div className='flex items-center justify-between'>
                        {/* Logo container */}
                        <div className='relative w-24 h-16 overflow-hidden md:w-28 md:h-20'>
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

                        {/* Mobile menu */}
                        <div className='flex items-center md:hidden'>
                            <MenuIcon
                                size={50}
                                color='#333'
                                onClick={() => console.log('clicked')}
                                className='p-2'
                            />
                        </div>

                        {/* Desktop navigation */}
                        <nav className='items-center hidden md:flex'>
                            <div className='font-poppins flex items-center space-x-3 lg:space-x-6'>
                                <Link href='' className='text-sm lg:text-base text-color-dark whitespace-nowrap hover:text-p2 transition-colors'>
                                    About
                                </Link>

                                <Link href='' className='text-sm lg:text-base text-color-dark whitespace-nowrap hover:text-black transition-colors'>
                                    Features
                                </Link>

                                <Link href='' className='text-sm lg:text-base text-color-dark whitespace-nowrap hover:text-black transition-colors'>
                                    Pricing
                                </Link>

                                <Link href='' className='text-sm lg:text-base text-color-dark whitespace-nowrap hover:text-black transition-colors'>
                                    Updates
                                </Link>

                                <Link href='' className='text-sm lg:text-base text-color-dark whitespace-nowrap hover:text-black transition-colors'>
                                    Help
                                </Link>

                                <Link href='' className='text-sm lg:text-base text-color-dark whitespace-nowrap hover:text-black transition-colors'>
                                    Blog
                                </Link>
                                
                                <Link href='' className='text-sm lg:text-base text-color-dark whitespace-nowrap hover:text-black transition-colors'>
                                    Contact Us
                                </Link>

                                {/* Animated button */}
                                <LandingButton 
                                text='Get Started' 
                                buttonClassName='text-white bg-p2' 
                                animationClassName='bg-gradient-to-r from-amber-500 to-slate-700'
                                />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}