import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const SamplePrevArrow = (props) => {
    const {onClick } = props;
  return (
    <>
     <div
          className={"text-3xl  inline-block absolute z-10 top-[-50px]  right-12 hover:text-iconcolor"}
          onClick={onClick}
        ><FaRegArrowAltCircleLeft className=''/>
    
        </div>
    </>
  )
}

export default SamplePrevArrow