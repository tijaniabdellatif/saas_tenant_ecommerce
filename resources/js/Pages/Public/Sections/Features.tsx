import React from "react";
import { Element } from "react-scroll";
import { features } from "../Utils";
import { cn } from "@/libs/utils";
import LandingButton from "../Components/LandingButton";

export default function Features() {
    // Split features into rows of 2 items each
    const featureRows = [];
    for (let i = 0; i < features.length; i += 2) {
        featureRows.push(features.slice(i, i + 2));
    }
    
    return (
        <section>
            <Element name="features">
                <div className="container">
                    {featureRows.map((row, rowIndex) => (
                        <div 
                            key={`row-${rowIndex}`}
                            className={cn([
                                "relative flex mb-8",
                                'md:flex-wrap flex-nowrap',
                                'border-2 border-s3 rounded-7xl',
                                'md:overflow-hidden max-md:flex-col',
                                'feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3'
                            ])}
                        >
                            {row.map(({id, icon, button, text, title, caption}) => (
                                <div 
                                    className={cn([
                                        'relative z-2 md:px-10 px-5',
                                        'md:pb-10 pb-5',
                                        'flex-50 max-md:g7 max-md:border-2 max-md:border-s3',
                                        'max-md:rounded-3xl max-md:flex-320'
                                    ])} 
                                    key={id}
                                >
                                    <div className={cn([
                                        'w-full flex justify-start items-start'
                                    ])}>
                                        <div className="flex flex-col items-center justify-center mb-12 -ml-3">
                                            <div className="w-0.5 h-16 bg-s2" />
                                            {icon}
                                        </div>
                                    </div>
                                    
                                    <p className="mb-5 caption max-md:mb-6">{caption}</p>
                                    <h2 className="max-w-400 mb-7 h3 text-p5 max-md:mb-6 max-md:h5">{title}</h2>
                                    <p className="mb-11 caption body-1 max-md:mb-8 max-md:body-3">
                                        {text}
                                    </p>
                                    {button}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Element>
        </section>
    );
}