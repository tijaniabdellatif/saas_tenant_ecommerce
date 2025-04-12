import { cn } from "@/libs/utils";
import LandingButton from "../Components/Utilities/LandingButton";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import HeroAnimation from '@/Assets/hero.json';
import CubeAnimation from '@/Assets/cube.json';

interface IHero {

    isVisible?: boolean,
    title: string,
    tagVisible?: boolean,
    description: string
}

export default function Hero({ isVisible, title, description, tagVisible }: IHero) {

    const currentAnimation = useRef<LottieRefCurrentProps>(null);
    const cubeAnimation = useRef<LottieRefCurrentProps>(null);

    return (
        <section className={cn([
            'relative bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#D4AF37,#EAEEFE_80%)]',
            "md:pt-5 md:pb-10 pt-8 pb-20 overflow-x-clip"
        ])}>
            <div className='container'>

                <div className={cn([
                    'md:flex justify-center items-center',
                    "mt-12"
                ])}>

                    <div className={cn([
                        "mt-[6rem]",
                        'md:w-[60%]',
                        'lg:mt-[5rem]',
                        !isVisible && 'flex flex-col items-center justify-center',


                    ])}>

                        <h1 className={cn([
                            'text-5xl lg:text-7xl  md:text-5xl font-bold tracking-tighter',
                            'font-poppins',
                            "py-2 px- mt-3 lg:mt-10",
                            'bg-gradient-to-l from-[#D4AF37] to-[#000]  text-transparent bg-clip-text',
                            !isVisible   && "text-center"
                        ])}>{title}</h1>

                        <p className={cn([
                           !isVisible && 'text-center',
                           "mt-6 text-base leading-8 tracking-tight  md:text-[18px] md:leading-8 lg:text-2xl lg:leading-10 text-color-dark font-poppins"
                        ])} >
                           {description}
                        </p>
                        {
                            isVisible && (<div className="flex gap-1 items-center mt-[30px]">
                                <LandingButton
                                    text='Get Started'
                                    buttonClassName='text-white bg-[#D4AF37]'
                                    styleBorderAnimationClassname="linear-gradient(90deg, #D4AF37, white, #D4AF37)"
                                    animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                                    isTransparent={true}


                                />

                                <LandingButton
                                    text='Learn More'
                                    buttonClassName='text-white bg-neutral-800'
                                    animationClassName='bg-gradient-to-l from-white to-black'
                                    isTransparent={true}
                                    styleBorderAnimationClassname="linear-gradient(90deg, #000, white, #000)"
                                />
                            </div>)
                        }




                    </div>


                    {
                        isVisible && (<div className="relative  mt-10 flex justify-center md:left-10 items-center md:mt-0 md:h-[648px] md:flex-1">
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


                        </div>)
                    }



                </div>



            </div>
        </section>
    );

}