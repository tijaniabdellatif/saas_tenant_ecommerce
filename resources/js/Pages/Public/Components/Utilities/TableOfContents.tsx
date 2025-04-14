import React from "react";
import { DocumentSection, SectionRefs } from "@/types";
import { motion } from 'framer-motion';

interface TableOfContentsProps {
    sections: DocumentSection[];
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
    isSectionPassed: (sectionIndex: number) => boolean;
    title: string;
    tocContainerRef: React.RefObject<HTMLDivElement>;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
    sections,
    activeSection,
    scrollToSection,
    isSectionPassed,
    title,
    tocContainerRef
}) => {
    // Helper function to calculate progress for timeline
    const calculateProgress = () => {
        const allSections = sections.flatMap(section => [
            section.slug,
            ...(section.subsections?.map(sub => sub.slug) || [])
        ]);
        
        const activeIndex = allSections.indexOf(activeSection);
        const totalSections = allSections.length;
        
        if (activeIndex === -1) return '0%';
        return `${((activeIndex + 1) / totalSections) * 100}%`;
    };
    
    return (
        <div className="h-full p-4 overflow-hidden bg-gray-100 md:w-1/3 lg:w-1/4 md:p-6">
            <h2 className="mb-4 text-lg font-bold md:text-xl text-neutral-800 md:mb-6">{title}</h2>
            
            {/* Scrollable TOC container */}
            <div 
                ref={tocContainerRef}
                className="h-full pb-6 pr-2 overflow-y-auto" 
                style={{ maxHeight: "calc(100% - 60px)" }}
            >
                <div className="relative">
                    {/* Timeline background line */}
                    <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full" />
                    
                    {/* Progress line */}
                    <div
                        className="absolute left-3.5 top-0 w-0.5 bg-[#D4AF37] rounded-full transition-all duration-300"
                        style={{ height: calculateProgress() }}
                    />
                    
                    {/* Sections */}
                    {sections.map((section, index) => {
                        const isActive = section.slug === activeSection || 
                                        section.subsections?.some(sub => sub.slug === activeSection);
                        
                        return (
                            <div key={section.slug}>
                                {/* Main section button */}
                                <div className="relative mb-3">
                                    <button
                                        id={`toc-${section.slug}`}
                                        type="button"
                                        className={`w-full text-left rounded-md pl-8 md:pl-10 pr-2 md:pr-3 py-2 md:py-2.5 cursor-pointer hover:bg-white hover:bg-opacity-70 transition-colors relative
                                            ${isActive ? 'bg-white bg-opacity-80' : 'opacity-75'}`}
                                        onClick={() => scrollToSection(section.slug)}
                                        aria-pressed={activeSection === section.slug}
                                    >
                                        {/* Numbered circle */}
                                        <div
                                            className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center shadow-sm z-10 transition-all duration-300
                                                ${(isActive)
                                                    ? 'bg-[#D4AF37] text-white'
                                                    : isSectionPassed(index)
                                                        ? 'bg-[#D4AF37] bg-opacity-30 text-white'
                                                        : 'bg-white border-2 border-gray-300'
                                                }`}
                                        >
                                            <span className="text-sm font-medium">
                                                {index + 1}
                                            </span>
                                        </div>
                                        
                                        {/* Section title */}
                                        <span className={`text-sm font-medium transition-colors duration-300
                                            ${isActive ? 'text-[#D4AF37]' : 'text-neutral-800'}`}
                                        >
                                            {section.title}
                                        </span>
                                    </button>
                                </div>
                                
                                {/* Subsections */}
                                {section.subsections && section.subsections.length > 0 && (
                                    <div className="mb-4 ml-10 space-y-1">
                                        {section.subsections.map((subsection) => (
                                            <button
                                                id={`toc-${subsection.slug}`}
                                                key={subsection.slug}
                                                type="button"
                                                className={`w-full text-left py-1.5 px-3 cursor-pointer rounded transition-colors text-xs
                                                    ${activeSection === subsection.slug
                                                        ? 'font-medium text-[#D4AF37] bg-white bg-opacity-70'
                                                        : 'text-gray-600 opacity-75 hover:bg-white hover:bg-opacity-40'}`}
                                                onClick={() => scrollToSection(subsection.slug)}
                                                aria-pressed={activeSection === subsection.slug}
                                            >
                                                {subsection.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    
                    {/* Extra padding at bottom to ensure last items can be scrolled to */}
                    <div className="h-20" aria-hidden="true"></div>
                </div>
            </div>
        </div>
    );
};
