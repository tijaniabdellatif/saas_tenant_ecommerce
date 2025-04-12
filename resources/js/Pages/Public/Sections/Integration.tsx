import { cn } from "@/libs/utils";
import SectionContent from "../Components/Utilities/SectionContent";
import { integrationTools } from "@/libs/constants";
import IntegrationColumn from "../Components/Utilities/IntegrationColumn";
import LandingButton from "../Components/Utilities/LandingButton";

export default function Integration() {
    // Animation variants for the border


    return (
        <section className="overflow-x-clip overflow-hidden bg-gradient-to-t from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 font-poppins">
            <SectionContent classes="pricing-head_before relative">

                <div className="grid items-center lg:grid-cols-2 lg:gap-10">
                    <div>
                        <h2 className="text-center lg:text-left md:text-[54px] py-2 md:leading-[60px] text-color-dark text-3xl font-bold tracking-tighter bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text mt-5">
                            Integrations
                        </h2>

                        <p className="text-base lg:text-[22px] lg:text-left lg:text-md  leading-[30px] text-center text-color-dark tracking-tight mt-5">
                            Enimsay seamlessly connects with your favorite Tools, making it easy to plug into any workflow
                            and lead your sales effectively
                            You can easily enable integrations
                        </p>

                        <div className="flex justify-center w-full lg:justify-start">
                            <LandingButton
                                text='Read more'
                                buttonClassName='text-white bg-[#D4AF37] mt-5 md:w-[200px] lg:mx-0'
                                animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                                isTransparent
                                fullWidthOnMobile
                                marginClassName="lg:ml-0 lg:mr-auto"
                            />
                        </div>
                    </div>
                    <div className={cn([
                        'h-[500px] mx-auto lg:h-[800px] overflow-hidden mt-8',
                        '[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_90%,transparent)]',
                        'grid md:grid-cols-2 gap-4'
                    ])}>

                        <IntegrationColumn integrations={integrationTools} />
                        <IntegrationColumn reverse integrations={integrationTools.slice().reverse()} className="hidden md:flex" />
                    </div>
                </div>





            </SectionContent>
        </section>
    );
}