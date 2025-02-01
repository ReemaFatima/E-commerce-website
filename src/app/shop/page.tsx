import React from 'react'

import ProductList from "@/app/components/productlist"
import ShopSection from '../components/shopsection';
import Offer from '../components/offer';
import Footer from '../components/footer';
const products = [
  {
    id: 1,
    
    image: "image1.png",
    name: "Trenton modular sofa_3",
    price: "Rs. 25000.00",
  },
  {
    id: 2,
   
    image: "image2.png",
    name: "Granite dining table with dining chair",
    price: 'Rs. 25000.00',
  },
  {
    id: 3,
   
    image: "image3.png" ,
    name: "Outdoor bar table and stool",
    price: 'Rs. 25000.00',
  },
  {
    id: 4,
   
    image: "image4.png" ,
    name: "Plain console with teak mirror",
    price: 'Rs. 25000.00',
  },
  {
    id: 5,
   
    image: "image5.png" ,
    name: "Grain coffee table",
    price: 'Rs. 15000.00',
  },
  {
    id: 6,
   
    image: "image6.png" ,
    name: "Kent coffee table",
    price: 'Rs. 225,000.00',
  },
  {
    id: 7,
   
    image: "image7.png" ,
    name: "Round coffee table_color 2",
    price: 'Rs. 251,000.00',
  },
  {
    id: 8,
   
    image: "image8.png" ,
    name: "Reclaimed teak coffee table",
    price: 'Rs. 25,200.00',
  },
  {
    id: 9,
   
    image: "image9.png" ,
    name: "Plain console_",
    price: 'Rs. 258,200.00',
  },
  {
    id: 10,
   
    image: "image10.png" ,
    name: "Reclaimed teak Sideboard",
    price: 'Rs. 20,000.00',
  },
 
  {
    id: 11,
   
    image: "image11.png" ,
    name: "SJP_0825 ",
    price: 'RS. 200,000.00',
  },
  {
    id: 12,
   
    image: "image12.png" ,
    name: "Bella chair and table",
    price: 'Rs. 100,000.00',
  },
  {
    id: 13,
   
    image: "table.png" ,
    name: "Granite square side table",
    price: 'Rs. 258,800.00',
  },
  {
    id: 14,
   
    image: "sofa.png" ,
    name: "Asgaard sofa",
    price: 'Rs. 250,000.00',
  },

  {
    id: 15,
   
    image: "seater.png" ,
    name: "Maya sofa three seater",
    price: 'Rs. 115,000.00',
  },

  {
    id: 16,
   
    image: "image13.png" ,
    name: "Outdoor sofa set",
    price: 'Rs. 244,000.00',
  }

];

export default function Shop() {
  return (

    
    <div>
       <ShopSection
         heading="Shop"
         subheading="Home Shop"
     />
   <div className="container mx-auto p-6">
      <ProductList products={products} />

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
      <Offer/>
      <Footer/>
    </div>
  );
}
