import React from 'react'
import Product from './Product'
import Container from '../components/Container'
import Flex from '../components/Flex'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'

import product12 from '../assets/product12.png'
import product4 from '../assets/product4 .png'
import Image from '../components/Image'




const Productspart = () => {
    
    
  return (
  <>
  <div className="pt-[40px] pb-[40px]">
  <Container className="gap-y-6">
  <Flex className="items-center gap-x-6">
    <Product imgSrc={product1} htext="Apple" />
    <Product imgSrc={product2} htext="Banana" />
    <Product imgSrc={product3} htext="Chocolate Cookies" />
    <div className="w-[290px] h-[440px] bg-[#ffffff] border-2 border-iconcolor">
      <Image imgSrc={product4} className="w-full" />
    </div>
  </Flex>
  <Flex className="items-center gap-x-6 mt-6"> {/* Added vertical margin */}
    <Product imgSrc={product5} htext="chocholate Spread" />
    <Product imgSrc={product9} htext="fresh Bread" />
    <Product imgSrc={product7} htext="Easter-Bread" />
    <div className="w-[290px] h-[440px] bg-[#ffffff] border-2 border-iconcolor">
      <Image imgSrc={product8} className="w-full" />
    </div>
  </Flex>
  <Flex className="items-center gap-x-6 mt-6"> {/* Added vertical margin */}
    <Product imgSrc={product9} htext="fresh Bread" />
    <Product imgSrc={product10} htext="lemon" />
    <Product imgSrc={product3} htext=" chocholate cookies" />
    <div className="w-[290px] h-[440px] bg-[#ffffff] border-2 border-iconcolor">
      <Image imgSrc={product12} className="w-full" />
    </div>
  </Flex>
</Container>

  </div>
  </>
  )
}

export default Productspart