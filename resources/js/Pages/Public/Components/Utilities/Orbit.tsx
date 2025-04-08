import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Orbit(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={twMerge(
        'size-[200px] border border-gray-500 rounded-full', 
        props.className
      )} 
      {...props}
    />
  );
}