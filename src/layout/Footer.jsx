import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/logo.png'
import footer from '../assets/footer.png'
import Heading from '../components/Heading'
import Menu from '../components/Menu'
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    
     <div className="pt-[40px] pb-[40px]">
        <Container>
            <Flex className={" p-[28px] justify-between space-x-10 "}>
                <div className="w-[40%]">
                    <Image imgSrc={logo}/>
                    <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} as={"p"} className={"text-[16px] mt-[20px] mb-[20px] text-[#9A9A9A]"}/> 
                  <div className="flex gap-x-2 items-center">
                  <Heading text={"Payment Accepted"} as={"h2"} className={"font-extrabold text-[16px] text-[#000000]"}/>
                  <Image imgSrc={footer}/>
                  </div>
                    </div>
                <div className="w-[20%] mt-[50px]">
                    <Heading text={"Support"} as={"h2"} className={" mb-[20px] font-bold text-[25px] text-iconcolor inline-block hover:border-b-4 hover:border-iconcolor"}/>
                    <Menu className={"text-[#6F6F6F] "}>
  <ul className="space-y-7"> {/* Apply vertical spacing here */}
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">Track Your Order</li>
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">Terms & Conditions</li>
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">Privacy Policy</li>
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">Help Centre</li>
   
  </ul>
                   </Menu>
            </div>
            <div className="w-[20%] mt-[50px]">
                    <Heading text={"Useful Links"} as={"h2"} className={" mb-[20px] font-bold text-[25px] text-iconcolor inline-block hover:border-b-4 hover:border-iconcolor"}/>
                    <Menu className={"text-[#6F6F6F] "}>
  <ul className="space-y-7"> {/* Apply vertical spacing here */}
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">Home</li>
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">Shop</li>
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">About</li>
    <li className=" text-[14px] cursor-pointer hover:font-bold hover:text-iconcolor">News & Articles</li>
   
  </ul>
                   </Menu>
            </div>
            <div className="w-[20%] mt-[50px]">
                    <Heading text={"Useful Links"} as={"h2"} className={" mb-[20px] font-bold text-[25px] text-iconcolor inline-block hover:border-b-4 hover:border-iconcolor"}/>
                   <div className="flex gap-x-4 items-center">
                   <IoLocationOutline className='text-[40px]   text-iconcolor'/>
                   <Heading text={"Plaza X, XY Floor, XYZ Street, XYZ"} as={"h2"} className={"   text-[18px] text-[#6F6F6F] hover:text-iconcolor "}/>
                   </div>
                   <div className="flex gap-x-2 items-center">
                   <CgMail className='text-[40px]  text-iconcolor'/>
                   <Heading text={"yourname@gmail.com"} as={"h2"} className={"  text-[18px] text-[#6F6F6F] hover:text-iconcolor "}/>
                   </div>
                   <div className="flex gap-x-4 items-center">
                   <FaPhone className='text-[40px]   text-iconcolor'/>
                   <Heading text={"123-456-7890"} as={"h2"} className={"  text-[18px] text-[#6F6F6F] hover:text-iconcolor "}/>
                   </div>
            </div>
            </Flex>
        </Container>
    </div> 
    </>
  )
}

export default Footer