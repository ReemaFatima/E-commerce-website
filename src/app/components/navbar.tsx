'use client'
import React from "react";

 import { useState } from "react";
 import Link from "next/link";
 import Image from "next/image";
 import icon from "@/app/assets/icon.png";
 import search from "@/app/assets/search.png";
 import heart from "@/app/assets/heart.png";
 import cart from "@/app/assets/cart.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between space-x-0.5 py-4 px-8 mr-10 bg-[#FBEBB5] w-full">
      {/* Left section: Empty space for alignment */}
      <div className="w-1/12"></div> {/* Small left margin */}

      {/* Middle section: Navigation links (Home, Shop, About, Contact) */}
      <div className="flex justify-center w-full sm:w-auto flex-grow">
        <nav className="font-poppins space-x-10 sm:space-x-4 lg:space-x-10 hidden sm:flex">
          <Link href="/" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Home
          </Link>
          <Link href="/shop" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Shop
          </Link>
          <Link href="/about" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            About
          </Link>
          <Link href="/contact" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Contact
          </Link>
        </nav>
      </div>

      {/* Right section: Icons (Profile, Search, Favorites, Cart) */}
      <div className="hidden sm:flex space-x-8 sm:space-x-4 ml-auto">
        <Link href="/account" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <Image src={icon} alt="profile"></Image>
        </Link>
        <Link href="/search" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
        <Image src={search} alt="search"></Image>
        </Link>
        <Link href="/heart" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
        <Image src={heart} alt="search"></Image>
          
        </Link>
        <Link href="/cart" className="text-lg hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
        <Image src={cart} alt="search"></Image>
        </Link>
      </div>

      {/* Mobile Burger Icon (will toggle the menu) */}
      <div className="sm:hidden flex items-center">
        <button className="text-lg" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
          ☰ {/* Burger Icon */}
        </button>
      </div>

      {/* Mobile Menu (appears when burger icon is clicked) */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden fixed top-16 left-0 right-0 bg-white shadow-md rounded-l-md z-50`}>
        <nav className="flex flex-col space-y-4 py-4 px-8">
          <Link href="/" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Home
          </Link>
          <Link href="/shop" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Shop
          </Link>
          <Link href="/about" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            About
          </Link>
          <Link href="/contact" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450">
            Contact
          </Link>

          {/* Mobile icons */}
          <Link href="/account" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <Image src={icon} alt="profile"></Image>
          </Link>
          <Link href="/search" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <Image src={search} alt="search"></Image>
          </Link>
          <Link href="/favorites" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <Image src={heart} alt="search"></Image>
          
          </Link>
          <Link href="/cart" className="text-2xl hover:text-slate-700 hover:scale-110 transition-all duration-450 transform hover:translate-x-[-3px] hover:rotate-6">
          <Image src={cart} alt="search"></Image>
          </Link>
        </nav>
      </div>
    </header>
  );
}