import React from "react";
import Image from "next/image";
import sofa1 from "@/app/assets/sofa1.png";
import dining from "@/app/assets/dining.png";
import stole from "@/app/assets/stole.png";
import mirror from "@/app/assets/mirror.png";

const Page3 = () => {
  return (
    <>
      {/* Wrapper for main heading and description */}
      <div className="w-full h-auto mt-10">
        <div className="flex flex-col items-center">
          {/* Centered heading */}
          <h1 className="font-Poppins font-medium text-[36px] leading-[54px] text-black text-center">
            Top Picks For You
          </h1>
          {/* Centered description */}
          <p className="font-Poppins font-medium text-base text-[#9F9F9F] text-center mt-2 w-[90%] md:w-[773px]">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
      </div>

      {/* Wrapper for the image row */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4 md:px-10">
        {/* First Image */}
        <div className="flex flex-col items-center w-[250px] md:w-[287px]">
          <Image src={sofa1} alt="sofa" className="w-[100%] h-auto" />
          <div className="text-center mt-2">
            <p className="font-Poppins font-normal text-sm md:text-base">Trenton modular sofa_3</p>
            <p className="font-Poppins font-medium text-lg md:text-[24px] leading-6 md:leading-9 mt-1">Rs 25,000.00</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="flex flex-col items-center w-[250px] md:w-[287px]">
          <Image src={dining} alt="table" className="w-[100%] h-auto" />
          <div className="text-center mt-2">
            <p className="font-Poppins font-normal text-sm md:text-base">Granite dining table with dining chair</p>
            <p className="font-Poppins font-medium text-lg md:text-[24px] leading-6 md:leading-9 mt-1">Rs 25,000.00</p>
          </div>
        </div>

        {/* Third Image */}
        <div className="flex flex-col items-center w-[250px] md:w-[287px]">
          <Image src={stole} alt="stoles" className="w-[100%] h-auto" />
          <div className="text-center mt-2">
            <p className="font-Poppins font-normal text-sm md:text-base">Outdoor bar table and stool</p>
            <p className="font-Poppins font-medium text-lg md:text-[24px] leading-6 md:leading-9 mt-1">Rs 25,000.00</p>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="flex flex-col items-center w-[250px] md:w-[287px]">
          <Image src={mirror} alt="mirror" className="w-[100%] h-auto mt-20" />
          <div className="text-center mt-2">
            <p className="font-Poppins font-normal text-sm md:text-base">Elegant mirror design</p>
            <p className="font-Poppins font-medium text-lg md:text-[24px] leading-6 md:leading-9 mt-1">Rs 25,000.00</p>
          </div>
          
        </div>
       
        </div>

      
    </>
  );
};

export default Page3;

