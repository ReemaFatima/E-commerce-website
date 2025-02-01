        
import React from "react";
import Image from "next/image";
import Link from "next/link";
import card1 from "@/app/assets/card1.png";
import time from "@/app/assets/time.png";
import date from "@/app/assets/date.png";
import card2 from "@/app/assets/card2.png";
import card3 from "@/app/assets/card3.png";

const Card = () => {
  return (
    <>
      {/* Section Title */}
      <div className="text-center mt-8">
        <h1 className="font-Poppins font-medium text-[36px] leading-[54px] text-black">Our Blogs</h1>
        <p className="font-Poppins font-medium text-base text-[#9F9F9F] mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-wrap justify-center mt-12 space-x-6 px-[20px] gap-y-8">
        {/* Card 1 */}
        <div className="w-[300px] flex flex-col items-center">
          <Image src={card1} alt="card1" className="w-full h-[200px] object-cover" />
          <p className="font-Poppins font-normal text-[16px] leading-[24px] text-black mt-4 text-center">
            Going all-in with millennial design
          </p>
          <div className="flex items-center space-x-1 mt-2 text-sm">
            <Image src={time} alt="time" className="w-[16px] h-[16px]" />
            <p>5 min</p>
            <Image src={date} alt="date" className="w-[16px] h-[16px]" />
            <p>12th Oct 2022</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[300px] flex flex-col items-center">
          <Image src={card2} alt="card2" className="w-full h-[200px] object-cover" />
          <p className="font-Poppins font-normal text-[16px] leading-[24px] text-black mt-4 text-center">
            Going all-in with millennial design
          </p>
          <div className="flex items-center space-x-1 mt-2 text-sm">
            <Image src={time} alt="time" className="w-[16px] h-[16px]" />
            <p>5 min</p>
            <Image src={date} alt="date" className="w-[16px] h-[16px]" />
            <p>12th Oct 2022</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[300px] flex flex-col items-center">
          <Image src={card3} alt="card3" className="w-full h-[200px] object-cover" />
          <p className="font-Poppins font-normal text-[16px] leading-[24px] text-black mt-4 text-center">
            Going all-in with millennial design
          </p>
          <div className="flex items-center space-x-1 mt-2 text-sm">
            <Image src={time} alt="time" className="w-[16px] h-[16px]" />
            <p>5 min</p>
            <Image src={date} alt="date" className="w-[16px] h-[16px]" />
            <p>12th Oct 2022</p>
          </div>
        </div>
      </div>

      {/* View All Post Section */}
      <div className="text-center mt-8">
        <Link href="/blog"
         className="font-Poppins font-medium text-xl text-black hover:text-gray-600">View All Posts
        </Link>
        <div className="border-b-2 border-black w-[115px] mx-auto mt-2"></div>
      </div>
    </>
  );
};

export default Card;

