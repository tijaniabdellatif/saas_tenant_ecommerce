import { DocumentSection, ViewPortState } from "@/types";

interface MobileTableOfContentsProps {
    sections: DocumentSection[];
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
    onClose: () => void;
    primaryColor: string;
    title: string;
    viewportState: ViewPortState;
}

export const MobileTableOfContents: React.FC<MobileTableOfContentsProps> = ({
    sections,
    activeSection,
    scrollToSection,
    onClose,
    primaryColor,
    title,
    viewportState
}) => {
    const isTablet = viewportState === 'tablet';

    return (
        <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className={`absolute bg-white shadow-lg overflow-y-auto ${isTablet
                        ? 'left-0 top-0 bottom-0 w-[300px]'
                        : 'right-0 top-0 bottom-0 w-4/5 max-w-xs'
                    }`}
                onClick={e => e.stopPropagation()}
            >
                <div className="p-4">
                    <div className="flex items-center justify-between pb-2 mb-4 border-b">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <button
                            onClick={onClose}
                            className="p-1 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Mobile TOC items */}
                    <div className="mb-10">
                        {sections.map((section, index) => (
                            <div key={section.slug} className="mb-3">
                                <button
                                    className={`w-full text-left py-2 px-3 rounded-md flex items-center ${activeSection === section.slug
                                            ? 'bg-gray-100 font-medium'
                                            : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => {
                                        scrollToSection(section.slug);
                                        onClose();
                                    }}
                                    style={{
                                        color: activeSection === section.slug ? primaryColor : '#374151'
                                    }}
                                >
                                    {isTablet ? (
                                        <span
                                            className="inline-flex items-center justify-center w-6 h-6 mr-2 text-sm text-white rounded-full"
                                            style={{
                                                backgroundColor: primaryColor,
                                                opacity: activeSection === section.slug ? 1 : 0.7
                                            }}
                                        >
                                            {index + 1}
                                        </span>
                                    ) : (
                                        <span className="mr-1">{index + 1}.</span>
                                    )}
                                    <span>{section.title}</span>
                                </button>

                                {/* Subsections */}
                                {section.subsections && section.subsections.length > 0 && (
                                    <div className={`ml-${isTablet ? '8' : '6'} mt-1 space-y-1`}>
                                        {section.subsections.map(subsection => (
                                            <button
                                                key={subsection.slug}
                                                className={`w-full text-left py-1.5 px-${isTablet ? '3' : '2'} text-sm rounded ${activeSection === subsection.slug
                                                        ? 'font-medium'
                                                        : 'text-gray-600'
                                                    } ${isTablet ? 'flex items-center' : ''}`}
                                                onClick={() => {
                                                    scrollToSection(subsection.slug);
                                                    onClose();
                                                }}
                                                style={{
                                                    color: activeSection === subsection.slug ? primaryColor : undefined
                                                }}
                                            >
                                                {isTablet && (
                                                    <span
                                                        className="w-2 h-2 mr-2 rounded-full"
                                                        style={{
                                                            backgroundColor: activeSection === subsection.slug
                                                                ? primaryColor
                                                                : '#9CA3AF'
                                                        }}
                                                    ></span>
                                                )}
                                                <span>{isTablet ? '' : '• '}{subsection.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
