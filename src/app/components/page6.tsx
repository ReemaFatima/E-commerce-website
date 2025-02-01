
import React from "react";
import Image from "next/image";
import image from "@/app/assets/image.png";

const Page6 = () => {
  return (
    <>
      {/* Image Section */}
      <div className="relative w-full h-[500px]"> {/* Set a smaller height here */}
        <Image
          src={image}
          alt="image"
          layout="fill"
          objectFit="cover"
        />

        {/* Content Centered on the Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className="font-Poppins font-bold text-[48px] text-black leading-[60px] mb-4">
            Our Instagram
          </p>
          <p className="font-Poppins font-normal text-[18px] text-black leading-[26px] mb-6">
            Follow our store on Instagram
          </p>
          <div className="rounded-[50px] bg-[#FAF4F4] px-6 py-3">
            <button className="font-Poppins font-normal text-[16px] text-black hover:bg-gray-200 transition duration-300">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
