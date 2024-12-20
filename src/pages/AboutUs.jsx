/* eslint-disable react/no-unescaped-entities */
import {
  AboutRigthIcon,
  LinkDinIcon,
  StarIcon,
  TwitterIcon,
  WebIcon,
} from "../Components/Common/Icons";
import Dots from "../assets/Images/Png/Dots.png";
import CyberMan from "../assets/Images/Png/CyberMan.png";
import Header from "../Components/Common/Header";
import SubHeader from "../Components/Common/SubHeader";
import shadowImg from "../assets/Images/Png/about-partners-shadow.png";
import ProfileImg from "../assets/Images/Png/Profile-img.png";
import AlexaImg from "../assets/Images/Png/Alexa-img.png";
import Footer from "../Components/Common/Footer";
import Happy from "../Components/Happy";
import Clientfeeds from "../Components/Clientfeeds";

export default function AboutUs() {
  return (
    <>
      <div className="bg-about_bg bg-fixed  pt-5  pb-[50px] md:pb-[70px] lg:pb-[100px]">
        <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px] ">
          <div className="shadow-lg rounded-[20px] border  px-4 lg:px-6 bg-white py-4 lg:py-6">
            {" "}
            <SubHeader />
            <Header />
          </div>
          <div className="flex flex-col justify-center items-center mt-14">
            <div className="flex items-center gap-[10px]">
              <div className="w-2 h-2 bg-[#EE0000] rounded-[50%]"></div>{" "}
              <p className=" text-[16px] lg:text-xl ff_inter text-white">
                About us
              </p>
            </div>
            <p className="text-[25px] md:text-[35px] lg:text-[48px] ff_jomolhari text-white mt-[20px] lg:mt-[30px] md:w-[606px] text-center lg:leading-[63px]">
              Your Trusted Partner in Cyber Defense
            </p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center -mx-3 py-14 lg:py-24 ">
            <div className="w-full md:w-7/12 xl:w-6/12 px-3">
              <h6 className="font-medium text-xs sm:text-base ff_inter text-black mt-7">
                Why Choose Us
              </h6>
              <h1 className="ff_outfit font-medium text-lg lg:text-5xl mt-3 lg:mt-4 xl:mt-6 text-black  lg:leading-[60px]">
                Our Partner in Proactive Cyber Defense
              </h1>
              <p className="ff_outfit text-sm lg:text-xl font-light leading-[25px] mt-3 lg:mt-4 xl:mt-[50px] text-black opacity-50 pb-4 lg:pb-6 xl:pb-[30px] border-b-[1px] border-black border-dashed">
                We have over 20+ years of experience in all stages of software
                design, development, maintenance, and support.
              </p>
              <p className="font-normal ff_outfit text-sm lg:text-xl text-black mt-3 lg:mt-4 xl:mt-[50px]">
                Our teams know how to harness the power of data, artificial
                intelligence, modernising core, optimising and automating
                operations to achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[50px]">
                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12">
                  <span>
                    {" "}
                    <AboutRigthIcon />
                  </span>
                  <p className="ff_outfit font-normal text-sm lg:text-xl text-black">
                    IT Professional services
                  </p>
                </div>
                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12 mt-3 md:mt-0">
                  <span>
                    {" "}
                    <AboutRigthIcon />
                  </span>
                  <p className="ff_outfit font-normal text-sm lg:text-xl text-black">
                    Application Development services
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[50px]">
                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12">
                  <span>
                    {" "}
                    <AboutRigthIcon />
                  </span>
                  <p className="ff_outfit font-normal text-sm lg:text-xl text-black">
                    Managed IT services
                  </p>
                </div>
                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12 mt-3 md:mt-0">
                  <span>
                    {" "}
                    <AboutRigthIcon />
                  </span>
                  <p className="ff_outfit font-normal text-sm lg:text-xl text-black ">
                    Maintenance And Support
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 lg:mt-5 xl:mt-[50px]">
                <div className=" me-6 sm:me-24 lg:me-[152px]">
                  <button className="ff_outfit text-sm  sm:text-lg text-white font-normal bg-[#EE0000] py-3 px-4 sm:py-[15px] sm:px-[30px] rounded-[10px] hover:bg-[#06569ccf] transition-all">
                    More About Us’
                  </button>
                </div>
                <div>
                  <p className="ff_outfit text-xs sm:text-sm font-normal text-black opacity-30">
                    Co founder
                  </p>
                  <p className="ff_pinyon text-base sm:text-[30px] font-normal text-black mt-1">
                    John Deo
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-7/12 md:w-5/12 lg:w-5/12 px-3">
              <div className="relative lg:ps-5">
                <img
                  className="hidden lg:block absolute -bottom-20 left-[-150px] -z-10"
                  src={shadowImg}
                  alt="image for design"
                />
                <img
                  className="hidden lg:block absolute top-[-56px] left-[-50px] -z-10"
                  src={Dots}
                  alt="image for design"
                />
                <img
                  className="hidden lg:block absolute  bottom-[-56px] right-[-80px] -z-10"
                  src={Dots}
                  alt="image for design"
                />

                <img className="w-full" src={CyberMan} alt="image of a man" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our TEAM */}
      <div>
        <div className=" lg:py-[100px] md:py-[50px] py-[40px] bg-our_team_Shadow bg-cover bg-no-repeat bg-center">
          <div className="max-w-[1360px] px-3 mx-auto">
            <div className="flex justify-center items-center">
              <p className=" ff_inter font-medium text-base lg:text-[20px] leading-[26px] text-[#000]">
                Together
              </p>
            </div>
            <h2 className="ff_jomolhari font-medium md:text-[35px] text-[25px] lg:text-[48px] lg:leading-[59px] text-center text-black lg:mt-[20px]">
              Our <span className="text-[#EE0000]"> Team member’s</span>
            </h2>
            <p className="ff_roboto font-normal text-[14px] leading-[14px] text-[#000] lg:w-[56%] md:w-[70%] w-[100%] text-center m-auto lg:mt-[30px] mt-2 ">
              Meet the passionate individuals behind our mission.
            </p>
            <div className="flex flex-wrap sm:-mx-6 ">
             {[1,1,1,1,11,1,1,1].map((items,index)=>{
              return(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 sm:px-6 mt-10 lg:mt-[50px]">
                <div className="flex flex-col items-center">
                  <img src={AlexaImg} alt="team-img" />
                  <h3 className="ff_outfit font-semibold text-lg lg:text-xl text-black text-center mt-3 lg:mt-7 mb-2 lg:mb-4">
                    Alex Johnson
                  </h3>
                  <p className="ff_outfit font-normal text-base text-black/70 text-center">
                    Alex shares insights on mental health through engaging
                    articles and personal stories.
                  </p>
                  <span className="flex gap-3.5 mt-3 lg:mt-7">
                    <LinkDinIcon />
                    <TwitterIcon />
                    <WebIcon />
                  </span>
                </div>
              </div>
              )
             })}
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
   <div className="overflow-x-hidden">
   <Clientfeeds/>
   </div>
      <Happy/>
    <Footer/>
      
    </>
  );
}
