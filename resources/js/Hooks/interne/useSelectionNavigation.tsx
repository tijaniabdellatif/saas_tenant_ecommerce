import { useState, useRef, useEffect, RefObject, createRef } from 'react';
import { DocumentSection, SectionRefs } from '@/types';
export const useSectionNavigation = (sections: DocumentSection[], initialSection: string = '') => {
    // Core state management
    const [activeSection, setActiveSection] = useState<string>(
        initialSection || (sections[0]?.slug || '')
    );
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

    // Refs for DOM elements
    const sectionRefs = useRef<SectionRefs>({});
    const contentRef = useRef<HTMLDivElement>(null);
    const tocContainerRef = useRef<HTMLDivElement>(null);

    // Initialize section refs
    useEffect(() => {
        // Create refs for main sections
        sections.forEach((section) => {
            sectionRefs.current[section.slug] = createRef<HTMLDivElement>();

            // Create refs for subsections
            section.subsections?.forEach((subsection) => {
                sectionRefs.current[subsection.slug] = createRef<HTMLDivElement>();
            });
        });
    }, [sections]);

    // Update currentSectionIndex when activeSection changes
    useEffect(() => {
        // Find which main section contains the active section/subsection
        const mainSections = sections.map(section => section.slug);
        const activeSectionMainIndex = mainSections.indexOf(activeSection);

        if (activeSectionMainIndex !== -1) {
            // Active section is a main section
            setCurrentSectionIndex(activeSectionMainIndex);
        } else {
            // Check if active section is a subsection
            for (let i = 0; i < sections.length; i++) {
                if (sections[i].subsections?.some(sub => sub.slug === activeSection)) {
                    setCurrentSectionIndex(i);
                    break;
                }
            }
        }

        // Scroll TOC to show active section
        scrollTOCToActiveSection();
    }, [activeSection, sections]);

    // Function to scroll TOC so active section is visible
    const scrollTOCToActiveSection = () => {
        if (!tocContainerRef.current) return;

        // Find active section element in TOC
        const tocElement = document.getElementById(`toc-${activeSection}`);
        if (!tocElement) return;

        const tocContainer = tocContainerRef.current;
        const tocContainerHeight = tocContainer.clientHeight;
        const tocElementTop = tocElement.offsetTop;
        const tocElementHeight = tocElement.clientHeight;

        // Calculate if we're near the bottom
        const allSections = sections.flatMap(section => [
            section.slug,
            ...(section.subsections?.map(sub => sub.slug) || [])
        ]);
        const activeIndex = allSections.indexOf(activeSection);
        const totalSections = allSections.length;

        // Special handling for last 20% of sections
        if (activeIndex > totalSections * 0.8) {
            // Just scroll to the bottom
            tocContainer.scrollTo({
                top: tocContainer.scrollHeight,
                behavior: 'smooth'
            });
        } else {
            // Center the active section in the TOC
            const centerPosition = tocElementTop - (tocContainerHeight / 2) + (tocElementHeight / 2);
            tocContainer.scrollTo({
                top: Math.max(0, centerPosition),
                behavior: 'smooth'
            });
        }
    };

    // Function to scroll to a section when clicked in TOC
    const scrollToSection = (sectionId: string) => {
        // Update active section
        setActiveSection(sectionId);

        // Set flag to prevent scroll handler from changing it
        setIsProgrammaticScroll(true);

        const section = sectionRefs.current[sectionId];
        if (section?.current && contentRef.current) {
            // Calculate position to scroll to
            const sectionTop = section.current.offsetTop;
            const headerOffset = 80; // Offset to account for header
            const targetPosition = sectionTop - headerOffset;

            // Perform scroll
            contentRef.current.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });

            // Reset programmatic scroll flag after animation
            setTimeout(() => {
                setIsProgrammaticScroll(false);
            }, 800);
        } else {
            setIsProgrammaticScroll(false);
        }
    };

    // Set up intersection observer to track visible sections
    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Skip if in the middle of programmatic scrolling
                if (isProgrammaticScroll) return;

                // Find the most visible section
                let mostVisible = { id: '', ratio: 0 };

                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > mostVisible.ratio) {
                        mostVisible = {
                            id: entry.target.id,
                            ratio: entry.intersectionRatio
                        };
                    }
                });

                // Update active section if we found a visible one
                if (mostVisible.id && mostVisible.id !== activeSection) {
                    setActiveSection(mostVisible.id);
                }
            },
            {
                root: contentRef.current,
                rootMargin: '-10% 0px -20% 0px',
                threshold: [0.1, 0.2, 0.3, 0.4, 0.5]
            }
        );

        // Observe all section and subsection elements
        Object.entries(sectionRefs.current).forEach(([id, ref]) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [activeSection, isProgrammaticScroll]);

    // Helper function for mobile navigation
    const nextSection = () => {
        if (currentSectionIndex < sections.length - 1) {
            scrollToSection(sections[currentSectionIndex + 1].slug);
        }
    };

    const prevSection = () => {
        if (currentSectionIndex > 0) {
            scrollToSection(sections[currentSectionIndex - 1].slug);
        }
    };

    // Function to check if a section should be marked as "passed"
    const isSectionPassed = (sectionIndex: number): boolean => {
        const allSections = sections.flatMap(section => [
            section.slug,
            ...(section.subsections?.map(sub => sub.slug) || [])
        ]);

        const activeIndex = allSections.indexOf(activeSection);
        const currentSectionIndex = allSections.indexOf(sections[sectionIndex].slug);

        return activeIndex > currentSectionIndex && activeIndex !== -1;
    };

    return {
        activeSection,
        sectionRefs,
        contentRef,
        tocContainerRef,
        scrollToSection,
        isSectionPassed,
        currentSectionIndex,
        nextSection,
        prevSection
    };
};
