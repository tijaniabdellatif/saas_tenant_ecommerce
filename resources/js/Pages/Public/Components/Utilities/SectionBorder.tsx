
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ISectionBorder {

    children:ReactNode,
    classes?:string

}
export default function SectionBorder({children,classes}:ISectionBorder) {
    return <div className={twMerge('border-l border-r border-[#D4AF37]',classes)}>
                {children}
        </div>
}