import React from 'react';
import { ViewPortState } from '@/types';

interface MobileNavigationProps {
    currentSectionIndex: number;
    totalSections: number;
    nextSection: () => void;
    prevSection: () => void;
    primaryColor: string;
    viewportState: ViewPortState;
    isMobile: boolean;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
    currentSectionIndex,
    totalSections,
    nextSection,
    prevSection,
    primaryColor,
    viewportState,
    isMobile
}) => {
    const isTablet = viewportState === 'tablet';
    
    return (
        <div className={`
            ${viewportState === 'mobile' ? 'absolute bottom-0 left-0 right-0' : 'relative'} 
            bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center lg:hidden
            ${isTablet ? 'shadow-md' : ''}`}
        >
            <button
                onClick={prevSection}
                disabled={currentSectionIndex <= 0}
                className={`px-3 py-1.5 rounded-md flex items-center space-x-1
                    ${isMobile ? 'text-xs' : 'text-sm'}
                    ${currentSectionIndex <= 0 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-800 hover:bg-gray-100'}`}
            >
                {/* Arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Previous</span>
            </button>
            
            <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600 font-medium`}>
                Section {currentSectionIndex + 1} of {totalSections}
            </div>
            
            <button
                onClick={nextSection}
                disabled={currentSectionIndex >= totalSections - 1}
                style={{
                    backgroundColor: currentSectionIndex >= totalSections - 1 ? undefined : primaryColor,
                    color: currentSectionIndex >= totalSections - 1 ? undefined : 'white'
                }}
                className={`px-3 py-1.5 rounded-md flex items-center space-x-1
                    ${isMobile ? 'text-xs' : 'text-sm'}
                    ${currentSectionIndex >= totalSections - 1 
                        ? 'text-gray-400 cursor-not-allowed bg-gray-100' 
                        : 'text-white shadow-sm'}`}
            >
                <span>Next</span>
                {/* Arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};
