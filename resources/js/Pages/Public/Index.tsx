import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PublicLayout from '@/Layouts/Public/PublicLayout';
import Header from './Sections/Header';
import Hero from './Sections/Hero';
import FeatureTicker from './Sections/FeatureTicker';
import Features from './Sections/Features';
import ProductShowCase from './Sections/ProductShowCase';
import Pricing from './Sections/Pricing';
import Integration from './Sections/Integration';
import Demo from './Sections/Demo';
import Testimonials from './Sections/Testimonials';
import CTA from './Sections/CTA';
import FAQ from './Sections/FAQ';
import Footer from './Sections/Footer';

export default function Welcome({ currentRoute,showNavigation }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Enimsay" />

            <PublicLayout>
                <Header currentRoute={currentRoute} showNavigation={showNavigation} />
                <Hero isVisible={showNavigation} tagVisible={showNavigation} title='Amzingly Simple' description={`
                        Lorem ipsum dolor
                `} />
                <FeatureTicker />
                <Features />
                <ProductShowCase />
                <Pricing />
                <Integration />
                <Demo />
                <Testimonials />
                <FAQ />
                <CTA showItems={showNavigation!} />
                <Footer />
            </PublicLayout>

        </>
    );
}
