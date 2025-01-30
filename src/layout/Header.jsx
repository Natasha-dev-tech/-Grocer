import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/logo.png'
import { MdSupportAgent } from "react-icons/md";
import Heading from '../components/Heading'
import { FaRegUser } from "react-icons/fa";
import Menu from '../components/Menu'
import { FaSearch,FaRegHeart, } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
   <>
   <div className="py-4 bg-[#FFFFFF]">
    <Container>
        <Flex className={"items-center justify-between"}>
            <div className="w-[50%]">
             <Image imgSrc={logo}/>
            </div>
            <div className="w-[50%] justify-end flex gap-x-8">
                <div className="flex items-center gap-x-2">
                   <MdSupportAgent className='text-[16px] text-iconcolor'/>
                   <Heading text={"Support"} as={"h2"} className={"text-iconcolor text-[16px] "}/>
                </div>
                <div className="flex items-center gap-x-2">
                <FaRegUser className='text-[16px] text-iconcolor'/>
                <Heading text={"Account"} as={"h2"} className={"text-iconcolor text-[16px] "}/>
                </div>
            </div>
        </Flex>
    </Container>
   </div>
   <div className="py-4 bg-[#fffff]">
    <Container>
        <Flex className={"items-center justify-between"}>
        <div className="w-[40%]">
        <Menu className={"flex space-x-6"}>
                
                <li className="font-medium text-[18px] cursor-pointer hover:font-bold hover:text-iconcolor  text-menucolor">Hot deals</li>
                <li className="font-medium text-[18px] cursor-pointer hover:font-bold hover:text-iconcolor  text-menucolor">Shop</li>
                <li className="font-medium text-[18px] cursor-pointer hover:font-bold hover:text-iconcolor  text-menucolor">Home</li>
                <li className="font-medium text-[18px] cursor-pointer hover:font-bold hover:text-iconcolor  text-menucolor">about</li>
                <li className="font-medium text-[18px] cursor-pointer hover:font-bold hover:text-iconcolor  text-menucolor">page</li>
                <li className="font-medium text-[18px] cursor-pointer hover:font-bold hover:text-iconcolor  text-menucolor">contact</li>
                            
                        </Menu>
        </div>
        <div className="w-[40%] relative">
            <input type="text" placeholder='Search' className='w-full p-4 focus:outline-none rounded-md bg-white border-2 border-iconcolor' />
            <FaSearch className='top-5 right-4 absolute text-[20px] text-iconcolor'/>
        </div>
        <div className="w-[20%]  flex items-center gap-x-5 justify-end">
          <FaRegHeart className='text-[20px] text-iconcolor' />
          <Heading text={"Add to Wislist"} as={"h2"} className={"text-iconcolor text-[20px] "}/>
          <FiShoppingCart className='text-[20px] text-iconcolor' />
        </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Header