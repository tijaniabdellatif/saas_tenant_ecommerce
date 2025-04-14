import { useState, useEffect } from "react";
import { ViewPortState } from "@/types";


export const useViewport = () => {
    const [viewportState, setViewportState] = useState<ViewPortState>('desktop');
    const [containerHeight, setContainerHeight] = useState<string>("auto");
    
    // Detect viewport size with updated breakpoints
    useEffect(() => {
        const checkViewportSize = () => {
            const width = window.innerWidth;
            if (width < 426) {
                setViewportState('mobile');
            } else if (width < 769) {
                setViewportState('tablet');
            } else {
                setViewportState('desktop');
            }
        };

        const updateContainerHeight = () => {
            if (viewportState !== 'desktop') {
                // Mobile needs more height
                const offset = viewportState === 'mobile' ? 80 : 100;
                setContainerHeight(`${window.innerHeight - offset}px`);
            } else {
                // For desktop, use auto height but with max-height constraint
                setContainerHeight('auto');
            }
        };
        
        
        // Initial check
        checkViewportSize();
        
        // Adjust container height for non-desktop viewports
        updateContainerHeight();
        
        // Listen for window resize
        const handleResize = () => {
            checkViewportSize();
            updateContainerHeight();
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportState]);
    
    return { 
        viewportState, 
        containerHeight, 
        isNotDesktop: viewportState !== 'desktop',
        isMobile: viewportState === 'mobile'
    };
};
