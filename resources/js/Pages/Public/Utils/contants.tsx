import { ReactElement, ReactNode } from "react";
import Image from "../Components/Image";
import { FeatureImage1,FeatureImage2,MagicTouch } from "@/Assets";
import LandingButton from "../Components/LandingButton";



interface IFeature {
    id:number,
    icon:ReactElement,
    caption:string,
    title:string,
    text:string,
    button:ReactNode
}

export const features:IFeature[] = [

    {
        id:1,
        icon:<Image src={FeatureImage1} alt={"feature 1"}  />,
        caption:'Caption 1',
        title:'Title 1',
        text:'Lorem ipsum dolor',
        button:<LandingButton  icon={MagicTouch}><span className="text-sm tracking-widest">Discover</span></LandingButton>
    },

    {
        id:1,
        icon:<Image src={FeatureImage2} alt={'geature 2'} />,
        caption:'Caption 2',
        title:'Title 2',
        text:'lorem ipsum dolor',
        button:<LandingButton  icon={MagicTouch}><span className="text-sm tracking-widest">Try it out</span></LandingButton>
    },

    {
        id:1,
        icon:<Image src={FeatureImage2} alt={'geature 2'} />,
        caption:'Caption 2',
        title:'Title 2',
        text:'lorem ipsum dolor',
        button:<LandingButton  icon={MagicTouch}><span className="text-sm tracking-widest">Try it out</span></LandingButton>
    },
    {
        id:1,
        icon:<Image src={FeatureImage2} alt={'geature 2'} />,
        caption:'Caption 2',
        title:'Title 2',
        text:'lorem ipsum dolor',
        button:<LandingButton  icon={MagicTouch}><span className="text-sm tracking-widest">Try it out</span></LandingButton>
    }
];

