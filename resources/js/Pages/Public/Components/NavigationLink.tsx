import { Link as LinkScroll } from "react-scroll";
import { cn } from "@/libs/utils";

interface NavigationLinkProps {
    title: string,
    to: string
}

export default function NavigationLink({ title, to }: NavigationLinkProps) {

    return (
        <LinkScroll className={cn([
            'uppercase',
            'transition-colors duration-500 cursor-pointer',
            "hover:text-p3",
            "max-lg:my-4 max-lg:h5"
        ])} to={to}>
            {title}
        </LinkScroll>
    )

}