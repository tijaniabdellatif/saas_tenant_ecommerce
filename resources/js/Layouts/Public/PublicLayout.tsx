import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
       
        <main className='overflow-hidden'>
            {children}
        </main>
    );
}
