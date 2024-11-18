import React from 'react'
import umbrella from "../assets/Images/Png/umbrella.png"
import msp from "../assets/Images/Png/msp.png"
import panda from "../assets/Images/Png/panda.png"

function Happy() {
  return (
    <div>

        <section>

        <div className=' px-3 mx-auto   my-[50px]'>

            <p className='text-[28px] font-medium ff_outfit text-center mb-[30px] md:mb-[45px] lg:mb-[50px]'>Our Happy Client's</p>
    <div className='flex mx-auto items-center gap-[50px]  flex-wrap justify-center'>
         <img src={panda} alt="panda" />
         <img src={umbrella} alt="umbrella" />
         <img src={panda} alt="panda" />
         <img src={msp} alt="msp" />
         <img src={umbrella} alt="umbrella" />
         <img src={msp} alt="msp" />
    </div>

        </div>

        </section>
      
    </div>
  )
}

export default Happy
