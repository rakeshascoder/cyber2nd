import React from 'react'
import { TickIcon } from '../Components/Common/Icons';
import Dots from "../assets/Images/Png/Dots.png"
import CyberMan from "../assets/Images/Png/CyberMan.png"

export default function AboutUs() {
  return (
    <>
     <div  className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
 {/* <Header title={"About Us"} about={"Your Trusted Partner"} span="in Cybersecurity" /> */}
      <div className="relative overflow-hidden">
       
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center px-[-12px] py-14 lg:py-28 ">
            <div className="w-full md:w-7/12 xl:w-6/12 px-3">
              <h6 className="font-medium text-xs sm:text-base font_inter text-black mt-7">
                Why Choose Us
              </h6>
              <h1 className="font_outfit font-medium text-lg lg:text-5xl mt-3 lg:mt-4 xl:mt-6 text-black  lg:leading-[60px]">
                Our Partner in Proactive Cyber Defense
              </h1>
              <p className="font_outfit text-sm lg:text-xl font-light leading-[25px] mt-3 lg:mt-4 xl:mt-[50px] text-black opacity-50 pb-4 lg:pb-6 xl:pb-[30px] border-b-[1px] border-black border-dashed">
                We have over 20+ years of experience in all stages of software
                design, development, maintenance, and support.
              </p>
              <p className="font-normal font_outfit text-sm lg:text-xl text-black mt-3 lg:mt-4 xl:mt-[50px]">
                Our teams know how to harness the power of data, artificial
                intelligence, modernising core, optimising and automating
                operations to achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[50px]">
                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black">
                    IT Professional services
                  </p>
                </div>
                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12 mt-3 md:mt-0">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black">
                    Application Development services
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[50px]">
                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black">
                    Managed IT services
                  </p>
                </div>
                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12 mt-3 md:mt-0">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black ">
                    Maintenance And Support
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 lg:mt-5 xl:mt-[50px]">
                <div className=" me-6 sm:me-24 lg:me-[152px]">
                  <button className="font_outfit text-sm  sm:text-lg text-white font-normal bg-[#06579C] py-3 px-4 sm:py-[15px] sm:px-[30px] rounded-[10px] hover:bg-[#06569ccf] transition-all">
                    More About Us’
                  </button>
                </div>
                <div>
                  <p className="font_outfit text-xs sm:text-sm font-normal text-black opacity-30">
                    Co founder
                  </p>
                  <p className="font_pinyon text-base sm:text-[30px] font-normal text-black">
                    John Deo
                  </p>
                </div>
              </div>
            </div>
            <div className="w-8/12 sm:w-7/12 md:w-5/12 lg:w-5/12 px-3">
              <div className="relative">
                <img
                  className="hidden lg:block absolute top-[-56px] left-[-80px] -z-10"
                  src={Dots}
                  alt="image for design"
                />
                <img
                  className="hidden lg:block absolute  bottom-[-56px] right-[-80px] -z-10"
                  src={Dots}
                  alt="image for design"
                />
                {/* <img
                  className="hidden lg:block absolute  bottom-[-95px] left-[-183px] -z-10"
                  src={YellowBubble}
                  alt="image for design"
                /> */}
                <img className="w-full" src={CyberMan} alt="image of a man" />
              </div>
            </div>
          </div>
        </div>
      </div>
     
     </div> 
    </>
  )
}
