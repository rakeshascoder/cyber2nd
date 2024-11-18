import React from 'react'
import umbrella from "../assets/Images/Png/umbrella.png"
import msp from "../assets/Images/Png/msp.png"
import panda from "../assets/Images/Png/panda.png"
function Clients() {
    return (
        <div>
            <section className='my-[100px]'>
                <div className='max-w-[1360px] px-3 mx-auto  container '>
                    <p className='text-center font-normal text-[20px] ff_outfit'> Our Client’s</p>
                    <p className='text-[30px] md:text-[38px] lg:text-[48px] font-medium leading-[30px] md:leading-[50px] lg:leading-[62px] text-center mt-[20px] lg:mt-[30px] ff_outfit'> 
                        <span className='text-[#06579C]'>Clients</span>    in Secure Hands</p>
                        <div className='flex mx-auto items-center gap-[30px] md:gap-[40px] lg:gap-[50px] mt-[20px] md:mt-[40px] lg:mt-[50px] flex-wrap justify-center'>

                            <img src={umbrella} alt="umbrella" />
                            <img src={umbrella} alt="umbrella" />
                            <img src={umbrella} alt="umbrella" />
                            <img src={umbrella} alt="umbrella" />
                            <img src={umbrella} alt="umbrella" />
                        </div>
                        <div className='flex mx-auto items-center gap-[30px] md:gap-[40px] lg:gap-[50px] mt-[20px] md:mt-[40px] lg:mt-[50px] flex-wrap justify-center'>

                            <img src={umbrella} alt="umbrella" />
                            <img src={msp} alt="msp" />
                            <img src={msp} alt="msp" />
                            <img src={msp} alt="msp" />
                            <img src={msp} alt="msp" />
                        </div>
                        <div className='flex mx-auto items-center gap-[30px] md:gap-[40px] lg:gap-[50px] mt-[20px] md:mt-[40px] lg:mt-[50px] flex-wrap justify-center'>

                       
                            <img src={msp} alt="msp" />
                            <img src={msp} alt="msp" />
                            <img src={msp} alt="msp" />
                            <img src={msp} alt="msp" />
                        </div>
                        <div className='flex mx-auto items-center gap-[30px] md:gap-[40px] lg:gap-[50px] mt-[20px] md:mt-[40px] lg:mt-[50px] flex-wrap justify-center'>

                       
                            <img src={panda} alt="panda" />
                            <img src={panda} alt="panda" />
                            <img src={panda} alt="panda" />
                            <img src={panda} alt="panda" />
                            <img src={panda} alt="panda" />
                        </div>
                        <div className='flex mx-auto items-center gap-[30px] md:gap-[40px] lg:gap-[50px] mt-[20px] md:mt-[40px] lg:mt-[50px] flex-wrap justify-center'>

                       
                           
                            <img src={panda} alt="panda" />
                            <img src={panda} alt="panda" />
                            <img src={panda} alt="panda" />
                        </div>

                </div>


            </section>

        </div>
    )
}

export default Clients
