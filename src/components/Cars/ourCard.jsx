import React from 'react'

const OurCard = ({id,img,name,price}) => {
  return (
    <div key={id} className='border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer hover:scale-95'>
     <img src={img}/>
     <h1 className=' font-bold text-xl ol-5 text-primary'>{name}</h1>
     <p className='pl-5 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut animi ducimus voluptas numquam illo mollitia qui vel atque dignissimos laboriosam recusandae enim sunt, nostrum eligendi, labore eaque unde autem.</p>
     <div className='flex justify-between px-6 pb-2'>
        <h3 className='font-semibold text-xl'>${price}</h3>
        <button className='bg-secondary text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-primary transition duration-200 ease-linear '>Book Now</button>
     </div>
    </div>
  )
}

export default OurCard