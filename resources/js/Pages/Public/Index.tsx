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
import { useEffect } from 'react';

export default function Welcome({ currentRoute,showNavigation }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
   
    
    
    
    return (
        <>
            <Head title="Enimsay" />

            <PublicLayout>
                <Header currentRoute={currentRoute} showNavigation={showNavigation} />
                <Hero isVisible={showNavigation} tagVisible={showNavigation} title='Amazingly Simple' description={`
                        Launch your online store in minutes with our all-in-one eCommerce SaaS platform, supercharged with AI-powered tools,our platform empowers you to build, manage, and grow your store effortlessly. 
                        No tech skills needed—just your vision.
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
