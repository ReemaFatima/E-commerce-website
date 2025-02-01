import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import table from '@/app/assets/table.png'
import sofaseat from "@/app/assets/sofaseat.png"

const Page2 = () => {
  return (
    <div className='w-full bg-[#FAFAF4] pt-[50px] pb-[50px]'>
      {/* Outer Wrapper */}
      <div className='max-w-[1440px] mx-auto flex justify-between items-start gap-[40px]'>

        {/* First image and its text */}
        <div className="w-[48%] h-auto relative flex flex-col items-center">
          <div className="relative w-full">
            <Image 
              src={table} 
              alt="Side Table" 
              className="w-[90%] h-auto object-cover"
            />
          </div>
          <p className="font-Poppins font-medium text-[36px] leading-[54px] text-black mb-[30px]">
            Side Table
          </p>
          <Link href="/shop" className="font-Poppins font-medium text-[24px] leading-[36px] mt-[8px] text-black cursor-pointer hover:text-gray-600 pr-10">
            View More
          </Link>
          <div className="border-b-2 border-black w-[121px] mt-[10px] mr-6"></div>
        </div>

        {/* Second image and its text */}
        <div className="w-[48%] h-auto relative flex flex-col items-center">
          <div className="relative w-full">
            <Image 
              src={sofaseat} 
              alt="Sofa Seat" 
              className="w-[90%] h-auto object-cover"
            />
          </div>
          <p className="font-Poppins font-medium text-[36px] leading-[54px] text-black mb-[30px] mt-10 ">
            Side Table
          </p>
          <Link href="/shop" className="font-Poppins font-medium text-[24px] leading-[36px] text-black mt-[8px] cursor-pointer hover:text-gray-600 pr-9">
            View More
          </Link>
          <div className="border-b-2 border-black mt-[10px] w-[121px] mr-6 "></div>
        </div>

      </div>
    </div>
  );
};

export default Page2;


