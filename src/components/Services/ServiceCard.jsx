import React from 'react'

const ServiceCard = ({icon,title}) => {
  return (
    <div className='border-2 border-secondary bg-slate-100 text-center p-8 space-y-4 hover:text-white transition duration-200 ease-in-out  hover:bg-secondary rounded-md cursor-pointer'>
        <p>{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum eos quam facere maxime cupiditate nesciunt minima, quas, officia inventore dolorem! Accusantium ut maiores iure natus magnam eaque sapiente ratione.</p>
    </div>
  )
}

export default ServiceCard