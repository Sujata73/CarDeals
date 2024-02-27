import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' bg-secondary text-white'>
    <div className='flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px- px-16 px-5'>
      <div className='w-full md:w-1/4'>
        <h3 className='font-semibold text-2xl pb-4'>WheelsDeal</h3>
        <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus! Magni, ratione minus! Veniam amet ut cumque ad beatae debitis omnis, distinctio eveniet nemo, soluta asperiores eaque enim exercitationem quidem.</p>
      </div>
      <div>
        <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Pages Links</h1>
        <div className='flex flex-col gap-2 font-medium'>
        <ul >
            < li  className='hover:text-primary transition duration-100 ease-linear cursor-pointer'><Link to='/'>Home</Link></li>
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer'><Link to ='/about'>AboutUs</Link></li>
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer'><Link to='/ourcars'>OurCars </Link></ li >
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer '><Link to='/services'>Services</Link></ li >
            <div className=''><button className='border-2 border-primary p-1 rounded-md px-4 hover:bg-primary transition duration-200 ease-linear '>SignIn</button></div>
            </ul>
        </div>
      </div>
     <div>
    <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0' >Used cars for sale</h1> 
    <div className='flex flex-col gap-2 font-medium'>
    <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>Toyota Carmy</Link>
    <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>Chevrolet Corvette</Link>
    <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>VolkSwagen Golf</Link>
    <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>Nisan Rouge</Link>
      </div>  
     </div>
     <div>
      <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Learn More</h1>
      <div className='flex flex-col gap-2 font-medium'>
      <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>User-friendly</Link>
    <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>Search and Filters</Link>
    <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>Secure Payment</Link>
    <Link to ='/about'className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>Geolocation Services</Link>
      </div>
     </div>
    </div>
    <div className='py-4'>
      <p >@ copyright developed by <span className='text-primary font-semibold mx-2'>sujata shrestha</span>| All rights reserved</p>
    </div>
    </footer>
  )
}

export default Footer