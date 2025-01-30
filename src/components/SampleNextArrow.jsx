import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
    const { onClick } = props;
  return (
   <>
    <div
         className={"text-3xl inline-block absolute top-[-50px] right-3 hover:text-menuhover"}
         onClick={onClick}
       ><FaRegArrowAltCircleRight/></div>
   </>
  )
}

export default SampleNextArrow