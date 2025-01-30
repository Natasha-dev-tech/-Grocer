import React from 'react'
import Image from '../components/Image'
import product1 from '../assets/product1.png'
import Heading from '../components/Heading'
import { FaCartShopping } from "react-icons/fa6";
const Product = ({htext,imgSrc}) => {
  return (
   <>
   <div className="w-[290px] relative h-[440px] bg-[#ffffff] border-2 border-iconcolor ">
    <Image imgSrc={imgSrc} className={"w-full"}/>
     <div className="">
     <Heading text={htext} as={"h2"} className={"font-medium text-[27px] text-menucolor text-center"}/> 
    <div className="flex justify-center gap-x-2">
    <Heading text={"$30"} as={"p"} className={"font-medium text-[22px] text-[#A5A5A5] hover:font-bold text-center hover:text-iconcolor"}/> 
    <Heading text={"$25"} as={"h2"} className={"font-medium text-[22px] hover:font-bold text-iconcolor hover:text-iconcolor  text-center"}/> 
    </div>
    
    <div className="px-[48px] flex items-center gap-x-2 py-2 absolute bottom-4 left-8 right-8 rounded-md z-10 m-auto bg-iconcolor">
  <FaCartShopping className="text-[20px] text-white font-bold" />
  <Heading
    text="Add to Cart"
    as="p"
    className="font-bold text-[15px] text-white"
  />
</div>
 
     </div>
   </div>
  
   </>
  )
}

export default Product