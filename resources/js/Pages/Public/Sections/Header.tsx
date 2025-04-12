import React, { useRef, useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import AnimationData from '@/Assets/Lottie_Lego.json';
import MenuIcon from '@/Pages/Public/Components/MenuIcon';
import { Link } from '@inertiajs/react';
import LandingButton from '../Components/Utilities/LandingButton';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderProps } from '@/types';
import Navigation from '../Components/Navigation';

export default function Header({ showNavigation = true, currentRoute = "/" }: HeaderProps) {
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('English');
    const langMenuRef = useRef<HTMLDivElement>(null);


    const isNavigationVisible = showNavigation || currentRoute === '/';




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

    // Close language menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };

        // Add event listener
        if (isLangMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLangMenuOpen]);

    // Handle language selection
    const handleLanguageChange = (language: string) => {
        setCurrentLanguage(language);
        setIsLangMenuOpen(false);
        // Here you would implement actual language change logic
    };

    return (
        <header className='fixed top-0 z-50 w-full'>
            <Banner text='Get Started for Free' additionalText='Launch Your Store Today' />
            <div className={`relative mt-10 py-4 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]' : ''}`}>
                <div className='px-4 mx-auto max-w-7xl md:px-6 lg:px-8'>
                    <div className='flex items-center justify-between'>
                        {/* Logo container - Left side */}
                        <div className='relative w-24 h-16 overflow-hidden md:w-28 md:h-20'>
                            <Link href='/'>

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
                            </Link>
                        </div>

                        {/* Desktop navigation - Layout restructured - only visible on lg screens and up */}

                        <Navigation
                            isVisible={isNavigationVisible}
                            isLangMenuOpen={isLangMenuOpen}
                            currentLanguage={currentLanguage}
                            langMenuRef={langMenuRef}
                            handleLanguageChange={handleLanguageChange}
                            setIsLangMenuOpen={setIsLangMenuOpen}
                        />

                        {/* Tablet and Mobile right-side actions */}
                        <div className='flex items-center space-x-4 lg:hidden'>
                            {/* Language Toggle Button for Tablet */}
                            <div className="relative" ref={langMenuRef}>
                                <motion.button
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                    className="flex items-center justify-center w-10 h-10 text-color-dark hover:text-black focus:outline-none"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="sr-only">Language</span>
                                    {/* FontAwesome-style globe icon */}
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <motion.path
                                            fill="currentColor"
                                            d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H8.6C38.6 77.5 102.2 20.7 180.6 0c-25.5 34.2-45.3 87.7-55.3 151.6zM8.1 192C2.8 212.5 0 233.9 0 256s2.8 43.5 8.1 64H131.2c-2.1-20.6-3.2-42-3.2-64s1.1-43.4 3.2-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 483.3 48.6 426.5 18.6 352H135.3zm358.1 0c-30 74.5-93.6 131.3-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                                            animate={{
                                                rotate: isLangMenuOpen ? [0, 15, 0] : 0
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </svg>
                                </motion.button>

                                {/* Language Dropdown */}
                                <AnimatePresence>
                                    {isLangMenuOpen && (
                                        <motion.div
                                            className="absolute right-0 z-50 w-40 py-1 mt-2 bg-white border border-gray-200 rounded-md shadow-lg"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {['English', 'Français', 'العربية'].map((language) => (
                                                <motion.button
                                                    key={language}
                                                    onClick={() => handleLanguageChange(language)}
                                                    className={`block w-full text-left px-4 py-2 text-sm ${currentLanguage === language ? 'bg-gray-100' : 'hover:bg-gray-50'
                                                        }`}
                                                    whileHover={{ backgroundColor: '#f3f4f6' }}
                                                    whileTap={{ backgroundColor: '#e5e7eb' }}
                                                >
                                                    {language}
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Menu Button (Hamburger) */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <MenuIcon
                                    size={45}
                                    color='#333'
                                    onClick={() => console.log('clicked')}
                                    className='p-2'
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}