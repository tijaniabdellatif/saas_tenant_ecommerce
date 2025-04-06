import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import ThemeToggle from '@/Components/Public/ThemeToggle';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Enimsay" />
        </>
    );
}
