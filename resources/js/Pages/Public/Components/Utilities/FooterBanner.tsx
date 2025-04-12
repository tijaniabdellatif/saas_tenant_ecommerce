import { motion } from 'framer-motion';
import { formatDate } from "@/libs/utils";
import { Link } from '@inertiajs/react';


export default function FooterBanner() {
    const currentDate = formatDate(new Date().toString(), 'ddd DD MMM YYYY');
    return (
         <motion.div
              className="flex flex-col items-center justify-between pt-6 border-t md:flex-row border-neutral-800/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="mb-4 md:mb-0 text-neutral-600">
                © {currentDate}  <Link href="/">
                <span className="px-1 bg-gradient-to-b font-semibold from-[#475569] to-[#D4AF37] text-transparent bg-clip-text">Enimsay</span>
                </Link>.All rights reserved.
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-neutral-600 hover:text-[#D4AF37]">Privacy Policy</Link>
                <Link href="#" className="text-neutral-600 hover:text-[#D4AF37]">Terms of Service</Link>
                <Link href={route('conditions')} className="text-neutral-600 hover:text-[#D4AF37]">Cookies</Link>
              </div>
            </motion.div>
    );

}