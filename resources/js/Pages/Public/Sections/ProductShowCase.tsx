import SectionContent from "../Components/Utilities/SectionContent";
import BannerAI from '@/Assets/Images/42S-Website-Banner-AI.png';
import { cn } from "@/libs/utils";


export default function ProductShowCase() {



    return (
        <section className="overflow-x-clip bg-gradient-to-t from-[#FFFFFF] to-[#b0b9c626] pt-10 md:pt-6 lg:pt-10 font-poppins">
            <SectionContent classes="relative pricing-head_before">
                <div className="max-w-[540px] mx-auto pricing-head_before relative">
                    <div className="flex justify-center py-4">
                        <div className="text-white tag bg-neutral-800">
                            Manage Your Store
                        </div>
                    </div>

                    <h2 className={cn([
                        'text-2xl text-center md:text-2xl font-semibold tracking-tighter',
                        'font-poppins',
                        "w-full",
                        'bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text',
                    ])}>A more effective to track yor products and sales</h2>
                    <p className={cn([
                        'text-center mt-5 text-base leading-7 tracking-tight',
                         "md:text-[18px] md:text-center md:leading-8 lg:text-1xl lg:leading-10 text-color-dark font-poppins"
                    ])}>
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