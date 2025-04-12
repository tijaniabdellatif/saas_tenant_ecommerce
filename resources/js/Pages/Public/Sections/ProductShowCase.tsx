import SectionContent from "../Components/Utilities/SectionContent";
import BannerAI from '@/Assets/Images/42S-Website-Banner-AI.png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function ProductShowCase() {



    return (
        <section className="overflow-x-clip bg-gradient-to-t from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 font-poppins">
            <SectionContent classes="py-2">
                <div className="max-w-[540px] mx-auto pricing-head_before relative">
                    <div className="flex justify-center py-4">
                        <div className="text-white tag bg-neutral-800">
                            Manage Your Store
                        </div>
                    </div>

                    <h2 className="text-center md:text-[54px] md:leading-[60px] text-color-dark text-3xl font-bold tracking-tighter bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text mt-5">A more effective to track yor products and sales</h2>
                    <p className="text-base lg:text-[22px] leading-[30px] text-center text-color-dark tracking-tight mt-5">
                        Effortlessly turn your store into a fully managed instance, increase your sales and use AI powered Tools. Build your store in just minutes
                        with beautiful templates and interactive dashboard
                    </p>
                </div>

                <div className="relative flex items-center justify-center w-full">
                    <img src={BannerAI} alt='Banner AI' className="mt-10 w-[100%]" />

                   
                </div>



            </SectionContent>
        </section>
    );

}