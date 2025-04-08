import SectionContent from "../Components/Utilities/SectionContent";

export default function Integration() {

    return (
        <section className="overflow-x-clip bg-gradient-to-t from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 font-poppins">

            <SectionContent>
                <div className="max-w-[540px] mx-auto pricing-head_before relative">
                    <h2 className="text-center md:text-[54px] py-2 md:leading-[60px] text-color-dark text-3xl font-bold tracking-tighter bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text mt-5">
                        Integrations
                    </h2>
                    <p className="text-[22px] leading-[30px] text-center text-color-dark tracking-tight mt-5">
                        Enimsay seamlessly connects with your favorite Tools, making it easy to plug into any workflow
                        and lead your sales effectively
                        You can easily enable integrations
                    </p>
                </div>
            </SectionContent>

        </section>
    );
}