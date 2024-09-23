import React from 'react'

export default function FeaturesBox({icon,title,desc}) {
  return (
    <div className='text-white element-center flex-col'>
        <img 
        className='w-[80] h-[80] object-contain mt-[10px]'
        src={icon}
        alt='img'/>
        <h4 className="text-xl font-semibold my-[15px]">{title }</h4>
        <p className='font-normal text-sm '>{desc}</p>
        </div>
  )
}
