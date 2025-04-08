import { ClaudeLogo, OpenAI, ScikitLearn, SlackLogo, DialogFlow, AnthropicLogo } from '@/Assets';
import { cn } from '@/libs/utils';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Iimage {
    src: string,
    alt?: string,
    className?: string
}

interface IFeatures {
    id: number,
    element: React.ReactNode
}

const Image = ({ src, alt, className }: Iimage) => {
    return (
        <img src={src} alt={alt} className={className} />
    );
}

const Features: IFeatures[] = [
    {
        id: 1,
        element: <Image src={AnthropicLogo} alt="Anthropic" className='logo-ticker' />
    },
    {
        id: 2,
        element: <Image src={OpenAI} alt="OpenAI" className='logo-ticker' />
    },
    {
        id: 3,
        element: <Image src={DialogFlow} alt="DialogFlow" className='logo-ticker' />
    },
    {
        id: 4,
        element: <Image src={ScikitLearn} alt="ScikiLearn" className='logo-ticker' />
    },
    {
        id: 5,
        element: <Image src={SlackLogo} alt="Slack" className='logo-ticker' />
    },
    {
        id: 6,
        element: <Image src={ClaudeLogo} alt="Claude" className='logo-ticker' />
    }
];

export default function FeatureTicker() {
    const [width, setWidth] = useState(0);
    const tickerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (tickerRef.current) {
            // We need to set the width to double the container width for a seamless loop
            setWidth(tickerRef.current.scrollWidth);
        }
    }, []);

    return (
        <section className='py-8 overflow-hidden bg-white md:py-12'>
            <div className={cn([
                'container'
            ])}>
                <div className={cn([
                    'flex overflow-hidden',
                    '[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]',
                ])}>
                    <motion.div 
                        ref={tickerRef}
                        className='flex gap-14'
                        animate={{
                            x: [-width / 2, 0],
                        }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {/* First set of logos */}
                        {Features.map(({ id, element }: IFeatures) => (
                            <div key={id} className="flex-none">
                                {element}
                            </div>
                        ))}
                        
                        {/* Duplicate set for seamless looping */}
                        {Features.map(({ id, element }: IFeatures) => (
                            <div key={`duplicate-${id}`} className="flex-none">
                                {element}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}