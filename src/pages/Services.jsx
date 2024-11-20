/* eslint-disable react/no-unescaped-entities */

import Man from "../assets/Images/Png/Man.png";
import { cyberSafe } from "../Components/Common/Helper";
import Slider from "react-slick";
import BlackMan from "../assets/Images/Png/BlackMan.png";
import Trusted from "../assets/Images/Png/Trusted.png";
import Cybersecurity from "../assets/Images/Png/Cybersecurity.png";
import SubHeader from "../Components/Common/SubHeader";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import { Doubletick } from "../Components/Common/Icons";

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "15%",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    Arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <header className="Services_hero_img bg-fixed w-full  bg-cover bg-no-repeat bg-center pb-[50px] md:pb-[70px] lg:pb-[100px]  pt-5">
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
                Our Services
              </p>
            </div>
            <p className="text-[25px] md:text-[35px] lg:text-[48px] ff_jomolhari text-white mt-[20px] lg:mt-[30px] md:w-[606px] text-center lg:leading-[63px]">
              Comprehensive Cybersecurity Solutions
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="py-[50px] lg:py-[100px] overflow-x-hidden">
          <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
            <div className="flex  justify-between -mx-3  flex-col-reverse xl:flex-row">
              <div className="lg:w-9/12 mx-auto xl:w-[36%]  px-3 lg:px-4 mt-5">
                <div className="bg-[#ee0000] py-3 lg:py-5 px-4 lg:px-[30px] rounded-[20px] shadow-lg relative">
                  <div className="bg-white h-[55px] w-[55px] rounded-[100%] opacity-[35%] absolute left-[15px] top-[10px]"></div>
                  <div className="bg-white h-[115px] w-[115px] rounded-[100%] opacity-[40%] absolute bottom-[-40px] right-[-50px] "></div>
                  <p className="text-[18px] lg:text-[22px] text-white ff_outfit">
                    Service Overview
                  </p>
                  <p className="text-[12px] lg:text-sm ff_inter text-white mt-5  ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard Lorem Ipsum is simply dummy text of the printing
                    typesetting industry.
                  </p>
                  <p className="text-[12px] lg:text-sm ff_inter text-white mt-5 lg:mt-[30px] relative ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex items-center mt-4  gap-[10px] lg:gap-[20px]">
                    <svg
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L9 14L22 1"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                    </svg>

                    <p className="text-sm ff_inter text-white ">
                      Lorem Ipsum is simply dummy text of the printing and
                    </p>
                  </div>
                  <div className="flex items-center mt-5  gap-[10px] lg:gap-[20px]">
                    <svg
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L9 14L22 1"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                    </svg>

                    <p className="text-sm ff_inter text-white ">
                      Lorem Ipsum is simply dummy text of the printing and
                    </p>
                  </div>
                </div>
                <div className=" rounded-[20px] overflow-hidden mt-[36px]">
                  <img className="w-full " src={Man} alt="servies man" />
                </div>
              </div>

              <div className="lg:w-10/12  mx-auto  xl:w-7/12 px-3 ">
                <div>
                  <div className="flex items-center gap-[10px] mt-5">
                    <p className=" text-[16px] lg:text-xl ff_inter text-[#EE0000]">
                      Overview
                    </p>
                  </div>

                  <p className="text-[28px] lg:text-[48px] ff_jomolhari mt-5 lg:mt-[30px]">
                    Discover cyber threats with our cutting-edge detection.
                  </p>
                  <p className="text-[12px] lg:text-sm ff_inter mt-5 lg:mt-[30px]">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.{" "}
                  </p>
                  <p className="text-[12px] lg:text-sm ff_inter mt-5 lg:mt-[30px]">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra.{" "}
                  </p>
                </div>
                <div className="flex justify-between -mx-3 mt-[30px] flex-col  ">
                  <div className=" w-12/12 px-2 lg:px-4">
                    <div>
                      <div className="flex items-center justify-between -mx-3 flex-wrap flex-col sm:flex-row ">
                        <div className="w-full sm:w-6/12 px-4 mt-5 xl:mt-0">
                          <div className="border  border-[#EE0000] py-4 px-5 lg:px-[30px] rounded-[20px]">
                            <p className="text-lg lg:text-xl ff_outfit">
                              Monitor Your Network
                            </p>
                            <p className="text-[12px] lg:text-sm leading-[16px] ff_inter text-[#00000099] mt-4 lg:mt-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard Lorem Ipsum is simply dummy
                              text of the printing typesetting industry.
                            </p>
                          </div>
                        </div>
                        <div className="w-full sm:w-6/12 px-4 mt-5 xl:mt-0">
                          <div className="border  border-[#EE0000] py-4 px-5 lg:px-[30px] rounded-[20px]">
                            <p className="text-lg lg:text-xl ff_outfit">
                            Cyber Security
                            </p>
                            <p className="text-[12px] lg:text-sm leading-[16px] ff_inter text-[#00000099] mt-4 lg:mt-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard Lorem Ipsum is simply dummy
                              text of the printing typesetting industry.
                            </p>
                          </div>
                        </div>
                        <div className="w-full sm:w-6/12 px-4 mt-5">
                          <div className="border  border-[#EE0000] py-4 px-5 lg:px-[30px] rounded-[20px]">
                            <p className="text-lg lg:text-xl ff_outfit">
                            Cyber Security
                            </p>
                            <p className="text-[12px] lg:text-sm leading-[16px] ff_inter text-[#00000099] mt-4 lg:mt-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard Lorem Ipsum is simply dummy
                              text of the printing typesetting industry.
                            </p>
                          </div>
                        </div>
                        <div className="w-full sm:w-6/12 px-4 mt-5">
                          <div className="border  border-[#EE0000] py-4 px-5 lg:px-[30px] rounded-[20px]">
                            <p className="text-lg lg:text-xl ff_outfit">
                            Cyber Security
                            </p>
                            <p className="text-[12px] lg:text-sm leading-[16px] ff_inter text-[#00000099] mt-4 lg:mt-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard Lorem Ipsum is simply dummy
                              text of the printing typesetting industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="CybersecurityPartner_Img py-[50px] lg:py-[100px] overflow-x-hidden ">
          <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
            <div className="flex  justify-between -mx-3 flex-col xl:flex-row">
              <div className="w-full mx-auto md:w-8/12 lg:w-6/12 xl:w-6/12 px-3">
                
                  <img className="h-full w-full object-cover rounded-lg" src={Cybersecurity} alt="Cybersecurity" />
                
              </div>
              <div className="w-full xl:w-6/12 md:w-11/12 mx-auto px-3 mt-5 xl:mt-0 ">
                <div className="flex items-center justify-center xl:justify-start  gap-[10px]">
                  
                  <p className=" text-[20px] xl:text-xl ff_inter text-white ">
                  Trusted Cybersecurity Partner
                  </p>
                </div>
                <p className="text-[25px] xl:text-[48px] text-center xl:text-start text-white mt-[25px] ff_inter xl:leading-[62px]">
                  With <span className="text-[#EE0000]">15 Years</span> of Experience And A Team of Dedication Experts
                </p>
                <p className="text-[12px] xl:text-sm text-center ff_inter mt-[25px] xl:text-start text-white leading-[16px]">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. 
                </p>
                <p className="text-[12px] xl:text-sm text-center xl:text-start ff_inter mt-[25px] text-white leading-[16px]">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra  
                </p>
                <div className="flex items-center gap-5 mt-[25px] justify-center">
                  {/* <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 5.5L8.92725 14L21.9272 1"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                  </svg> */}
                  <Doubletick/>

                  <p className="text-[10px] xl:text-[12px] ff_inter text-white">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  </p>

                </div>
                <div className="flex items-center gap-5 mt-[25px] justify-center">
                  {/* <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 5.5L8.92725 14L21.9272 1"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                  </svg> */}
                  <Doubletick/>

                  <p className="text-[10px] xl:text-[12px] ff_inter text-white">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  </p>

                </div>
                <div className="flex items-center gap-5 mt-[25px] justify-center">
                  {/* <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 5.5L8.92725 14L21.9272 1"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                  </svg> */}
                  <Doubletick/>

                  <p className="text-[10px] xl:text-[12px] ff_inter text-white">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[50px] lg:py-[100px] relative overflow-hidden">
          <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
            <div className="flex items-center justify-center gap-[10px]">
              <div className="w-2 h-2 bg-[#EE0000] rounded-[50%]"></div>{" "}
              <p className=" text-[16px] lg:text-xl ff_inter ">Our Services</p>
            </div>
            <h2 className="ff_jomolhari text-2xl leading-[62px] text-[#EE0000] lg:text-5xl font-normal text-center  mt-3 lg:mt-5">
              Protect Your Space with the power of
              <span className="block mt-2">cybersafe</span>
            </h2>
            <div className="flex flex-row flex-wrap px-[-12] md:py-[30px]">
              {cyberSafe.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-11/12 mx-auto sm:w-6/12 md:w-4/12 px-3 mt-4 lg:mt-[30px]"
                  >
                    <div className="border-[0.5px] border-[#0000004D] py-5 px-4 xl:px-[30px] rounded-[20px] cursor-pointer ourServie_hover transition-all hover:border-[#EE0000]">
                      <svg
                        className="mx-auto"
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="69"
                          height="69.01"
                          rx="34.5"
                          fill="white"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="69"
                          height="69.01"
                          rx="34.5"
                          stroke="black"
                        />
                        <path
                          d="M48.01 33.005C47.08 33.005 46.305 33.645 46.08 34.505H42.945C43.235 31.57 42.47 29.06 42.265 28.455L43.19 27.53C43.495 27.71 43.84 27.81 44.2 27.81C44.735 27.81 45.235 27.6 45.615 27.225C45.995 26.845 46.2 26.345 46.2 25.81C46.2 25.275 45.99 24.775 45.615 24.395C45.24 24.015 44.735 23.81 44.2 23.81C43.665 23.81 43.165 24.02 42.785 24.395C42.405 24.775 42.2 25.275 42.2 25.81C42.2 26.17 42.305 26.515 42.48 26.82L41.3 28C38.655 28.06 36.215 26.675 35.505 26.23V23.93C36.365 23.705 37.005 22.93 37.005 22C37.005 20.895 36.11 20 35.005 20C33.9 20 33.005 20.895 33.005 22C33.005 22.93 33.645 23.705 34.505 23.93V26.23C33.8 26.675 31.37 28.06 28.71 28L27.53 26.82C27.71 26.515 27.81 26.17 27.81 25.81C27.81 25.275 27.6 24.775 27.225 24.395C26.47 23.64 25.15 23.64 24.395 24.395C24.015 24.775 23.81 25.275 23.81 25.81C23.81 26.345 24.02 26.845 24.395 27.225C24.775 27.605 25.275 27.81 25.81 27.81C26.17 27.81 26.515 27.705 26.82 27.53L27.745 28.455C27.54 29.06 26.775 31.57 27.065 34.505H23.93C23.705 33.645 22.93 33.005 22 33.005C20.895 33.005 20 33.9 20 35.005C20 36.11 20.895 37.005 22 37.005C22.93 37.005 23.705 36.365 23.93 35.505H27.2C27.36 36.38 27.62 37.27 28.025 38.15C28.345 38.845 28.745 39.49 29.21 40.09L26.815 42.485C26.055 42.055 25.03 42.15 24.395 42.785C24.015 43.16 23.81 43.665 23.81 44.2C23.81 44.735 24.02 45.235 24.395 45.615C24.775 45.995 25.275 46.2 25.81 46.2C26.345 46.2 26.845 45.99 27.225 45.615C27.605 45.24 27.81 44.735 27.81 44.2C27.81 43.84 27.705 43.495 27.53 43.19L29.86 40.86C31.05 42.11 32.605 43.105 34.5 43.845V46.08C33.64 46.305 33 47.08 33 48.01C33 49.115 33.895 50.01 35 50.01C36.105 50.01 37 49.115 37 48.01C37 47.08 36.36 46.305 35.5 46.08V43.845C37.395 43.105 38.955 42.11 40.14 40.86L42.47 43.19C42.29 43.495 42.19 43.84 42.19 44.2C42.19 44.735 42.4 45.235 42.775 45.615C43.15 45.995 43.655 46.2 44.19 46.2C44.725 46.2 45.225 45.99 45.605 45.615C45.985 45.24 46.19 44.735 46.19 44.2C46.19 43.665 45.98 43.165 45.605 42.785C44.97 42.15 43.945 42.055 43.185 42.485L40.79 40.09C41.255 39.49 41.655 38.845 41.975 38.15C42.38 37.27 42.64 36.375 42.8 35.505H46.07C46.295 36.365 47.07 37.005 48 37.005C49.105 37.005 50 36.11 50 35.005C50 33.9 49.105 33.005 48 33.005H48.01ZM22.01 36.005C21.46 36.005 21.01 35.555 21.01 35.005C21.01 34.455 21.46 34.005 22.01 34.005C22.56 34.005 23.01 34.455 23.01 35.005C23.01 35.555 22.56 36.005 22.01 36.005ZM43.495 25.105C43.685 24.915 43.935 24.81 44.2 24.81C44.465 24.81 44.72 24.915 44.905 25.105C45.09 25.295 45.2 25.545 45.2 25.81C45.2 26.075 45.095 26.33 44.905 26.515C44.525 26.895 43.87 26.895 43.49 26.515C43.3 26.325 43.195 26.075 43.195 25.81C43.195 25.545 43.3 25.29 43.49 25.105H43.495ZM34.01 22.005C34.01 21.455 34.46 21.005 35.01 21.005C35.56 21.005 36.01 21.455 36.01 22.005C36.01 22.555 35.56 23.005 35.01 23.005C34.46 23.005 34.01 22.555 34.01 22.005ZM25.11 26.52C24.92 26.33 24.815 26.08 24.815 25.815C24.815 25.55 24.92 25.295 25.11 25.11C25.3 24.925 25.55 24.815 25.815 24.815C26.08 24.815 26.335 24.92 26.52 25.11C26.705 25.3 26.815 25.55 26.815 25.815C26.815 26.08 26.71 26.335 26.52 26.52C26.14 26.9 25.485 26.9 25.105 26.52H25.11ZM26.525 44.905C26.145 45.285 25.49 45.285 25.11 44.905C24.92 44.715 24.815 44.465 24.815 44.2C24.815 43.935 24.92 43.68 25.11 43.495C25.3 43.31 25.55 43.2 25.815 43.2C26.08 43.2 26.335 43.305 26.52 43.495C26.705 43.685 26.815 43.935 26.815 44.2C26.815 44.465 26.71 44.72 26.52 44.905H26.525ZM36.01 48.005C36.01 48.555 35.56 49.005 35.01 49.005C34.46 49.005 34.01 48.555 34.01 48.005C34.01 47.455 34.46 47.005 35.01 47.005C35.56 47.005 36.01 47.455 36.01 48.005ZM44.91 43.49C45.1 43.68 45.205 43.93 45.205 44.195C45.205 44.46 45.1 44.715 44.91 44.9C44.53 45.28 43.875 45.28 43.495 44.9C43.305 44.71 43.2 44.46 43.2 44.195C43.2 43.93 43.305 43.675 43.495 43.49C43.685 43.305 43.935 43.195 44.2 43.195C44.465 43.195 44.72 43.3 44.905 43.49H44.91ZM41.08 37.73C39.99 40.095 37.945 41.855 35.01 42.97C32.075 41.86 30.035 40.1 28.945 37.74C27.295 34.17 28.275 30.19 28.63 29.01C31.555 29.105 34.16 27.64 35.01 27.105C35.865 27.64 38.475 29.105 41.395 29.01C41.75 30.185 42.73 34.155 41.08 37.735V37.73ZM48.01 36.005C47.46 36.005 47.01 35.555 47.01 35.005C47.01 34.455 47.46 34.005 48.01 34.005C48.56 34.005 49.01 34.455 49.01 35.005C49.01 35.555 48.56 36.005 48.01 36.005Z"
                          fill="black"
                        />
                        <path
                          d="M41.8467 28.8026L32.692 38.9759L28.0326 35.2457C27.5623 34.8738 26.8733 34.9394 26.4904 35.4207C26.1076 35.8911 26.1842 36.5803 26.6654 36.9631L32.1342 41.3388C32.3311 41.5028 32.5717 41.5794 32.8123 41.5794C33.1076 41.5794 33.4139 41.4591 33.6217 41.2184L43.4654 30.2794C43.8701 29.8309 43.8373 29.1417 43.3889 28.737C42.9404 28.3322 42.2514 28.376 41.8467 28.8135V28.8026Z"
                          fill="black"
                        />
                      </svg>
                      <h2 className="mt-3 lg:mt-[30px] text-center text-black text-base lg:text-xl font-normal ff_outfit">
                        {item.title}
                      </h2>
                      <p className="mt-3 lg:mt-[30px] ff_inter text-[10px] lg:text-sm font-normal text-[#00000099]">
                        {item.discription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="CybersecurityPartner_Img py-[50px] lg:py-[100px] overflow-x-hidden ">
          <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
            <div className="flex  justify-between -mx-3 flex-col xl:flex-row">
              <div className="w-full mx-auto md:w-8/12 lg:w-6/12 xl:w-[41.2%] px-3">
                <div>
                  <img className="xl:h-full w-full" src={Trusted} alt="Trusted" />
                </div>
              </div>
              <div className="w-full xl:w-[59.8%] md:w-8/12 mx-auto px-3 mt-5 xl:mt-0">
                <div className="flex items-center justify-center xl:justify-start  gap-[10px]">
                  <div className="w-2 h-2 bg-[#EE0000] rounded-[50%]"></div>{" "}
                  <p className=" text-[16px] xl:text-xl ff_inter text-[#ee0000]">
                    Our Services
                  </p>
                </div>
                <p className="text-[25px] xl:text-[48px] text-center xl:text-start text-white mt-[25px] ff_jomolhari xl:leading-[62px]">
                  With 15 Years of Experience And A Team of Dedication Experts
                </p>
                <p className="text-[12px] xl:text-sm text-center ff_inter mt-[25px] xl:text-start text-white leading-[16px]">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. 
                </p>
                <p className="text-[12px] xl:text-sm text-center xl:text-start ff_inter mt-[25px] text-white leading-[16px]">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra  
                </p>
                <div className="flex items-center gap-5 mt-[25px]">
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 5.5L8.92725 14L21.9272 1"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <p className="text-[10px] xl:text-[12px] ff_inter text-white">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  </p>

                </div>
                <div className="flex items-center gap-5 mt-[25px]">
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 5.5L8.92725 14L21.9272 1"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <p className="text-[10px] xl:text-[12px] ff_inter text-white">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  </p>

                </div>
                <div className="flex items-center gap-5 mt-[25px]">
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.927246 5.5L8.92725 14L21.9272 1"
                      stroke="white"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <p className="text-[10px] xl:text-[12px] ff_inter text-white">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    <Footer/>

    </>
  );
}
