import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import design from '../assets/design.png'
import Heading from '../components/Heading'

const Offer = () => {
  return (
  <>
 <div className="bg-banner bg-no-repeat bg-cover bg-center mt-[40px] mb-[40px]">
  <Container className="flex justify-end">
    <div className="pt-[50px] pb-[70px] w-[480px]">
     <div className="p-4">
     <Image imgSrc={design} className={"mb-[10px]"} />
      <Heading text={`Buy 1 Ice Cream Tubs `} as={"p"} className={"text-white text-[40px] font-semibold "}/>
      <Heading text={`Get One Free `} as={"p"} className={"text-white text-[40px] font-semibold "}/>
      <Heading text={`is simply dummy text of the printing and typesettinindustry. Lorem Ipsum has been the industry's standard `} as={"h2"} className={"text-white mt-[20px] mb-[20px] text-[17px] font-semibold "}/>
      <div className="flex gap-x-4">
        <div className="w-[25%] rounded-full bg-[#003444]">
            <Heading text={"26"} as={"p"} className={"text-white font-semibold   text-[50px] text-center"}/>
            <Heading text={"Days"} as={"p"} className={"text-white font-semibold  mt-[-10px] text-[20px] text-center"}/>
        </div>
        <div className="w-[25%] rounded-full bg-[#003444]">
            <Heading text={"18"} as={"p"} className={"text-white font-semibold   text-[50px] text-center"}/>
            <Heading text={"Hours"} as={"p"} className={"text-white font-semibold  mt-[-10px] text-[20px] text-center"}/>
        </div>
        <div className="w-[25%] rounded-full bg-[#003444]">
            <Heading text={"49"} as={"p"} className={"text-white font-semibold   text-[50px] text-center"}/>
            <Heading text={"Minutes"} as={"p"} className={"text-white font-semibold  mt-[-10px] text-[17px] text-center"}/>
        </div>
        <div className="w-[25%] rounded-full bg-[#003444]">
            <Heading text={"05"} as={"p"} className={"text-white font-semibold   text-[50px] text-center"}/>
            <Heading text={"Second"} as={"p"} className={"text-white font-semibold  mt-[-10px] text-[17px] text-center"}/>
        </div>
      </div>
     </div>
    </div>
  </Container>
</div>

  </>
  )
}

export default Offer