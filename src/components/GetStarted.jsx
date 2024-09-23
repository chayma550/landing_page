import React from 'react'

export default function GetStarted() {
  return (
    <section>
        <div className='container relative'>
        <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col w-[865px] min-h[275px] max-w-full text-white p-[30px]">
<h3 className='text-[25px] md:text-[35px] font-semibold mb-[15px]'>Get early access today</h3>
<p className='w-[620px] max-w-full mx-auto justify-center'> "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Ut sed beatae, laboriosam enim voluptatum quia.</p>
<form className='w-full flex justify-between items-center mt[5px] flex-wrap md:px-[60px] gap-[30px]'>
    <input type='email' name='email' placeholder='email@exemple.Com' className='w-full h-[50px] pl-[30px ] mt-[5px] rounded-[30px] outline-none border-none text-black md:flex-1 '/>
    <button type='submit' className='w-full md:w-[200px] h-[50px] bg-[#45b0d1] hover:bg-[#8cdae4] transition-all duration-200   rounded-[30px]'>Get Started For Free</button>
</form>
            </div>
            
            
        </div>
        </section>
  )
}
