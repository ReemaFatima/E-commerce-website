import React from 'react'
import Image from 'next/image'
import handmade from "@/app/assets/handmade.png"
import vector from "@/app/assets/vector.png"
import icon3 from "@/app/assets/icon3.png"
const Product3 = () => {
  return (
    <div className='w-[820px] h-[794px] top-[2218px] left-[97px] border'>
    
        <Image src={handmade} alt="image" className='w-[817px] h-[500px] top-[2218px] left-[100px] rounded-lg'></Image>
        <div className='w-[393px] h-6 top-[1887px] left-[97px] flex'>
            <span className='w-[80px] h-6 top-[1887px] left-[97px] flex my-4'>
                <p className='w-[53px] h-6 top-[1887px] left-[124px] ml-3 font-Poppins font-normal text-base text-[#9F9F9F]'>Admin</p>
                
            </span>
            <span className='w-[121px] h-6 top-[1887px] left-[212px] my-5 mx-6 '>
                <Image src={vector} alt ="vector" className='w-[16.67px] h-[16.67px] top-[1.67px] left-[1.67px]'></Image>
                <p className='w-[90px] h-6 top-[1887px] left-[243px] ml-6 mt-[-18px] font-Poppins font-normal text-base text-[#9F9F9F]'> 14 Oct 2022</p>


            </span>
            <span className='w-[122px] h-6 top-[1887px] left-[368px] my-5 mx-2 flex'>
                <Image src={icon3} alt="icon" className='w-[18.91px] h-[18.91px] top-[3.06px] left-[3.06px]'></Image>
                <p className='w-[91px] h-6 top-[1887px] left-[399px] font-Poppins font-normal ml-2 text-base text-[#9F9F9F]'>wood</p>

            </span>
            </div>
            <h2 className='w-[632px] h-[45px] top-[2774px] left-[100px] font-Poppins font-medium text-3xl mt-6'>Handmade pieces that took time to make</h2>
           <p className='w-[817px] h-[115px] top-[2813px] left-[100px] font-Poppins font-normal text-base text-[#9F9F9F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti quae quo accusantium possimus debitis porro officiis quaerat, odit harum soluta aperiam dolorem quos, voluptate repellat repudiandae consequuntur magnam consequatur.
           Perferendis repudiandae quas odit deserunt repellendus autem optio quidem nulla, itaque illum aliquid officia distinctio debitis et. Quae ea quas saepe sed neque, ullam iste velit officia, dolorum voluptates tenetur!</p>

            </div>
 
  )
}

export default Product3