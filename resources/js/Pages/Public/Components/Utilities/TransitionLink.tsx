import { InertiaLinkProps, Link } from '@inertiajs/react'


export function TransitionLink({ href, children, ...props }: InertiaLinkProps) {

    const transitionUrl = `/transition?destination=${encodeURIComponent(href.toString())}`
    return (
        <Link href={transitionUrl} {...props}>
            {children}
        </Link>
    );
}