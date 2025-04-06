import { cn } from "@/libs/utils";
import React, { ReactNode, MouseEvent } from "react";
import { Link } from "react-scroll";
import Marker from "./Marker";


interface ILandingButton {

    icon?: string | { default: string },
    children?: ReactNode,
    href?: string,
    containerClassName?: string,
    click?: (event: MouseEvent<HTMLButtonElement>) => void,
    alt?: string,
    markerFill?: string,
}

export default function LandingButton({ icon, children, href, containerClassName, click, alt, markerFill}: ILandingButton) {

    const getIconSrc = () => {
        if (!icon) return null;
        if (typeof icon === 'string') return icon;
        return icon.default; // For webpack/vite imports that use .default
    };

    const Inner = () => {

        return (
            <>
                <span className="relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                    <span className="absolute -left-[1px]">
                        <Marker fill={markerFill} />
                    </span>

                    {icon && (
                        <img className="z-10 object-contain mr-5 size-10" src={getIconSrc()!} alt={alt} />
                    )}

                    <span className="relative uppercase z-2 fonts-poppins base-bold text-p2">
                        {children}
                    </span>
                </span>

                <span className={cn([
                    'glow-before',
                    'glow-after'
                ])} />
            </>
        );
    }
    return href ? (

        <Link to={href} className={cn([
            'relative',
            'p-0.5 g5 rounded-2xl shadow-500 group',
            containerClassName
        ])}>

            <Inner />
        </Link>
    ) : (
        <button className={cn([
            'relative',
            'p-0.5 g5 rounded-2xl shadow-500 group',
            containerClassName
        ])}
            onClick={click}
        >
            <Inner />
        </button>
    );

}