import React, { useState } from 'react'
import TestmonialsBox from './TestmonialsBox'
import Image1 from "../Assets/images/profile-1.jpg"
import Image2 from "../Assets/images/profile-2.jpg"
import Image3 from "../Assets/images/profile-3.jpg"
import background from "../Assets/images/bg-quotes.png"

export default function Testmonials() {
 const[testData,setTestData]=useState([
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
    image: Image1,
    position: "Founder & CEO, Huddle",
    name: "Ahmed",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
    image: Image2,
    position: "Founder & CEO, Huddle",
    name: "Mohamed",
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
    image: Image3,
    position: "Founder & CEO, Huddle",
    name: "Eman",
  },
 ]

 )

  return (
    <section className='pb-[350px]'>
      <div className='container relative'>
<div className='absolute left-[20px] top-[-35px]'> 
  <img src={background} alt="background"/>
</div>
     
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10 '>
    {testData.map((data)=>(
      <TestmonialsBox key={data.id}
      desc={data.desc}
      image={data.image}
      postion={data.postion}
      name={data.name}
      />
    ))}
    </div>
    </div>
    </section>
  )
}
