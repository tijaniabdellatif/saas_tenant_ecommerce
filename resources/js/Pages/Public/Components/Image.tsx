import { cn } from "@/libs/utils";
import React from "react";
interface ImageProps {

    width?: number,
    height?: number,
    className?: string,
    alt?: string,
    src: string
}

export default function Image({ src, width, height, className, alt }: ImageProps) {
    return (
        <img src={src} alt={alt} width={width} height={height} className={cn([
            'size-28 object-contain',
            className
        ])} />
    );
}