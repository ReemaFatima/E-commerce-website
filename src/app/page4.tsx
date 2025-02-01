
import React from "react";
import Link from "next/link";
import Image from "next/image";
import sofa from "@/app/assets/sofa.png";

const Page4 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-full bg-[#FFF9E5]">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] h-full flex items-center justify-center bg-[#FFF9E5]">
          <div className="relative w-full lg:w-[80%] h-auto">
            <Image
              src={sofa}
              alt="sofa"
              layout="responsive"
              objectFit="cover"
              width={1000} 
              height={800}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[50%] h-full flex flex-col justify-center items-center lg:items-start pl-8 lg:pl-16 px-6 py-8">
          <h2 className="font-Poppins font-medium text-[24px] sm:text-[28px] lg:text-[32px] text-center lg:text-left mb-4">
            New Arrivals
          </h2>
          <h1 className="font-Poppins font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[48px] sm:leading-[60px] lg:leading-[72px] text-center lg:text-left mb-6">
            Asgaard Sofa
          </h1>
          <Link href="/detail">
  <button className="w-full sm:w-[200px] lg:w-[140px] h-[50px] font-Poppins font-normal text-[16px] text-center border border-black bg-white hover:bg-black hover:text-white transition duration-300 mx-auto lg:mx-0">
    Order Now
  </button>
</Link>

        </div>
      </div>
    </>
  );
};

export default Page4;
