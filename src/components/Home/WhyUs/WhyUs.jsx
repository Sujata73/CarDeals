import React from 'react'
import { SiWebmoney } from "react-icons/si";
import {FaUsers} from "react-icons/fa"
import{FaShippingFast} from "react-icons/fa"
import WhyUsCard from './whyUsCard';
const WhyUs = () => {
  const icon1=<SiWebmoney className='text-green-500 mx-auto ' size={48}/>
  const icon2=<FaUsers className='text-green-500 mx-auto ' size={48}/>
  const icon3=<FaShippingFast className='text-green-500 mx-auto ' size={48}/>
  return (
    <div className=' flex flex-col justify-center  md:mt-16  py-8 space-y-20 min-h-screen '>
      <div className='space-y-3'>
      <h1 className='font-bold text-4xl '>Why choose <span className='text-primary'>WheelsDeal</span></h1>
    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aliquid excepturi quo officiis, dolore, repudiandae velit veritatis, blanditiis ad quas explicabo.</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 md:mx-32 '>
    <WhyUsCard icon={icon1} title="Financing Options "/>
    <WhyUsCard icon={icon2} title="Satisfied Customers"/>
    <WhyUsCard icon={icon3} title="Fast and Easy Booking"/>
  
    </div>
    </div>
  )
}

export default WhyUs