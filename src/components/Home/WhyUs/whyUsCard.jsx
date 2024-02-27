import React from 'react'

const WhyUsCard = ({icon,title}) => {
  return (
    <div className='text-center bg-slate-100 group hover:bg-secondary p-8 space-y-4 transition duration-200 ease-in-out cursor-pointer hover:translate-y-3 '>
        <p>{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        <p className='text-sm text-justify group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi sequi veniam quis. Ex dolorum illum odio repudiandae cupiditate consequatur sequi itaque, atque magnam veniam doloribus obcaecati iure dolorem id?</p>
       
    </div>
  )
}

export default WhyUsCard