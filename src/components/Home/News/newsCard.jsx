import React from 'react'

const Newscard = ({id,img,desc}) => {
  return (
    <div key={id} className='bg-slate-100 border border-secondary rounded-md cursor-pointer'>
        <img src={img}/>
        <h1 className=''>{desc}</h1>
    </div>
  )
}

export default Newscard
