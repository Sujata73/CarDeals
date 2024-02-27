import React, { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const[menu,setMenu]=useState(false)
    const handleChange = ()=>{
        setMenu(!menu)
    }
  return (
    <header className=' bg-secondary text-white w-full fixed z-10  '>
      <nav className='flex justify-between p-5 bg  '>
        <div className="flex gap-1 items-center">
          <GiSteeringWheel  className='text-primary size-10'/><span className='font-bold text-2xl'>WheelsDeal</span>
        </div>
        <div className="  hidden lg:flex gap-5 items-center">
          <ul className='flex gap-5  '>
            < li className='hover:text-primary ransition duration-100 ease-linear cursor-pointer'><Link to='/'>Home</Link></ li>
            < li className='hover:text-primary  group  relative transition duration-100 ease-linear cursor-pointer'><Link to='/about'>AboutUs</Link>
            <ul className=' bg-white px-5 hidden group-hover:block  absolute w-20' >
              <li className='border-b '>s</li>
              <li>u</li>
              <li>s</li>
              <li>s</li>
            </ul>
            </li>
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer'><Link to='/car'>OurCars</Link></ li >
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer '><Link to='/services'>Services</Link></ li >
            
          </ul>
          <div className='relative group'><button className='border-2 border-primary p-1 rounded-md px-4 hover:bg-primary transition duration-200 ease-linear '>SignIn</button>
          <ul className='absolute hidden  flex-col  p-5  group-hover:block bg-primary w-32  right-0 -bottom-32 h-32'>
            <li>profile</li>
            <li>Settings</li>
            <li> logout</li>
          </ul>
          </div>
      
        </div>
        <div className='lg:hidden flex items-center '>
            {menu? <MdClose className='z-10' onClick={handleChange} />:<RxHamburgerMenu onClick={handleChange} />}
          
        </div>
        {/* responsive section */}
          
        <ul className={`${menu?' lg:hidden  absolute top-0 left-0 w-full flex flex-col bg-secondary justify-center translate-x-0 transition duration-200 gap-10 h-96': '-translate-x-full  absolute left-[-100%] '}`}>
            < li  className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>Home</ li>
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>AboutUs</li>
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer'>OurCars</ li >
            < li className='hover:text-primary transition duration-100 ease-linear cursor-pointer '>Services</ li >
            <div className=''><button className='border-2 border-primary p-1 rounded-md px-4 hover:bg-primary transition duration-200 ease-linear '>SignIn</button></div>
            </ul>
         
      </nav>
    </header>
  );
};

export default Navbar;
