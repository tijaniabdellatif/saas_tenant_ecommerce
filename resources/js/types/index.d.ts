import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

// Shared props that you'll typically receive from Inertia
export interface SharedProps {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    currentRoute: string;
    showNavigation?: boolean;
}

// Generic page props with type parameter for page-specific props
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & SharedProps;

// Props specifically for the Header component
export interface HeaderProps {
    showNavigation?: boolean;
    currentRoute?: string;
}

// Props for the Navigation component
export interface NavigationProps {
    isVisible?: boolean;
    isLangMenuOpen: boolean;
    currentLanguage: string;
    langMenuRef: React.RefObject<HTMLDivElement>;
    handleLanguageChange: (language: string) => void;
    setIsLangMenuOpen: (isOpen: boolean) => void;
}

export interface DocumentSubSection {
    id: number;
    section_id: number;
    slug: string;
    title: string;
    content: string;
    order_index: number;
    is_active: boolean;
}

export interface DocumentSection {
    id: number;
    slug: string;
    title: string;
    content: string;
    order_index: number;
    is_active: boolean;
    subsections: DocumentSubSection[];
}

export interface SectionRefs {
    [key: string]: React.RefObject<HTMLDivElement>;
}

export type ViewPortState = "mobile" | "tablet" | "desktop";
