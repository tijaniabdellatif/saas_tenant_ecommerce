import SectionContent from "../Components/Utilities/SectionContent";
import FooterBanner from "../Components/Utilities/FooterBanner";
import FooterItems from "../Components/Utilities/FooterItems";
import CTAItems from "../Components/Utilities/CTAItems";
import { cn } from "@/libs/utils";

interface IShowItem {

  showItems:boolean;
}
export default function CTA({showItems}:IShowItem) {


  return (
    <>
      <section className="overflow-x-clip text-[#2A2A2A]  mt-20 pb-0 font-poppins relative">
        {/* Gradient background */}
        <div className={cn([
          'absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#D4AF37989] h-[50%] w-full',
          showItems && 'pricing-head_before'
        ])}>

        </div>
        <SectionContent classes="relative">
          {/* CTA Card - positioned to overlap with footer */}
           {showItems &&  <CTAItems /> }
          {/* Footer with semantic HTML5 tags - with negative margin to create overlap */}
          <footer className="pt-4 pb-16 bg-gradient-to-t from-[#FFFFFF] to-[#D4AF37989] relative z-0">
            {/* Top border that intersects the CTA */}
            
             {showItems && <><div className="absolute top-0 left-0 w-full shadow-[0_7px_14px_#EAEAEA] h-[2px] bg-neutral-800/10"></div>
              <FooterItems /></>}

            {/* Bottom bar with copyright */}
            <FooterBanner />
          </footer>
        </SectionContent>
      </section>
    </>

  );
}