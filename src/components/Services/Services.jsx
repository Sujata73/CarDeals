import React from 'react'
import { GiCarWheel } from 'react-icons/gi'
import { MdDesignServices } from 'react-icons/md'
import { SiCoronaengine, SiGoogleearthengine } from 'react-icons/si'
import { IoSettings } from "react-icons/io5";
import { FaCar } from 'react-icons/fa'
import ServiceCard from './ServiceCard';
const Service = () => {
    const icon1=<GiCarWheel className='text-green-500  mx-auto' size={38}/>
    const icon2=<SiGoogleearthengine className='text-green-500  mx-auto' size={38}/>
    const icon3=<MdDesignServices className='text-green-500  mx-auto'  size={38}/>
    const icon4=<IoSettings className='text-green-500  mx-auto'  size={38}/>
    const icon5=<FaCar className='text-green-500  mx-auto'  size={38}/>
    const icon6=<SiCoronaengine className='text-green-500  mx-auto'  size={38}/>
  return (
    <div className='py-36'>
        <div>
            <h1 className='font-bold text-4xl'>Our<span className='text-primary'>Services</span></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
            <ServiceCard icon={icon1} title="Tires and Wheels"/>
            <ServiceCard icon={icon2} title="Exhaust System"/>
            <ServiceCard icon={icon3} title="Cars Maintenance"/>
            <ServiceCard icon={icon4} title="Break Repairs"/>
            <ServiceCard icon={icon5} title="Body Serivice"/>
            <ServiceCard icon={icon6} title="Engine Service"/>
        </div>
    </div>
  )
}

export default Service