import React, { RefObject,useEffect } from "react";
import { DocumentSection, ViewPortState, SectionRefs } from "@/types";
import { motion } from 'framer-motion';

interface DocumentContentProps {
    sections: DocumentSection[];
    activeSection: string;
    sectionRefs: React.MutableRefObject<SectionRefs>;
    contentRef: React.RefObject<HTMLDivElement>;
    title: string;
    lastUpdated: string;
    showAgreement?: boolean;
    primaryColor?: string;
    onAgree?: () => void;
    viewportState: ViewPortState;
}

export const DocumentContent: React.FC<DocumentContentProps> = ({
    sections,
    activeSection,
    sectionRefs,
    contentRef,
    title,
    lastUpdated,
    showAgreement = true,
    primaryColor = "#D4AF37",
    onAgree,
    viewportState
}) => {
    const isDesktop = viewportState === 'desktop';
    const isMobile = viewportState === 'mobile';
    
    // Focus content area for keyboard scrolling
    const handleContentMouseEnter = () => {
        if (contentRef.current) {
            contentRef.current.focus();
        }
    };

    return (
        <div className={`flex flex-col h-full overflow-hidden 
            ${isDesktop ? 'md:w-2/3 lg:w-3/4' : 'w-full'}`}>
            {/* Header (desktop only) */}
            {isDesktop && (
                <div className="z-10 p-4 pt-4 pb-3 bg-white border-b border-gray-100 md:p-6 md:px-8 md:pt-6 md:pb-4">
                    <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-neutral-800">{title}</h1>
                    <p className="mt-1 text-xs text-gray-500 md:text-sm">Updated {lastUpdated}</p>
                </div>
            )}

            {/* Scrollable content area */}
            <div
                ref={contentRef}
                className={`flex-grow overflow-y-auto focus:outline-none scrollbar-thin
                    ${isMobile 
                        ? 'p-3 pt-2 pb-36' // Extra space for mobile nav
                        : viewportState === 'tablet' 
                            ? 'p-5 pt-4 pb-20' // Extra space for tablet nav
                            : 'p-6 md:px-8'}`}
                onMouseEnter={handleContentMouseEnter}
                tabIndex={0}
                style={{
                    overflowY: 'auto',
                    scrollBehavior: 'smooth'
                }}
            >
                {/* Last updated (non-desktop) */}
                {!isDesktop && (
                    <p className={`${isMobile ? 'text-[10px]' : 'text-xs'} text-gray-500 mb-4`}>
                        Updated {lastUpdated}
                    </p>
                )}
                
                {/* Content sections */}
                <div className={isMobile ? "space-y-6" : "space-y-10"}>
                    {sections.map((section, index) => (
                        <div
                            key={section.slug}
                            id={section.slug}
                            ref={sectionRefs.current[section.slug]}
                            className={isMobile 
                                ? "mb-6 scroll-mt-14" 
                                : viewportState === 'tablet' 
                                    ? "mb-10 scroll-mt-20"
                                    : "mb-10 scroll-mt-24"}
                        >
                            <h2 className={`flex items-center pb-2 mb-3 font-semibold border-b border-gray-100 text-neutral-800
                                ${isMobile ? 'text-base' : viewportState === 'tablet' ? 'text-lg' : 'text-xl'}`}>
                                <span 
                                    className={`inline-flex items-center justify-center rounded-full text-white mr-3 transition-colors
                                    ${isMobile ? 'w-5 h-5 text-xs' : 'w-6 h-6 text-sm'}`}
                                    style={{ 
                                        backgroundColor: activeSection === section.slug ? primaryColor : '#9CA3AF' 
                                    }}
                                >
                                    {index + 1}
                                </span>
                                {section.title}
                            </h2>

                            {/* Section content */}
                            <div
                                className={`prose text-gray-600 max-w-none 
                                    ${isMobile 
                                        ? 'prose-xs mb-3' // Smaller text for mobile
                                        : viewportState === 'tablet' 
                                            ? 'prose-sm mb-5' 
                                            : 'mb-6'}`}
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />

                            {/* Subsections */}
                            {section.subsections && section.subsections.length > 0 && (
                                <div className={isMobile 
                                    ? "mt-3 ml-3 space-y-3" 
                                    : viewportState === 'tablet' 
                                        ? "mt-5 ml-5 space-y-5"
                                        : "mt-6 ml-6 space-y-6"}>
                                    {section.subsections.map((subsection) => (
                                        <div
                                            key={subsection.slug}
                                            id={subsection.slug}
                                            ref={sectionRefs.current[subsection.slug]}
                                            className={isMobile ? "scroll-mt-14" : "scroll-mt-20"}
                                        >
                                            <h3 
                                                className={`font-medium flex items-center transition-colors
                                                ${isMobile 
                                                    ? 'text-sm mb-1.5' 
                                                    : viewportState === 'tablet' 
                                                        ? 'text-base mb-2.5'
                                                        : 'text-lg mb-3'}`}
                                                style={{ 
                                                    color: activeSection === subsection.slug ? primaryColor : '#1F2937'
                                                }}
                                            >
                                                <span 
                                                    className="inline-block mr-3 transition-colors rounded-full"
                                                    style={{ 
                                                        backgroundColor: activeSection === subsection.slug ? primaryColor : '#9CA3AF',
                                                        width: isMobile ? '4px' : '6px',
                                                        height: isMobile ? '4px' : '6px'
                                                    }}
                                                ></span>
                                                {subsection.title}
                                            </h3>
                                            <div
                                                className={`prose text-gray-600 max-w-none 
                                                    ${isMobile 
                                                        ? 'prose-xs' 
                                                        : viewportState === 'tablet' 
                                                            ? 'prose-sm'
                                                            : ''}`}
                                                dangerouslySetInnerHTML={{ __html: subsection.content }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Agreement section */}
                {showAgreement && (
                    <div 
                        className={`flex flex-col items-center justify-between gap-4 pt-4 border-t sm:flex-row
                            ${isMobile 
                                ? 'mt-6 mb-16' 
                                : viewportState === 'tablet' 
                                    ? 'mt-8 mb-12'
                                    : 'mt-12 pt-6'}`}
                    >
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="agree" 
                                className={`mr-2 rounded border-gray-300 text-indigo-600 ${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`}
                            />
                            <label htmlFor="agree" className={`text-gray-600 ${isMobile ? 'text-[10px]' : 'text-sm'}`}>
                                Send copy to my email
                            </label>
                        </div>
                        <button 
                            className={`text-white font-medium rounded-md transition-colors shadow-sm
                                ${isMobile 
                                    ? 'w-full px-4 py-2 text-xs' 
                                    : viewportState === 'tablet' 
                                        ? 'w-auto px-5 py-2.5 text-sm' 
                                        : 'w-auto px-6 py-3'}`}
                            style={{ backgroundColor: primaryColor }}
                            onClick={onAgree}
                        >
                            I AGREE
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};