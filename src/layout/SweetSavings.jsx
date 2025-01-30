import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import five from '../assets/5.png'
import Heading from '../components/Heading'

const SweetSavings = () => {
  return (
    <>
    <div className="pt-[10px] pb-[40px]">
        <Container>
            <Flex className={"w-[1032px] items-center justify-between m-auto"}>
                <div className="w-[20%]">
                    <div className="">
                        <Image imgSrc={one}/>
                    </div>
                    <Heading text={"Best Price & Offers"} as={"p"} className={"text-[#000000] font-semibold text-[15px] mt-[10px]"}/>
                    <Heading text={"Order $50 Or More"} as={"p"} className={"text-[#707070] font-medium text-[13px] ml-[10px]"}/>
                </div>
                <div className="w-[20%]">
                <div className="">
                        <Image imgSrc={two}/>
                    </div>
                    <Heading text={"Best Price & Offers"} as={"p"} className={"text-[#000000] font-semibold text-[15px] mt-[10px]"}/>
                    <Heading text={"Order $50 Or More"} as={"p"} className={"text-[#707070] font-medium text-[13px] ml-[10px]"}/>
                </div>
                <div className="w-[20%]">
                <div className="">
                        <Image imgSrc={three}/>
                    </div>
                    <Heading text={"Best Price & Offers"} as={"p"} className={"text-[#000000] font-semibold text-[15px] mt-[10px]"}/>
                    <Heading text={"Order $50 Or More"} as={"p"} className={"text-[#707070] font-medium text-[13px] ml-[10px]"}/>
                </div>
                <div className="w-[20%]">
                <div className="">
                        <Image imgSrc={four}/>
                    </div>
                    <Heading text={"Best Price & Offers"} as={"p"} className={"text-[#000000] font-semibold text-[15px] mt-[10px]"}/>
                    <Heading text={"Order $50 Or More"} as={"p"} className={"text-[#707070] font-medium text-[13px] ml-[10px]"}/>
                </div>
                <div className="w-[20%]">
                <div className="">
                        <Image imgSrc={five}/>
                    </div>
                    <Heading text={"Best Price & Offers"} as={"p"} className={"text-[#000000] font-semibold text-[15px] mt-[10px]"}/>
                    <Heading text={"Order $50 Or More"} as={"p"} className={"text-[#707070] font-medium text-[13px] ml-[10px]"}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default SweetSavings