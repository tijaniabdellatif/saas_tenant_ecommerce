import { DocumentSection } from "@/types";
import { TableOfContents } from "./Utilities/TableOfContents";
import { DocumentContent } from "./Utilities/DocumentContent";
import { useSectionNavigation } from "@/Hooks/interne/useSelectionNavigation";
import { MobileNavigation } from "./Utilities/MobileDocumentViewerNavigation";
import { useState, useEffect } from "react";
import { MobileTableOfContents } from "./Utilities/MobileTableOfContents";
import { useViewport } from "@/Hooks/interne/useViewPort";

interface DocumentViewerProps {
    data: DocumentSection[];
    title: string;
    lastUpdated: string;
    initialSection?: string;
    showAgreement?: boolean;
    primaryColor?: string;
    onAgree?: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
    data,
    title,
    lastUpdated,
    initialSection,
    showAgreement = true,
    primaryColor = "#D4AF37",
    onAgree
}) => {
    // Custom hooks for navigation and responsive behavior
    const {
        activeSection,
        sectionRefs,
        contentRef,
        tocContainerRef,
        scrollToSection,
        isSectionPassed,
        currentSectionIndex,
        nextSection,
        prevSection
    } = useSectionNavigation(data, initialSection);

    const { viewportState, containerHeight, isNotDesktop, isMobile } = useViewport();
    
    // State for mobile/tablet table of contents visibility
    const [showMobileTOC, setShowMobileTOC] = useState(false);

    return (
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626] py-3 sm:py-6 md:py-10 lg:py-12 pb-8 lg:pb-10 font-poppins">
            <div className="px-3 mx-auto max-w-7xl sm:px-4 lg:px-8">
                {/* Main container with responsive height */}
                <div 
                    className={`bg-white rounded-lg shadow-lg overflow-hidden relative flex flex-col w-full
                        ${viewportState === 'desktop' ? 'lg:h-[850px]' : ''}`}
                    style={{ 
                        height: isNotDesktop ? containerHeight : viewportState === 'desktop' ? '850px' : 'auto',
                        maxHeight: viewportState === 'desktop' ? '90vh' : containerHeight,
                        position:"relative",
                        zIndex:10
                    }}
                >
                    {/* Header bar for non-desktop views */}
                    {isNotDesktop && (
                        <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
                            <h1 className={`font-bold text-neutral-800 truncate max-w-[75%] ${isMobile ? 'text-base' : 'text-lg'}`}>
                                {title}
                            </h1>
                            <button 
                                onClick={() => setShowMobileTOC(!showMobileTOC)}
                                className={`px-3 py-1.5 ${isMobile ? 'text-xs' : 'text-sm'} border rounded-md shadow-sm`}
                                style={{ borderColor: primaryColor, color: primaryColor }}
                            >
                                {showMobileTOC ? 'Hide Sections' : 'Show Sections'}
                            </button>
                        </div>
                    )}
                    
                    {/* Mobile/Tablet TOC overlay */}
                    {isNotDesktop && showMobileTOC && (
                        <MobileTableOfContents
                            sections={data}
                            activeSection={activeSection}
                            scrollToSection={scrollToSection}
                            onClose={() => setShowMobileTOC(false)}
                            primaryColor={primaryColor}
                            title={title}
                            viewportState={viewportState}
                        />
                    )}
                    
                    {/* Main content layout */}
                    <div className="relative flex flex-grow overflow-hidden">
                        {/* Desktop sidebar TOC - only show on desktop */}
                        {viewportState === 'desktop' && (
                            <TableOfContents
                                sections={data}
                                activeSection={activeSection}
                                scrollToSection={scrollToSection}
                                isSectionPassed={isSectionPassed}
                                title={title}
                                tocContainerRef={tocContainerRef}
                            />
                        )}
                        
                        {/* Main content area */}
                        <DocumentContent
                            sections={data}
                            activeSection={activeSection}
                            sectionRefs={sectionRefs}
                            contentRef={contentRef}
                            title={title}
                            lastUpdated={lastUpdated}
                            showAgreement={showAgreement}
                            primaryColor={primaryColor}
                            onAgree={onAgree}
                            viewportState={viewportState}
                        />
                    </div>
                    
                    {/* Mobile/Tablet navigation buttons */}
                    {isNotDesktop && (
                        <MobileNavigation
                            currentSectionIndex={currentSectionIndex}
                            nextSection={nextSection}
                            prevSection={prevSection}
                            primaryColor={primaryColor}
                            totalSections={data.length}
                            viewportState={viewportState}
                            isMobile={isMobile}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};