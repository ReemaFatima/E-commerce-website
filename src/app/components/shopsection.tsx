import React from "react";
import Image from "next/image";
import wall from "@/app/assets/wall.png"
import logo from "@/app/assets/logo.png"
import icon2 from "@/app/assets/icon2.png"




interface ShopSectionProps {
  heading?: string;
  subheading?: string;
}

export default function ShopSection({ heading, subheading }: ShopSectionProps) {
  return (
    <section className="relative min-h-[316px]">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
       >
        <Image
          src={wall}
          alt="image"
          layout="fill"
          objectFit="cover"></Image>
      </div>

    
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 lg:px-16 py-8 gap-1">
      <div>
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div  className="flex flex-col items-center justify-center">
 {/* Heading */}
 {heading && (
          <h1 className="text-4xl font-semibold mt-4 text-center text-black">
            {heading}
          </h1>
        )}
        {icon2 && (<Image src={icon2} alt="icon" className="w-[14px] h-2 my-4"></Image>)}

        {/* Subheading */}
        {subheading && (
          <h3 className="text-1xl font-light text-center text-black">
            {subheading}
          </h3>
        )}
        </div>
      </div>
    </section>
  );
}