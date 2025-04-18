import MouseFollower from '@/Pages/Public/Components/Utilities/MouseFollower';
import { PropsWithChildren, useEffect } from 'react';


export default function PublicLayout({ children }: PropsWithChildren) {
    useEffect(() => {
        document.body.classList.add('cursor-none');

        return () => {
            document.body.classList.remove('cursor-none');
        };
    }, []);
    return (

        <main className='overflow-hidden'>
            {children}

            <MouseFollower
                primaryColor="#47556999"   // Gold color for gold buttons
                secondaryColor="#F2F2F299" // Neutral color for neutral buttons
                linkColor="#00000088"      // Color for links (optional)
                primaryHoverSize={60}    // Size for gold buttons
                secondaryHoverSize={50}  // Size for neutral buttons
                linkHoverSize={30}       // Size for links
                defaultSize={10}         // Default cursor size
                opacity={0.7}            // Opacity of the cursor
                trail={true}             // Enable/disable trail effect
            />
        </main>
    );
}
