import { cn } from "@/libs/utils";
import LandingButton from "../Components/Utilities/LandingButton";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import HeroAnimation from '@/Assets/hero.json';
import CubeAnimation from '@/Assets/cube.json';
import CircleAnimation from '@/Assets/store-1.json';

export default function Hero() {

    const currentAnimation = useRef<LottieRefCurrentProps>(null);
    const cubeAnimation = useRef<LottieRefCurrentProps>(null);
    const circleAnimation = useRef<LottieRefCurrentProps>(null);
    return (
        <section className={cn([
            'relative bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#D4AF37,#EAEEFE_80%)]',
            "md:pt-5 md:pb-10 pt-8 pb-20 overflow-x-clip"
        ])}>
            <div className='container'>
                <div className={cn([
                    'md:flex justify-center items-center'
                ])}>
                    <div className={cn([
                        'md:w-[60%]',
                        'mt-[8rem] lg:mt-[2rem] md:mt-[5rem]',

                    ])}>
                        <div className="tag text-color-dark">
                            Version 2.0 is here
                        </div>
                        <h1 className={cn([
                            'text-5xl  md:text-7xl font-bold tracking-tighter',
                            'font-poppins',
                            "py-2 mt-6",
                            'bg-gradient-to-l from-[#D4AF37] to-[#000]  text-transparent bg-clip-text',
                        ])}>Amazingly Simple</h1>

                        <p className="text-xl text-color-dark font-poppins tracking-tight mt-6">
                            Launch Your Store Today, Scale Your Business Tomorrow with
                            Powerful AI features, Beautiful Templates, Seamless payments.
                            Everything you need to start selling online in one place.
                        </p>


                        <div className="flex gap-1 items-center mt-[30px]">
                            <LandingButton
                                text='Get Started'
                                buttonClassName='text-[#000] bg-[#D4AF37]'
                                animationClassName='bg-gradient-to-r from-[#E5C04D] to-slate-600'
                                styleBorderAnimationClassname="linear-gradient(90deg, #D4AF37, white, #D4AF37)"
                                
                            />

                            <LandingButton
                                text='Learn More'
                                buttonClassName='text-[#D4AF37] bg-[#222222]'
                                animationClassName='bg-gradient-to-l from-white to-black'
                                isTransparent={true}
                                styleBorderAnimationClassname="linear-gradient(90deg, #000, white, #000)"
                            />
                        </div>

                    </div>

                    <div className="relative  mt-10 flex justify-center md:left-10 items-center md:mt-0 md:h-[648px] md:flex-1">
                        <Lottie
                            animationData={HeroAnimation}
                            lottieRef={currentAnimation}
                            loop={true}
                            className="object-contain lg:w-[500px] md:absolute md:h-full md:w-[400px] md:mt-20 md:max-w-none"
                        />

                        <Lottie
                            animationData={CubeAnimation}
                            lottieRef={cubeAnimation}
                            loop={true}
                            className="hidden w-[200px] object-contain md:absolute md:block top-[100px] -left-12 "
                        />

                        <Lottie
                            animationData={CubeAnimation}
                            lottieRef={cubeAnimation}
                            loop={true}
                            className="hidden w-[200px] object-contain md:absolute md:block top-[100px] -left-12 "
                        />


                    </div>

                </div>

            </div>
        </section>
    );

}