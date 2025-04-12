import React, { useState, useRef, useEffect, RefObject } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { staticTermsData, TermsServiceType } from '@/libs/constants';
import { cn } from '@/libs/utils';
import SectionContent from '../Components/Utilities/SectionContent';

interface TermsSubsection {
    id: number;
    section_id: number;
    slug: string;
    title: string;
    content: string;
    order_index: number;
    is_active: boolean;
}

interface TermsSection {
    id: number;
    slug: string;
    title: string;
    content: string;
    order_index: number;
    is_active: boolean;
    subsections: TermsSubsection[];
}

// Define a type for the section refs
interface SectionRefs {
    [key: string]: RefObject<HTMLElement>;
}

const getAllSectionIds = () => {
    const allIds: number[] = [];
    staticTermsData.forEach(section => {
        allIds.push(section.id);
        section.subsections?.forEach(subsection => {
            allIds.push(subsection.id);
        });
    });
    return allIds;
};



export default function TermsSection() {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const sectionRefs = useRef<SectionRefs>({});
    const tocRef = useRef<HTMLDivElement>(null);
    
    // For clarity in the component, using termsSections
    const termsSections = staticTermsData;

    // Initialize refs for each section
    useEffect(() => {
        termsSections.forEach(section => {
            sectionRefs.current[section.slug] = React.createRef<HTMLElement>();
            section.subsections?.forEach(subsection => {
                sectionRefs.current[subsection.slug] = React.createRef<HTMLElement>();
            });
        });
    }, []);

    // Handle scroll events with Framer Motion
    useEffect(() => {
        const unsubscribe = scrollY.on('change', (y) => {
            // Set scrolling state to true
            if (!isScrolling) {
                setIsScrolling(true);
            }

            // Determine scroll direction
            if (y > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollTop(y);

            // Clear timeout to reset scrolling flag
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        });

        return () => {
            unsubscribe();
            clearTimeout(window.scrollTimeout);
        };
    }, [scrollY, lastScrollTop, isScrolling]);

    // Detect active section with IntersectionObserver for better performance
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-80px 0px 0px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section-id');
                    if (sectionId && sectionId !== activeSection) {
                        setActiveSection(sectionId);
                    }
                }
            });
        }, options);

        // Observe all sections
        document.querySelectorAll('[data-section-id]').forEach(section => {
            observer.observe(section);
        });

        return () => {
            document.querySelectorAll('[data-section-id]').forEach(section => {
                observer.unobserve(section);
            });
        };
    }, [termsSections, activeSection]);

    // Effect to scroll the TOC to keep active item in view
    useEffect(() => {
        if (activeSection && tocRef.current) {
            const activeElement = tocRef.current.querySelector(`.toc-item-${activeSection}`);
            if (activeElement) {
                // Scroll the active item into view with smooth behavior
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        }
    }, [activeSection]);

    // Framer motion variants for TOC container
    const tocContainerVariants = {
        hidden: { opacity: 0.7, x: -20 },
        visible: { opacity: 1, x: 0 },
        scrolling: {
            opacity: 1,
            x: 0,
            position: 'fixed' as const,
            top: '250px',
            transition: { duration: 0.3 }
        }
    };

    // Animation variants for TOC item
    const tocItemVariants = {
        inactive: {
            color: '#4B5563',
            backgroundColor: 'transparent',
            transition: { duration: 0.2 }
        },
        active: {
            color: '#D4AF37',
            backgroundColor: '#F9FAFB',
            scale: 1.02,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="overflow-x-clip overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 pb-20 font-poppins">
            <SectionContent classes="">
                <div className="px-4 py-16 mx-auto">
                    <div className="flex flex-col gap-8 lg:flex-row">
                        {/* Left side: Table of Contents */}
                        <div className="relative lg:w-1/3 xl:w-1/4">
                            <motion.div
                                ref={tocRef}
                                className="p-6 bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626] rounded-lg shadow-lg max-h-[calc(100vh-120px)]"
                                variants={tocContainerVariants}
                                initial="hidden"
                                animate={isScrolling ? "scrolling" : "visible"}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="mb-4 text-2xl font-bold text-gray-800">Table of Contents</h2>
                                <ul className="space-y-2">
                                    {termsSections.map((section) => (
                                        <li key={section.id}>
                                            <motion.div
                                                className={`toc-item-${section.slug} rounded`}
                                                variants={tocItemVariants}
                                                initial="inactive"
                                                animate={activeSection === section.slug ? "active" : "inactive"}
                                            >
                                                <Link
                                                    to={section.slug}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-80}
                                                    duration={800}
                                                    className="block px-3 py-2 transition-colors rounded cursor-pointer"
                                                    activeClass="active-link"
                                                >
                                                    {section.title}
                                                </Link>
                                            </motion.div>
                                            
                                            {section.subsections.length > 0 && (
                                                <ul className="pl-4 mt-1 space-y-1">
                                                    {section.subsections.map((subsection) => (
                                                        <li key={subsection.id}>
                                                            <motion.div
                                                                className={`toc-item-${subsection.slug} rounded`}
                                                                variants={tocItemVariants}
                                                                initial="inactive"
                                                                animate={activeSection === subsection.slug ? "active" : "inactive"}
                                                            >
                                                                <Link
                                                                    to={subsection.slug}
                                                                    spy={true}
                                                                    smooth={true}
                                                                    offset={-80}
                                                                    duration={800}
                                                                    className="block px-3 py-1 text-sm transition-colors rounded cursor-pointer"
                                                                    activeClass="active-link"
                                                                >
                                                                    {subsection.title}
                                                                </Link>
                                                            </motion.div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Right side: Terms Content */}
                        <div className="p-8 overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626] rounded-lg shadow-lg lg:w-2/3 xl:w-3/4">
                            <h1 className="mb-8 text-3xl font-bold text-gray-800">Terms of Use</h1>

                            {termsSections.map((section) => (
                                <motion.section
                                    key={section.id}
                                    id={section.slug}
                                    data-section-id={section.slug}
                                    className="mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    ref={sectionRefs.current[section.slug] as React.RefObject<HTMLElement>}
                                >
                                    <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-800 border-b border-gray-200">
                                        {section.title}
                                    </h2>

                                    <div
                                        className="mb-6 prose prose-lg max-w-none"
                                        dangerouslySetInnerHTML={{ __html: section.content }}
                                    />

                                    {section.subsections.map((subsection) => (
                                        <motion.div
                                            key={subsection.id}
                                            id={subsection.slug}
                                            data-section-id={subsection.slug}
                                            className="mb-6 ml-6"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            ref={sectionRefs.current[subsection.slug] as React.RefObject<HTMLDivElement>}
                                        >
                                            <h3 className="mb-3 text-xl font-medium text-gray-800">{subsection.title}</h3>
                                            <div
                                                className="prose prose-lg max-w-none"
                                                dangerouslySetInnerHTML={{ __html: subsection.content }}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.section>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContent>
        </section>
    );
}