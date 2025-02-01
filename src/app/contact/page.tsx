
import React from 'react';
import Offer from '../components/offer';
import Footer from '../components/footer';
import ShopSection from '../components/shopsection';
import Image from 'next/image';
import addres from "@/app/assets/addres.png";
import call from "@/app/assets/call.png";
import time from "@/app/assets/call.png"; 

const Contact = () => {
  return (
    <div>
      <ShopSection heading="Contact" subheading="Home Contact" />

      <div className="bg-white flex items-center justify-center py-16">
        <div className="max-w-5xl w-full px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black">Get In Touch With Us</h2>
            <p className="text-gray-500 mt-4">
              For More Information About Our Product & Services. Please Feel Free To Drop Us
              An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
        {/* Left: Contact Info with images */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <Image src={addres} alt="Address" width={40} height={40} />
            </div>
            <div>
              <h4 className="text-black font-bold text-lg">Address</h4>
              <p className="text-gray-500">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <Image src={call} alt="Phone" width={40} height={40} />
            </div>
            <div>
              <h4 className="text-black font-bold text-lg">Phone</h4>
              <p className="text-gray-500">Mobile: +(84) 546-6789</p>
              <p className="text-gray-500">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <Image src={time} alt="Working Time" width={40} height={40} />
            </div>
            <div>
              <h4 className="text-black font-bold text-lg">Working Time</h4>
              <p className="text-gray-500">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="flex flex-col space-y-8">
          <form className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            {/* Subject */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                placeholder="This is an optional"
              />
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-500 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                rows={4}
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-48 py-2 text-black bg-white border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <br />
      <Offer />
      <Footer />
    </div>
  );
};

export default Contact;
