import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import LandingButton from "./Utilities/LandingButton";
import { useState, useRef, RefObject } from "react";
import { NavigationProps } from "@/types";



export default function Navigation({
    isVisible = true,
    isLangMenuOpen,
    currentLanguage,
    langMenuRef,
    handleLanguageChange,
    setIsLangMenuOpen,

}: NavigationProps) {




    return (
        <div className='hidden lg:flex lg:items-center lg:w-full lg:justify-between'>
            {/* Navigation links - Center */}
            <div className='flex-1'></div> {/* Spacer */}

            {
                isVisible && (<nav className='flex items-center justify-center flex-1'>
                    <div className='flex items-center space-x-4 xl:space-x-8 font-poppins'>
                        <Link href='' className='text-sm transition-colors lg:text-base text-color-dark whitespace-nowrap hover:text-black'>
                            Features
                        </Link>

                        <Link href='' className='text-sm transition-colors lg:text-base text-color-dark whitespace-nowrap hover:text-black'>
                            Pricing
                        </Link>

                        <Link href='' className='text-sm transition-colors lg:text-base text-color-dark whitespace-nowrap hover:text-black'>
                            Integrations
                        </Link>

                        <Link href='' className='text-sm transition-colors lg:text-base text-color-dark whitespace-nowrap hover:text-black'>
                            Demo
                        </Link>

                        <Link href='' className='text-sm transition-colors lg:text-base text-color-dark whitespace-nowrap hover:text-black'>
                            Testimonials
                        </Link>

                        <Link href='' className='text-sm transition-colors lg:text-base text-color-dark whitespace-nowrap hover:text-black'>
                            FAQ
                        </Link>
                    </div>
                </nav>)
            }

            {/* Action buttons and language - Right side */}
            <div className='flex items-center justify-end flex-1 ml-6 space-x-3 lg:space-x-4 xl:space-x-5 lg:ml-8 xl:ml-10'>
                {/* Language Toggle Button */}
                <div className="relative" ref={langMenuRef}>
                    <motion.button
                        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                        className="flex items-center text-sm lg:text-base text-color-dark hover:text-black focus:outline-none"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>{currentLanguage}</span>
                        <motion.svg
                            className="w-4 h-4 ml-1"
                            animate={{ rotate: isLangMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </motion.svg>
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


                <LandingButton
                    text='Get Started'
                    buttonClassName='text-white bg-p2'
                    animationClassName='bg-gradient-to-r from-amber-500 to-slate-700'
                />

                {/* Login Button (Transparent) */}
                <LandingButton
                    text='Login'
                    buttonClassName='text-white bg-p2 w-[100px]'
                    animationClassName='bg-gradient-to-r from-amber-500 to-slate-700'
                    isTransparent={true}


                />

                {/* Get Started Button */}

            </div>
        </div>
    );
}