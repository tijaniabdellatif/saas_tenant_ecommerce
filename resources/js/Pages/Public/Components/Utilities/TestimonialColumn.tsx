import { TestimonialsType } from "@/libs/constants";
import { cn } from "@/libs/utils";
import { Fragment } from "react";
import { motion } from 'framer-motion';

export default function TestimonialColumn(props: { 
  testimonials: TestimonialsType, 
  className?: string,
  duration?: number 
}) {
  const { testimonials, className, duration } = props;
  
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: '-50%'
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
          duration: duration || 10
        }}
        className={cn([
          "flex flex-col gap-6"
        ])}
      >
        {[0, 1].map((_, index) => (
          <Fragment key={index}>
            {testimonials.map(({ text, image, name, username }, idx) => (
              <div 
                key={`${index}-${idx}`}
                className={cn([
                  'p-10 rounded-3xl',
                  'max-w-xs w-full',
                  'shadow-[0_7px_14px_#EAEAEA]',
                  'border border-neutral-800/10',
                  'mt-2',
                ])}
              >
                <div className="text-sm leading-7 tracking-tight text-neutral-700">
                  {text}
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <img src={image} alt={name} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight text-color-dark">
                      {name}
                    </div>
                    <div className="text-sm leading-5 tracking-tight text-color-dark">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}