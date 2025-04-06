import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PublicLayout from '@/Layouts/Public/PublicLayout';
import Header from './Sections/Header';
import Hero from './Sections/Hero';
import Features from './Sections/Features';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Enimsay" />

            <PublicLayout>
                   <h1>Hello world</h1>
            </PublicLayout>

        </>
    );
}
