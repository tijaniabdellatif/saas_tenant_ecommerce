import { cn } from "@/libs/utils";
import SectionContent from "../Components/Utilities/SectionContent";
import { testimonials } from "@/libs/constants";
import TestimonialColumn from "../Components/Utilities/TestimonialColumn";


const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

export default function Testimonials() {
  return (
    <section className="overflow-x-clip overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#b0b9c626] py-10 md:py-12 pb-20 font-poppins">
      <SectionContent classes="relative pricing-head_before">
        <div className="max-w-[540px] mx-auto relative">
          <div className="flex justify-center py-4">
            <div className="text-white tag bg-neutral-800">
              Testimonials
            </div>
          </div>
          
          <h2 className="text-center md:text-[54px] md:leading-[60px] text-color-dark text-3xl font-bold tracking-tighter bg-gradient-to-l from-[#475569] to-[#D4AF37] text-transparent bg-clip-text mt-5">
            What our users say
          </h2>
          <p className="text-base lg:text-[22px] pricing-head_before relative leading-[30px] text-center text-color-dark tracking-tight mt-5">
            Join thousands of entrepreneurs who have
            launched their online stores with ease.
            From seamless integrations to powerful AI tools
          </p>



        
        </div>

        <div className={cn([
          'flex justify-center gap-6 mt-10 overflow-hidden',
          '[mask-image:linear-gradient(to_bottom,transparent,black_15%,#D4AF37_85%,transparent)]',
          'h-[600px]',
          "" // Increased height
        ])}>
          <TestimonialColumn testimonials={firstColumn} duration={15} />
          <TestimonialColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialColumn testimonials={thirdColumn} duration={17} className="hidden lg:block"/>
        </div>
      </SectionContent>
    </section>
  );
}