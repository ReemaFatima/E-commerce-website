import Image from "next/image";
import blog from "@/app/assets/blog.png";
import handmade from "@/app/assets/handmade.png";
import vector from "@/app/assets/vector.png";
import icon3 from "@/app/assets/icon3.png";
import dashicon from "@/app/assets/dashicon.png";
import explore from "@/app/assets/explore.png";
import search from "@/app/assets/search.png";

import React from "react";

export default function Article() {
  return (
    <div className="bg-white px-6 py-6 font-poppins">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section: Blog Posts */}
        <div className="lg:w-2/3 flex flex-col gap-12">
          {/* Article 1 */}
          <div className="flex flex-col gap-6 items-start">
            <div className="w-full ">
              <Image
                src={blog}
                alt="Article Image 1"
                width={600}
                height={500}
                className="w-full h-[500px] rounded-[10px] object-cover"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex gap-4 items-center text-gray-500 text-sm justify-start">
                <div className="flex items-center gap-2">
                  <Image
                    src={dashicon}
                    alt="icon"
                    className="w-[20px] h-[20px]"
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={vector}
                    alt="vector"
                    className="w-[16.67px] h-[16.67px]"
                  />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={icon3}
                    alt="icon"
                    className="w-[18.91px] h-[18.91px]"
                  />
                  <span>Category</span>
                </div>
              </div>
              <h2 className="text-black font-bold text-xl">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur labore nostrum sint
                vero quas a tempore cumque, tempora modi officiis. Id adipisci
                debitis vero delectus facere maiores quia sapiente illum....
              </p>
              <button className="w-40 text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
                Read more
              </button>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex flex-col gap-6 items-start">
            <div className="w-full">
              <Image
                src={explore}
                alt="Article Image 2"
                width={600}
                height={500}
                className="w-full h-[500px] rounded-[10px] object-cover"
              />
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex gap-4 items-center text-gray-500 text-sm justify-start">
                <div className="flex items-center gap-2">
                  <Image
                    src={dashicon}
                    alt="icon"
                    className="w-[20px] h-[20px]"
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={vector}
                    alt="vector"
                    className="w-[16.67px] h-[16.67px]"
                  />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={icon3}
                    alt="icon"
                    className="w-[18.91px] h-[18.91px]"
                  />
                  <span>Category</span>
                </div>
              </div>
              <h2 className="text-black font-bold text-xl">
                Exploring new ways of decorating
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Exercitationem et perspiciatis
                provident aut qui, veniam nihil possimus. Nam amet vero animi
                earum, eius eum quam molestias facilis itaque. Similique,
                officia?
              </p>
              <button className="w-40 text-black font-semibold py-3 px-8 border-b border-black hover:text-slate-700 hover:scale-110 transition-all duration-300 transform hover:translate-x-[-3px] hover:rotate-1">
                Read more
              </button>
            </div>

            <div className="w-full space-y-6">
              <Image
                src={handmade}
                alt="handmade"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="flex justify-start gap-6">
                <span className="flex items-center space-x-2">
                  <p className="font-Poppins text-[#9F9F9F] text-base">Admin</p>
                </span>
                <span className="flex items-center space-x-2">
                  <Image
                    src={vector}
                    alt="vector"
                    className="w-[16.67px] h-[16.67px]"
                  />
                  <p className="font-Poppins text-[#9F9F9F] text-base">
                    14 Oct 2022
                  </p>
                </span>
                <span className="flex items-center space-x-2">
                  <Image
                    src={icon3}
                    alt="icon"
                    className="w-[18.91px] h-[18.91px]"
                  />
                  <p className="font-Poppins text-[#9F9F9F] text-base">Wood</p>
                </span>
              </div>
              <h2 className="font-Poppins font-medium text-2xl mt-6">
                Handmade pieces that took time to make
              </h2>
              <p className="font-Poppins text-[#9F9F9F] text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                natus eos accusantium eaque error nihil, consequuntur fuga
                possimus, vel quo enim. Rerum, vel maiores magni iusto nihil ut
                dolores a? Mollitia cum aspernatur necessitatibus quas,
                obcaecati illum quasi repellendus repudiandae amet neque
                nesciunt voluptas commodi delectus iusto quis deleniti, sit
                cupiditate impedit esse a ad maxime nisi ipsum omnis? Cumque.
              </p>

              <p className="font-Poppins text-[#9F9F9F] text-base mt-4">
                Read more
              </p>
              <div className="border-b-2 border-black w-[77px] mt-2"></div>
            </div>
          </div>
        </div>

        {/* Right Section: Sidebar */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          {/* Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="h-[58px] w-full border border-gray-300 rounded-[10px] px-4 text-gray-600 focus:outline-none focus:ring focus:ring-[#FBEBB5]"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Image src={search} alt="search"></Image>
            </button>
          </div>

          {/* Categories */}
          <div className="w-full ml-4">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="grid gap-4 text-sm">
              <li className="flex justify-between text-gray-600">
                <span>Crafts</span>
                <span className="ml-auto pr-6">2</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Design</span>
                <span className="ml-auto pr-6">5</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Handmade</span>
                <span className="ml-auto pr-6">8</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Interior</span>
                <span className="ml-auto pr-6">3</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Wood</span>
                <span className="ml-auto pr-6">1</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="w-full ml-4">
            <h3 className="text-black font-bold mb-4">Recent Posts</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4 text-gray-600">
                <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                  <Image
                    src="/blog-2.jpg"
                    alt="Recent Post 1"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black font-medium">Recent Post Title 1</p>
                  <span className="text-sm">03 Aug 2022</span>
                </div>
              </li>
              <li className="flex items-center gap-4 text-gray-600">
                <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                  <Image
                    src="/blog-2.jpg"
                    alt="Recent Post 2"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black font-medium">Recent Post Title 2</p>
                  <span className="text-sm">03 Aug 2022</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-auto gap-2">
        <div className="w-10 h-10 flex items-center justify-center bg-[#FBEBB5] text-black font-semibold rounded-[10px] cursor-pointer">
          1
        </div>

        <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9E5] text-gray-500 font-semibold rounded-[10px] cursor-pointer">
          2
        </div>

        <div className="w-10 h-10 flex items-center justify-center bg-[#FFF9E5] text-gray-500 font-semibold rounded-[10px] cursor-pointer">
          3
        </div>

        <div className="w-12 h-10 flex items-center justify-center bg-[#FFF9E5] text-gray-500 font-semibold rounded-[10px] cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
}
