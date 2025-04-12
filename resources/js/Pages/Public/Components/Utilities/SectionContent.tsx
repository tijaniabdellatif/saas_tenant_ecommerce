import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ISectionContent {

    children: ReactNode,
    classes?: string

}
export default function SectionContent({ children, classes }: ISectionContent) {

    return <div className={twMerge('container', classes)}>
        {children}
    </div>
}