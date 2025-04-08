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

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Enimsay" />

            <PublicLayout>
                <Header />
                <Hero />
                <FeatureTicker />
                <Features />
                <ProductShowCase />
                <Pricing />
                <Integration />
            </PublicLayout>

        </>
    );
}
