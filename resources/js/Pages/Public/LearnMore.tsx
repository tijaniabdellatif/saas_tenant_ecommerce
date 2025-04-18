import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PublicLayout from '@/Layouts/Public/PublicLayout';
import Header from './Sections/Header';
import Hero from './Sections/Hero';
;

export default function LearnMore({ currentRoute,showNavigation }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
   
    return (
        <>
            <Head title="Enimsay | Learn More" />

            <PublicLayout>
                <Header currentRoute={currentRoute} showNavigation={showNavigation} />
                <Hero isVisible={showNavigation} tagVisible={showNavigation} title='Enimsay Product' description={`
                       Our Product are the most usefull
                `} />
               
            </PublicLayout>

        </>
    );
}
