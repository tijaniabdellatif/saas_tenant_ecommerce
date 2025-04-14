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
                    <div className="mx-4">
                        <h2 className={cn([
                            'text-center',
                            'lg:text-left',
                            'text-color-dark bg-gradient-to-l from-[#475569] to-[#D4AF37]',
                            'text-transparent bg-clip-text',
                            'text-3xl lg:text-6xl md:text-4xl py-2 font-semibold tracking-tighter'
                        ])}>
                            Integrations
                        </h2>

                        <p className={cn([
                            'text-center mt-4 text-base leading-7 tracking-tight',
                            "md:text-[18px] lg:text-left md:text-center md:leading-8 lg:text-1xl lg:leading-10 text-color-dark font-poppins"
                        ])}>
                            Enimsay seamlessly connects with your favorite Tools, making it easy to plug into any workflow
                            and lead your sales effectively
                            You can easily enable integrations
                        </p>

                        <div className="flex justify-center w-full lg:justify-start">
                            <LandingButton
                                text='Read more'
                                buttonClassName='text-white bg-[#D4AF37] w-[300px] md:w-[300px] max-w-[250px]'
                                animationClassName='bg-gradient-to-r from-[#D4AF37] to-slate-200'
                                isTransparent={true}
                                marginClassName="mt-4"
                            />
                        </div>
                    </div>
                    <div className={cn([
                        'h-[500px] mx-auto  lg:h-[800px] overflow-hidden mt-8',
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