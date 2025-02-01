
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <div className="w-full bg-[#FFFFFF] py-12 px-8">
        {/* Footer Content Section with Flexbox */}
        <div className="flex justify-between items-start max-w-[1440px] mx-auto space-x-8">
          
          {/* Address Section */}
          <div className="w-[30%]">
            <p className="font-Poppins font-normal text-base text-[#9F9F9F] leading-6">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="w-[20%]">
            <h1 className="font-Poppins font-medium text-base text-[#9F9F9F] mb-3">Links</h1>
            <ul className="text-black list-none space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-600 underline">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gray-600 underline">Shop</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-600 underline">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600 underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-[20%]">
            <h1 className="font-Poppins font-medium text-base text-[#9F9F9F] mb-3">Help</h1>
            <ul className="text-black list-none space-y-2">
              <li>
                <Link href="/payment-options" className="hover:text-gray-600 underline">Payment Options</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-gray-600 underline">Returns</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-600 underline">Privacy Policies</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="w-[30%]">
            <p className="font-Poppins font-medium text-base text-[#9F9F9F] mb-3 underline">Enter Your Email</p>
            <p className="font-Poppins font-normal text-sm text-[#9F9F9F] mb-3 underline">Subscribe</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t mt-12 pt-4">
          <p className="font-Poppins font-normal text-base text-left text-[#9F9F9F]">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

