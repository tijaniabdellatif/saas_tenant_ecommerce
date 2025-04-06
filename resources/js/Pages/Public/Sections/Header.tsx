import { Link } from "@inertiajs/react";
import Logo from "../Components/Logo";
import NavigationLink from "../Components/NavigationLink";
import { Link as ScrollLink } from "react-scroll";
import { cn } from "@/libs/utils";
import { Humber, BgOutline, BgOutlineFill, Close } from '@/Assets/index';
import { useState, useEffect } from "react";

// Add these styles to your CSS file or global stylesheet
// Or import them in a separate CSS file
const animationStyles = `
    @keyframes fadeOut {
        from { 
            opacity: 1;
            transform: translateY(0);
        }
        to { 
            opacity: 0;
            transform: translateY(-10px);
        }
    }
    
    @keyframes swiftOut {
        0% { 
            opacity: 1;
            transform: translateX(0);
        }
        100% { 
            opacity: 0;
            transform: translateX(-20px);
        }
    }
    
    .menu-closing {
        animation: fadeOut 0.3s ease-in-out forwards;
    }
    
    .menu-closing nav {
        animation: swiftOut 0.25s ease-in-out forwards;
    }
    
    .menu-closing .bg-image {
        animation: fadeOut 0.2s ease-in-out forwards;
    }
    
    @media (max-width: 1023px) {
        .mobile-menu {
            transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
        }
        
        .mobile-menu.menu-closing {
            transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
        }
        
        .mobile-menu:not(.menu-closing) {
            transition: opacity 0.3s ease-in-out, visibility 0s linear;
        }
    }
`;

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [animating, setAnimating] = useState<boolean>(false);
    
    // Add the CSS to the document on component mount
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = animationStyles;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    
    // Manage body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    
    // Handle menu toggle with animation
    const toggleMenu = () => {
        setAnimating(true);
        
        if (isOpen) {
            // Start closing animation
            const menu = document.querySelector('.mobile-menu');
            menu?.classList.add('menu-closing');
            
            // Apply swift-out animation to elements inside the menu
            const navElement = menu?.querySelector('nav');
            if (navElement) {
                navElement.style.animationDelay = '0s';
            }
            
            // Wait for animation to complete before actually closing
            setTimeout(() => {
                setIsOpen(false);
                setAnimating(false);
                menu?.classList.remove('menu-closing');
            }, 300); // Match this with your CSS transition duration
        } else {
            setIsOpen(true);
            
            // Allow time for entrance animation
            setTimeout(() => {
                setAnimating(false);
            }, 300);
        }
    };
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full py-10">
            <div className="container flex items-center h-14 max-lg:px-5">
                <Link href="/" className="flex-1 cursor-pointer lg:hidden z-2">
                    <Logo width={115} height={60} alt="Enimsay" />
                </Link>
                
                <div className={cn([
                    "w-full mobile-menu",
                    'max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2',
                    "max-lg:opacity-0 transition-all duration-300 ease-in-out",
                    isOpen ? 'max-lg:opacity-100 max-lg:visible' : "max-lg:invisible max-lg:pointer-events-none"
                ])}>
                    <div className={cn([
                        'max-lg:relative max-lg:flex max:lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden',
                        "sidebar-before max-md:px-4",
                        "transition-transform duration-300 ease-in-out",
                        isOpen ? 'translate-y-0' : 'max-lg:translate-y-10'
                    ])}>
                        <nav className={cn([
                            'max-lg:relative max-lg:z-2 max-lg:my-auto',
                            "transition-opacity duration-300 ease-in-out",
                            isOpen ? 'opacity-100' : 'max-lg:opacity-0',
                            "transition-transform duration-300 delay-100",
                            isOpen ? 'translate-x-0' : 'max-lg:translate-x-10'
                        ])}>
                            <ul className="flex font-semibold list-none max-lg:block max-lg:px-10">
                                <li className="nav-li">
                                    <NavigationLink to="/" title="features" />
                                    <div className="dot" />
                                    <NavigationLink to="/" title="pricing" />
                                </li>
                                
                                <li className="nav-logo">
                                    <ScrollLink
                                        to="hero"
                                        offset={-100}
                                        spy
                                        smooth
                                        className={cn([
                                            'max-lg:hidden',
                                            'transition-transform duration-500',
                                            'cursor-pointer'
                                        ])}
                                    >
                                        <Logo width={150} height={50} alt="Enimsay" />
                                    </ScrollLink>
                                </li>
                                
                                <li className="nav-li">
                                    <NavigationLink to="/" title="faq" />
                                    <div className="dot" />
                                    <NavigationLink to="/" title="subscribe" />
                                </li>
                            </ul>
                        </nav>
                        
                        <div className={cn([
                            "lg:hidden block bg-image",
                            "absolute top-1/2 left-0",
                            'w-[960px] h-[380px]',
                            'translate-x-[-290px] -translate-y-1/2 rotate-90',
                            "transition-opacity duration-500 ease-in-out transition-transform",
                            isOpen ? 'opacity-100' : 'opacity-0'
                        ])}>
                            <img className="relative z-2" src={BgOutline} width={960} height={380} alt='background' />
                            <img className={cn([
                                'absolute inset-0',
                                'mix-blend-soft-light',
                                'opacity-5'
                            ])} src={BgOutlineFill} width={960} height={380} alt='background' />
                        </div>
                    </div>
                </div>
                
                <button
                    onClick={toggleMenu}
                    disabled={animating}
                    className={cn([
                        "flex items-center justify-center border-2 rounded-full lg:hidden z-2 size-10 border-s4/25",
                        "transition-all duration-300 ease-in-out",
                        animating ? "opacity-50" : "opacity-100"
                    ])}>
                    <div className="relative w-5 h-5">
                        <img 
                            src={Humber} 
                            alt="Menu" 
                            className={cn([
                                "object-contain size-1/2 absolute inset-0 m-auto",
                                "transition-all duration-300 ease-in-out",
                                isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                            ])}
                        />
                        <img 
                            src={Close} 
                            alt="Close" 
                            className={cn([
                                "object-contain size-1/2 absolute inset-0 m-auto",
                                "transition-all duration-300 ease-in-out",
                                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
                            ])}
                        />
                    </div>
                </button>
            </div>
        </header>
    );
}