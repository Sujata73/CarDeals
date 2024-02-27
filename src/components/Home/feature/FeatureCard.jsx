import React from 'react'

const FeatureCard = ({id,img,name,price}) => {
  return (
    <div  key={id} className='border border-secondary bg-slate-100  shadow-md rounded-xl  cursor-pointer hover:bg-slate-200 transition duration-300 ease-linear hover:scale-95'>
      <div><img src={img} className='rounded-t-xl w-full'/></div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-xl text-primary pt-2'>{name}</h1>
        <div className='flex gap-10 pt-2'>
            <h2 className='font-medium text-lg'>Starting at ${price}</h2>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard