import SectionContent from "../Components/Utilities/SectionContent";
import BannerAI from '@/Assets/Images/42S-Website-Banner-AI.png';

export default function ProductShowCase() {


    return (
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 font-poppins">
            <SectionContent>
                <div className="flex justify-center">
                    <div className="tag text-white  bg-[#D4AF37]">
                        Manage Your Store
                    </div>
                </div>

                <h2 className="text-center text-color-dark text-3xl font-bold tracking-tighter bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text">A more effective to track yor products and sales</h2>
                <p className="text-center text-color-dark">
                    Effortlessly turn your store into a fully managed instance, increase your sales and use AI powered Tools.
                </p>

                <img src={BannerAI} alt='Banner AI' className="" />

            </SectionContent>
        </section>
    );

}