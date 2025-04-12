import {motion} from 'framer-motion';
import AnimationData from '@/Assets/Lottie_Lego.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';

export default function FooterItems(){
    const phoneAnimationRef = useRef<LottieRefCurrentProps>(null);
    return(
        <div className="grid grid-cols-1 gap-10 mt-16 mb-16 md:grid-cols-4">
              {/* Logo and About Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-1"
              >
                <div className='relative w-24 h-16 overflow-hidden -left-9 md:w-28 md:h-20'>
                  <Lottie
                    onComplete={() => {
                      phoneAnimationRef.current?.setDirection(-1);
                      phoneAnimationRef.current?.play();
                    }}
                    animationData={AnimationData}
                    lottieRef={phoneAnimationRef}
                    loop={true}
                    className='object-contain w-full h-full'
                  />
                </div>
                <p className="mb-4 text-neutral-600">
                  Everything you need to start selling online in one place.
                </p>
                <p className="text-neutral-600">
                  Version 2.0 is here
                </p>
              </motion.div>

              {/* Navigation Columns */}
              {[
                {
                  title: "Product",
                  links: ["Features", "Pricing", "Integrations", "Demo", "Testimonials", "FAQ"]
                },
                {
                  title: "Resources",
                  links: ["Documentation", "Blog", "Community", "API", "Guides"]
                },
                {
                  title: "Company",
                  links: ["About", "Careers", "Support", "Partners", "Contact"]
                },

              ].map((column, colIndex) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + colIndex * 0.2 }}
                >
                  <h3 className="mb-6 font-semibold text-neutral-800">
                    {column.title}
                  </h3>
                  <nav>
                    <ul className="space-y-4">
                      {column.links.map((link, linkIndex) => (
                        <motion.li
                          key={link}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + linkIndex * 0.05 + colIndex * 0.2 }}
                        >
                          <a href="#" className="text-neutral-600 hover:text-[#D4AF37] transition">
                            {link}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              ))}
            </div>
    );
}