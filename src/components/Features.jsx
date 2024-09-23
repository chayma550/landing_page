import React, { useState } from 'react'
import FeaturesBox from './FeaturesBox';
import icon1 from '../Assets/images/icon-access-anywhere.svg'
import icon2 from "../Assets/images/icon-security.svg"
import icon3 from "../Assets/images/icon-collaboration.svg"
import icon4 from "../Assets/images/icon-any-file.svg"

export default function Features() {
    const items=[
        {
          id:1,
          icon:icon1,
          title: "Acces your files,anywhere",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
          id:2,  
          icon: icon2,
          title: "Security you can trust",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
          id:3,  
          icon:icon3,
          title: "Real-time collaboration",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
          id:4,  
          icon: icon4,
          title: "Store any type of file",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
      ];
  return (
    <div className='container'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto'>
        {items.map((item)=>(
            <FeaturesBox key={item.id} 
            title={item.title} 
            icon={item.icon}
             desc={item.desc}
              />
        ))}
    </div>
        
        </div>
  )
}
