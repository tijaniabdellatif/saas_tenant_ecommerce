import PublicLayout from "@/Layouts/Public/PublicLayout";
import { Head, usePage } from "@inertiajs/react";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { PageProps } from "@/types";
import CTA from "./Sections/CTA";
import { cn } from "@/libs/utils";
import SectionContent from "./Components/Utilities/SectionContent";

import LandingButton from "./Components/Utilities/LandingButton";
import TermsSection from "./Sections/TermsSection";
import Hero from "./Sections/Hero";
export default function Conditions({ currentRoute, showNavigation }: PageProps) {



    return (

        <>
            <Head title="Enimsay | terms and conditions">
                <meta name="description" content="Enimsay term of use and conditions" />
                <meta name="author" content="TIJANI ABDELLATIF" />
            </Head>
            <PublicLayout>
                <Header currentRoute={currentRoute} showNavigation={showNavigation} />
                <Hero isVisible={showNavigation} tagVisible={showNavigation} title='Terms of use' description={`
                                       Lorem ipsum dolor
                               `} />
                <TermsSection />
                <CTA showItems={showNavigation!} />
                <Footer />

            </PublicLayout>
        </>
    );
}