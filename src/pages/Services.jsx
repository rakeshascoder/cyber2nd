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
      <header className="Services_hero_img w-full  bg-cover bg-no-repeat bg-center pb-[50px] md:pb-[70px] lg:pb-[100px]  pt-5">
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
              <div className="lg:w-9/12 mx-auto xl:w-[35%]  px-3 lg:px-4 mt-5">
                <div className="bg-[#ee0000] py-3 lg:py-5 px-4 lg:px-[30px] rounded-[20px] shadow-lg">
                  <p className="text-[18px] lg:text-[22px] text-white ff_outfit">
                    Service Overview
                  </p>
                  <p className="text-[12px] lg:text-sm ff_inter text-white mt-5 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard Lorem Ipsum is simply dummy text of the printing
                    typesetting industry.
                  </p>
                  <p className="text-[12px] lg:text-sm ff_inter text-white mt-5 lg:mt-[30px]">
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

              <div className="lg:w-10/12  mx-auto  xl:w-8/12 px-3 ">
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
                        <div className="w-full sm:w-6/12 px-4 mt-5">
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
                        <div className="w-full sm:w-6/12 px-4 mt-5">
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
              <div className="w-full mx-auto md:w-8/12 lg:w-6/12 xl:w-[41.2%] px-3">
                <div>
                  <img className="xl:h-[585px] w-full" src={Cybersecurity} alt="Cybersecurity" />
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

        <section className="py-[50px] lg:py-[100px] relative overflow-hidden">
          <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
            <div className="flex items-center justify-center gap-[10px]">
              <div className="w-2 h-2 bg-[#EE0000] rounded-[50%]"></div>{" "}
              <p className=" text-[16px] lg:text-xl ff_inter ">Our Services</p>
            </div>
            <h2 className="ff_outfit text-2xl text-[#EE0000] lg:text-5xl font-medium text-center  mt-3 lg:mt-5">
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
                    <div className="border-[0.5px] border-[#0000004D] py-5 px-4 xl:px-[30px] rounded-[20px] cursor-pointer ourServie_hover transition-all">
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

        <section
          className=" overflow-x-hidden mx-auto px-3  max-w-[1360px] lg:py-[80px]  sm:py-[40px] py-[20px]"
          id="testimonials"
        >
          <div className=" container mx-auto px-3 py-3 lg:py-[0px]  max-w-[1360px]">
            <div className="flex items-center justify-center ">
              <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
              <p className="text-xl font-normal ms-2 ff_inter">
                Clients Testimonials
              </p>
            </div>
            <p className=" text-[30px] lg:text-[48px] font-normal text-[#EE0000] max-w-[954px] text-center mx-auto mt-[30px] ff_jomolhari">
              Our Customers Thought About Us
            </p>

            <Slider {...settings}>
              <div className="w-full sm:w-[80%] py-5 md:w-[70%] lg:w-[50%] px-3">
                <div className="p-5 border h-100  border-[#00000033]  rounded-es-[20px] rounded-se-[20px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5 ">
                      <img src={BlackMan} alt="BlackMan" />
                      <div>
                        <p className="ff_inter text-[10px] sm:text-[12px] font-normal">John doe</p>
                        <p className="ff_inter text-[10px] lg:text-sm font-normal">
                          STSM (CEO)
                        </p>
                      </div>
                    </div>
                    <svg className="w-[60px] sm:w-[91px]"
                     
                      height="18"
                      viewBox="0 0 91 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8068 8.07581L13.6428 10.806L14.6068 14.8891C14.66 15.1107 14.6463 15.3432 14.5674 15.5571C14.4886 15.7709 14.3481 15.9566 14.1638 16.0907C13.9794 16.2248 13.7595 16.3012 13.5317 16.3104C13.304 16.3195 13.0786 16.2609 12.8841 16.1421L9.33333 13.9567L5.78044 16.1421C5.58597 16.2603 5.36089 16.3183 5.13352 16.3088C4.90616 16.2993 4.68668 16.2228 4.50272 16.0888C4.31877 15.9548 4.17856 15.7694 4.09976 15.556C4.02096 15.3425 4.00709 15.1104 4.05989 14.8891L5.02739 10.806L1.86333 8.07581C1.69127 7.92711 1.56684 7.73101 1.50557 7.51201C1.4443 7.29301 1.4489 7.06081 1.51881 6.84441C1.58872 6.62801 1.72083 6.437 1.89865 6.29523C2.07646 6.15347 2.29211 6.06723 2.51864 6.04729L6.66708 5.71261L8.26739 1.83979C8.35401 1.62873 8.50144 1.44819 8.69093 1.32113C8.88043 1.19406 9.10342 1.12622 9.33157 1.12622C9.55972 1.12622 9.78272 1.19406 9.97221 1.32113C10.1617 1.44819 10.3091 1.62873 10.3958 1.83979L11.9954 5.71261L16.1438 6.04729C16.3708 6.06649 16.5871 6.15225 16.7655 6.29381C16.944 6.43538 17.0767 6.62647 17.147 6.84313C17.2174 7.05979 17.2222 7.2924 17.161 7.5118C17.0997 7.7312 16.975 7.92764 16.8026 8.07651L16.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M34.8068 8.07581L31.6428 10.806L32.6068 14.8891C32.66 15.1107 32.6463 15.3432 32.5674 15.5571C32.4886 15.7709 32.3481 15.9566 32.1638 16.0907C31.9794 16.2248 31.7595 16.3012 31.5317 16.3104C31.304 16.3195 31.0786 16.2609 30.8841 16.1421L27.3333 13.9567L23.7804 16.1421C23.586 16.2603 23.3609 16.3183 23.1335 16.3088C22.9062 16.2993 22.6867 16.2228 22.5027 16.0888C22.3188 15.9548 22.1786 15.7694 22.0998 15.556C22.021 15.3425 22.0071 15.1104 22.0599 14.8891L23.0274 10.806L19.8633 8.07581C19.6913 7.92711 19.5668 7.73101 19.5056 7.51201C19.4443 7.29301 19.4489 7.06081 19.5188 6.84441C19.5887 6.62801 19.7208 6.437 19.8986 6.29523C20.0765 6.15347 20.2921 6.06723 20.5186 6.04729L24.6671 5.71261L26.2674 1.83979C26.354 1.62873 26.5014 1.44819 26.6909 1.32113C26.8804 1.19406 27.1034 1.12622 27.3316 1.12622C27.5597 1.12622 27.7827 1.19406 27.9722 1.32113C28.1617 1.44819 28.3091 1.62873 28.3958 1.83979L29.9954 5.71261L34.1438 6.04729C34.3708 6.06649 34.5871 6.15225 34.7655 6.29381C34.944 6.43538 35.0767 6.62647 35.147 6.84313C35.2174 7.05979 35.2222 7.2924 35.161 7.5118C35.0997 7.7312 34.975 7.92764 34.8026 8.07651L34.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M52.8068 8.07581L49.6428 10.806L50.6068 14.8891C50.66 15.1107 50.6463 15.3432 50.5674 15.5571C50.4886 15.7709 50.3481 15.9566 50.1638 16.0907C49.9794 16.2248 49.7595 16.3012 49.5317 16.3104C49.304 16.3195 49.0786 16.2609 48.8841 16.1421L45.3333 13.9567L41.7804 16.1421C41.586 16.2603 41.3609 16.3183 41.1335 16.3088C40.9062 16.2993 40.6867 16.2228 40.5027 16.0888C40.3188 15.9548 40.1786 15.7694 40.0998 15.556C40.021 15.3425 40.0071 15.1104 40.0599 14.8891L41.0274 10.806L37.8633 8.07581C37.6913 7.92711 37.5668 7.73101 37.5056 7.51201C37.4443 7.29301 37.4489 7.06081 37.5188 6.84441C37.5887 6.62801 37.7208 6.437 37.8986 6.29523C38.0765 6.15347 38.2921 6.06723 38.5186 6.04729L42.6671 5.71261L44.2674 1.83979C44.354 1.62873 44.5014 1.44819 44.6909 1.32113C44.8804 1.19406 45.1034 1.12622 45.3316 1.12622C45.5597 1.12622 45.7827 1.19406 45.9722 1.32113C46.1617 1.44819 46.3091 1.62873 46.3958 1.83979L47.9954 5.71261L52.1438 6.04729C52.3708 6.06649 52.5871 6.15225 52.7655 6.29381C52.944 6.43538 53.0767 6.62647 53.147 6.84313C53.2174 7.05979 53.2222 7.2924 53.161 7.5118C53.0997 7.7312 52.975 7.92764 52.8026 8.07651L52.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M70.8068 8.07581L67.6428 10.806L68.6068 14.8891C68.66 15.1107 68.6463 15.3432 68.5674 15.5571C68.4886 15.7709 68.3481 15.9566 68.1638 16.0907C67.9794 16.2248 67.7595 16.3012 67.5317 16.3104C67.304 16.3195 67.0786 16.2609 66.8841 16.1421L63.3333 13.9567L59.7804 16.1421C59.586 16.2603 59.3609 16.3183 59.1335 16.3088C58.9062 16.2993 58.6867 16.2228 58.5027 16.0888C58.3188 15.9548 58.1786 15.7694 58.0998 15.556C58.021 15.3425 58.0071 15.1104 58.0599 14.8891L59.0274 10.806L55.8633 8.07581C55.6913 7.92711 55.5668 7.73101 55.5056 7.51201C55.4443 7.29301 55.4489 7.06081 55.5188 6.84441C55.5887 6.62801 55.7208 6.437 55.8986 6.29523C56.0765 6.15347 56.2921 6.06723 56.5186 6.04729L60.6671 5.71261L62.2674 1.83979C62.354 1.62873 62.5014 1.44819 62.6909 1.32113C62.8804 1.19406 63.1034 1.12622 63.3316 1.12622C63.5597 1.12622 63.7827 1.19406 63.9722 1.32113C64.1617 1.44819 64.3091 1.62873 64.3958 1.83979L65.9954 5.71261L70.1438 6.04729C70.3708 6.06649 70.5871 6.15225 70.7655 6.29381C70.944 6.43538 71.0767 6.62647 71.147 6.84313C71.2174 7.05979 71.2222 7.2924 71.161 7.5118C71.0997 7.7312 70.975 7.92764 70.8026 8.07651L70.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M88.8068 8.07581L85.6428 10.806L86.6068 14.8891C86.66 15.1107 86.6463 15.3432 86.5674 15.5571C86.4886 15.7709 86.3481 15.9566 86.1638 16.0907C85.9794 16.2248 85.7595 16.3012 85.5317 16.3104C85.304 16.3195 85.0786 16.2609 84.8841 16.1421L81.3333 13.9567L77.7804 16.1421C77.586 16.2603 77.3609 16.3183 77.1335 16.3088C76.9062 16.2993 76.6867 16.2228 76.5027 16.0888C76.3188 15.9548 76.1786 15.7694 76.0998 15.556C76.021 15.3425 76.0071 15.1104 76.0599 14.8891L77.0274 10.806L73.8633 8.07581C73.6913 7.92711 73.5668 7.73101 73.5056 7.51201C73.4443 7.29301 73.4489 7.06081 73.5188 6.84441C73.5887 6.62801 73.7208 6.437 73.8986 6.29523C74.0765 6.15347 74.2921 6.06723 74.5186 6.04729L78.6671 5.71261L80.2674 1.83979C80.354 1.62873 80.5014 1.44819 80.6909 1.32113C80.8804 1.19406 81.1034 1.12622 81.3316 1.12622C81.5597 1.12622 81.7827 1.19406 81.9722 1.32113C82.1617 1.44819 82.3091 1.62873 82.3958 1.83979L83.9954 5.71261L88.1438 6.04729C88.3708 6.06649 88.5871 6.15225 88.7655 6.29381C88.944 6.43538 89.0767 6.62647 89.147 6.84313C89.2174 7.05979 89.2222 7.2924 89.161 7.5118C89.0997 7.7312 88.975 7.92764 88.8026 8.07651L88.8068 8.07581Z"
                        fill="#FF9800"
                      />
                    </svg>
                  </div>
                  <p className="ff_inter mt-[15px] text-sm">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.{" "}
                  </p>
                  <button className="text-[#C04000] text-sm font-medium mt-[15px]">
                    Read More
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-[80%] py-5 md:w-[70%] lg:w-[50%] px-3">
                <div className="p-5 border h-100  border-[#00000033]  rounded-es-[20px] rounded-se-[20px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img src={BlackMan} alt="BlackMan" />
                      <div>
                        <p className="ff_inter text-[12px] font-normal">John doe</p>
                        <p className="ff_inter text-sm font-normal">
                          STSM (CEO)
                        </p>
                      </div>
                    </div>
                    <svg
                      width="91"
                      height="18"
                      viewBox="0 0 91 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8068 8.07581L13.6428 10.806L14.6068 14.8891C14.66 15.1107 14.6463 15.3432 14.5674 15.5571C14.4886 15.7709 14.3481 15.9566 14.1638 16.0907C13.9794 16.2248 13.7595 16.3012 13.5317 16.3104C13.304 16.3195 13.0786 16.2609 12.8841 16.1421L9.33333 13.9567L5.78044 16.1421C5.58597 16.2603 5.36089 16.3183 5.13352 16.3088C4.90616 16.2993 4.68668 16.2228 4.50272 16.0888C4.31877 15.9548 4.17856 15.7694 4.09976 15.556C4.02096 15.3425 4.00709 15.1104 4.05989 14.8891L5.02739 10.806L1.86333 8.07581C1.69127 7.92711 1.56684 7.73101 1.50557 7.51201C1.4443 7.29301 1.4489 7.06081 1.51881 6.84441C1.58872 6.62801 1.72083 6.437 1.89865 6.29523C2.07646 6.15347 2.29211 6.06723 2.51864 6.04729L6.66708 5.71261L8.26739 1.83979C8.35401 1.62873 8.50144 1.44819 8.69093 1.32113C8.88043 1.19406 9.10342 1.12622 9.33157 1.12622C9.55972 1.12622 9.78272 1.19406 9.97221 1.32113C10.1617 1.44819 10.3091 1.62873 10.3958 1.83979L11.9954 5.71261L16.1438 6.04729C16.3708 6.06649 16.5871 6.15225 16.7655 6.29381C16.944 6.43538 17.0767 6.62647 17.147 6.84313C17.2174 7.05979 17.2222 7.2924 17.161 7.5118C17.0997 7.7312 16.975 7.92764 16.8026 8.07651L16.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M34.8068 8.07581L31.6428 10.806L32.6068 14.8891C32.66 15.1107 32.6463 15.3432 32.5674 15.5571C32.4886 15.7709 32.3481 15.9566 32.1638 16.0907C31.9794 16.2248 31.7595 16.3012 31.5317 16.3104C31.304 16.3195 31.0786 16.2609 30.8841 16.1421L27.3333 13.9567L23.7804 16.1421C23.586 16.2603 23.3609 16.3183 23.1335 16.3088C22.9062 16.2993 22.6867 16.2228 22.5027 16.0888C22.3188 15.9548 22.1786 15.7694 22.0998 15.556C22.021 15.3425 22.0071 15.1104 22.0599 14.8891L23.0274 10.806L19.8633 8.07581C19.6913 7.92711 19.5668 7.73101 19.5056 7.51201C19.4443 7.29301 19.4489 7.06081 19.5188 6.84441C19.5887 6.62801 19.7208 6.437 19.8986 6.29523C20.0765 6.15347 20.2921 6.06723 20.5186 6.04729L24.6671 5.71261L26.2674 1.83979C26.354 1.62873 26.5014 1.44819 26.6909 1.32113C26.8804 1.19406 27.1034 1.12622 27.3316 1.12622C27.5597 1.12622 27.7827 1.19406 27.9722 1.32113C28.1617 1.44819 28.3091 1.62873 28.3958 1.83979L29.9954 5.71261L34.1438 6.04729C34.3708 6.06649 34.5871 6.15225 34.7655 6.29381C34.944 6.43538 35.0767 6.62647 35.147 6.84313C35.2174 7.05979 35.2222 7.2924 35.161 7.5118C35.0997 7.7312 34.975 7.92764 34.8026 8.07651L34.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M52.8068 8.07581L49.6428 10.806L50.6068 14.8891C50.66 15.1107 50.6463 15.3432 50.5674 15.5571C50.4886 15.7709 50.3481 15.9566 50.1638 16.0907C49.9794 16.2248 49.7595 16.3012 49.5317 16.3104C49.304 16.3195 49.0786 16.2609 48.8841 16.1421L45.3333 13.9567L41.7804 16.1421C41.586 16.2603 41.3609 16.3183 41.1335 16.3088C40.9062 16.2993 40.6867 16.2228 40.5027 16.0888C40.3188 15.9548 40.1786 15.7694 40.0998 15.556C40.021 15.3425 40.0071 15.1104 40.0599 14.8891L41.0274 10.806L37.8633 8.07581C37.6913 7.92711 37.5668 7.73101 37.5056 7.51201C37.4443 7.29301 37.4489 7.06081 37.5188 6.84441C37.5887 6.62801 37.7208 6.437 37.8986 6.29523C38.0765 6.15347 38.2921 6.06723 38.5186 6.04729L42.6671 5.71261L44.2674 1.83979C44.354 1.62873 44.5014 1.44819 44.6909 1.32113C44.8804 1.19406 45.1034 1.12622 45.3316 1.12622C45.5597 1.12622 45.7827 1.19406 45.9722 1.32113C46.1617 1.44819 46.3091 1.62873 46.3958 1.83979L47.9954 5.71261L52.1438 6.04729C52.3708 6.06649 52.5871 6.15225 52.7655 6.29381C52.944 6.43538 53.0767 6.62647 53.147 6.84313C53.2174 7.05979 53.2222 7.2924 53.161 7.5118C53.0997 7.7312 52.975 7.92764 52.8026 8.07651L52.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M70.8068 8.07581L67.6428 10.806L68.6068 14.8891C68.66 15.1107 68.6463 15.3432 68.5674 15.5571C68.4886 15.7709 68.3481 15.9566 68.1638 16.0907C67.9794 16.2248 67.7595 16.3012 67.5317 16.3104C67.304 16.3195 67.0786 16.2609 66.8841 16.1421L63.3333 13.9567L59.7804 16.1421C59.586 16.2603 59.3609 16.3183 59.1335 16.3088C58.9062 16.2993 58.6867 16.2228 58.5027 16.0888C58.3188 15.9548 58.1786 15.7694 58.0998 15.556C58.021 15.3425 58.0071 15.1104 58.0599 14.8891L59.0274 10.806L55.8633 8.07581C55.6913 7.92711 55.5668 7.73101 55.5056 7.51201C55.4443 7.29301 55.4489 7.06081 55.5188 6.84441C55.5887 6.62801 55.7208 6.437 55.8986 6.29523C56.0765 6.15347 56.2921 6.06723 56.5186 6.04729L60.6671 5.71261L62.2674 1.83979C62.354 1.62873 62.5014 1.44819 62.6909 1.32113C62.8804 1.19406 63.1034 1.12622 63.3316 1.12622C63.5597 1.12622 63.7827 1.19406 63.9722 1.32113C64.1617 1.44819 64.3091 1.62873 64.3958 1.83979L65.9954 5.71261L70.1438 6.04729C70.3708 6.06649 70.5871 6.15225 70.7655 6.29381C70.944 6.43538 71.0767 6.62647 71.147 6.84313C71.2174 7.05979 71.2222 7.2924 71.161 7.5118C71.0997 7.7312 70.975 7.92764 70.8026 8.07651L70.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M88.8068 8.07581L85.6428 10.806L86.6068 14.8891C86.66 15.1107 86.6463 15.3432 86.5674 15.5571C86.4886 15.7709 86.3481 15.9566 86.1638 16.0907C85.9794 16.2248 85.7595 16.3012 85.5317 16.3104C85.304 16.3195 85.0786 16.2609 84.8841 16.1421L81.3333 13.9567L77.7804 16.1421C77.586 16.2603 77.3609 16.3183 77.1335 16.3088C76.9062 16.2993 76.6867 16.2228 76.5027 16.0888C76.3188 15.9548 76.1786 15.7694 76.0998 15.556C76.021 15.3425 76.0071 15.1104 76.0599 14.8891L77.0274 10.806L73.8633 8.07581C73.6913 7.92711 73.5668 7.73101 73.5056 7.51201C73.4443 7.29301 73.4489 7.06081 73.5188 6.84441C73.5887 6.62801 73.7208 6.437 73.8986 6.29523C74.0765 6.15347 74.2921 6.06723 74.5186 6.04729L78.6671 5.71261L80.2674 1.83979C80.354 1.62873 80.5014 1.44819 80.6909 1.32113C80.8804 1.19406 81.1034 1.12622 81.3316 1.12622C81.5597 1.12622 81.7827 1.19406 81.9722 1.32113C82.1617 1.44819 82.3091 1.62873 82.3958 1.83979L83.9954 5.71261L88.1438 6.04729C88.3708 6.06649 88.5871 6.15225 88.7655 6.29381C88.944 6.43538 89.0767 6.62647 89.147 6.84313C89.2174 7.05979 89.2222 7.2924 89.161 7.5118C89.0997 7.7312 88.975 7.92764 88.8026 8.07651L88.8068 8.07581Z"
                        fill="#FF9800"
                      />
                    </svg>
                  </div>
                  <p className="ff_inter mt-[15px] text-sm">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.{" "}
                  </p>
                  <button className="text-[#C04000] text-sm font-medium mt-[15px]">
                    Read More
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-[80%] py-5 md:w-[70%] lg:w-[50%] px-3">
                <div className="p-5 border h-100  border-[#00000033]  rounded-es-[20px] rounded-se-[20px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img src={BlackMan} alt="BlackMan" />
                      <div>
                        <p className="ff_inter text-[12px] font-normal">John doe</p>
                        <p className="ff_inter text-sm font-normal">
                          STSM (CEO)
                        </p>
                      </div>
                    </div>
                    <svg
                      width="91"
                      height="18"
                      viewBox="0 0 91 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8068 8.07581L13.6428 10.806L14.6068 14.8891C14.66 15.1107 14.6463 15.3432 14.5674 15.5571C14.4886 15.7709 14.3481 15.9566 14.1638 16.0907C13.9794 16.2248 13.7595 16.3012 13.5317 16.3104C13.304 16.3195 13.0786 16.2609 12.8841 16.1421L9.33333 13.9567L5.78044 16.1421C5.58597 16.2603 5.36089 16.3183 5.13352 16.3088C4.90616 16.2993 4.68668 16.2228 4.50272 16.0888C4.31877 15.9548 4.17856 15.7694 4.09976 15.556C4.02096 15.3425 4.00709 15.1104 4.05989 14.8891L5.02739 10.806L1.86333 8.07581C1.69127 7.92711 1.56684 7.73101 1.50557 7.51201C1.4443 7.29301 1.4489 7.06081 1.51881 6.84441C1.58872 6.62801 1.72083 6.437 1.89865 6.29523C2.07646 6.15347 2.29211 6.06723 2.51864 6.04729L6.66708 5.71261L8.26739 1.83979C8.35401 1.62873 8.50144 1.44819 8.69093 1.32113C8.88043 1.19406 9.10342 1.12622 9.33157 1.12622C9.55972 1.12622 9.78272 1.19406 9.97221 1.32113C10.1617 1.44819 10.3091 1.62873 10.3958 1.83979L11.9954 5.71261L16.1438 6.04729C16.3708 6.06649 16.5871 6.15225 16.7655 6.29381C16.944 6.43538 17.0767 6.62647 17.147 6.84313C17.2174 7.05979 17.2222 7.2924 17.161 7.5118C17.0997 7.7312 16.975 7.92764 16.8026 8.07651L16.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M34.8068 8.07581L31.6428 10.806L32.6068 14.8891C32.66 15.1107 32.6463 15.3432 32.5674 15.5571C32.4886 15.7709 32.3481 15.9566 32.1638 16.0907C31.9794 16.2248 31.7595 16.3012 31.5317 16.3104C31.304 16.3195 31.0786 16.2609 30.8841 16.1421L27.3333 13.9567L23.7804 16.1421C23.586 16.2603 23.3609 16.3183 23.1335 16.3088C22.9062 16.2993 22.6867 16.2228 22.5027 16.0888C22.3188 15.9548 22.1786 15.7694 22.0998 15.556C22.021 15.3425 22.0071 15.1104 22.0599 14.8891L23.0274 10.806L19.8633 8.07581C19.6913 7.92711 19.5668 7.73101 19.5056 7.51201C19.4443 7.29301 19.4489 7.06081 19.5188 6.84441C19.5887 6.62801 19.7208 6.437 19.8986 6.29523C20.0765 6.15347 20.2921 6.06723 20.5186 6.04729L24.6671 5.71261L26.2674 1.83979C26.354 1.62873 26.5014 1.44819 26.6909 1.32113C26.8804 1.19406 27.1034 1.12622 27.3316 1.12622C27.5597 1.12622 27.7827 1.19406 27.9722 1.32113C28.1617 1.44819 28.3091 1.62873 28.3958 1.83979L29.9954 5.71261L34.1438 6.04729C34.3708 6.06649 34.5871 6.15225 34.7655 6.29381C34.944 6.43538 35.0767 6.62647 35.147 6.84313C35.2174 7.05979 35.2222 7.2924 35.161 7.5118C35.0997 7.7312 34.975 7.92764 34.8026 8.07651L34.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M52.8068 8.07581L49.6428 10.806L50.6068 14.8891C50.66 15.1107 50.6463 15.3432 50.5674 15.5571C50.4886 15.7709 50.3481 15.9566 50.1638 16.0907C49.9794 16.2248 49.7595 16.3012 49.5317 16.3104C49.304 16.3195 49.0786 16.2609 48.8841 16.1421L45.3333 13.9567L41.7804 16.1421C41.586 16.2603 41.3609 16.3183 41.1335 16.3088C40.9062 16.2993 40.6867 16.2228 40.5027 16.0888C40.3188 15.9548 40.1786 15.7694 40.0998 15.556C40.021 15.3425 40.0071 15.1104 40.0599 14.8891L41.0274 10.806L37.8633 8.07581C37.6913 7.92711 37.5668 7.73101 37.5056 7.51201C37.4443 7.29301 37.4489 7.06081 37.5188 6.84441C37.5887 6.62801 37.7208 6.437 37.8986 6.29523C38.0765 6.15347 38.2921 6.06723 38.5186 6.04729L42.6671 5.71261L44.2674 1.83979C44.354 1.62873 44.5014 1.44819 44.6909 1.32113C44.8804 1.19406 45.1034 1.12622 45.3316 1.12622C45.5597 1.12622 45.7827 1.19406 45.9722 1.32113C46.1617 1.44819 46.3091 1.62873 46.3958 1.83979L47.9954 5.71261L52.1438 6.04729C52.3708 6.06649 52.5871 6.15225 52.7655 6.29381C52.944 6.43538 53.0767 6.62647 53.147 6.84313C53.2174 7.05979 53.2222 7.2924 53.161 7.5118C53.0997 7.7312 52.975 7.92764 52.8026 8.07651L52.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M70.8068 8.07581L67.6428 10.806L68.6068 14.8891C68.66 15.1107 68.6463 15.3432 68.5674 15.5571C68.4886 15.7709 68.3481 15.9566 68.1638 16.0907C67.9794 16.2248 67.7595 16.3012 67.5317 16.3104C67.304 16.3195 67.0786 16.2609 66.8841 16.1421L63.3333 13.9567L59.7804 16.1421C59.586 16.2603 59.3609 16.3183 59.1335 16.3088C58.9062 16.2993 58.6867 16.2228 58.5027 16.0888C58.3188 15.9548 58.1786 15.7694 58.0998 15.556C58.021 15.3425 58.0071 15.1104 58.0599 14.8891L59.0274 10.806L55.8633 8.07581C55.6913 7.92711 55.5668 7.73101 55.5056 7.51201C55.4443 7.29301 55.4489 7.06081 55.5188 6.84441C55.5887 6.62801 55.7208 6.437 55.8986 6.29523C56.0765 6.15347 56.2921 6.06723 56.5186 6.04729L60.6671 5.71261L62.2674 1.83979C62.354 1.62873 62.5014 1.44819 62.6909 1.32113C62.8804 1.19406 63.1034 1.12622 63.3316 1.12622C63.5597 1.12622 63.7827 1.19406 63.9722 1.32113C64.1617 1.44819 64.3091 1.62873 64.3958 1.83979L65.9954 5.71261L70.1438 6.04729C70.3708 6.06649 70.5871 6.15225 70.7655 6.29381C70.944 6.43538 71.0767 6.62647 71.147 6.84313C71.2174 7.05979 71.2222 7.2924 71.161 7.5118C71.0997 7.7312 70.975 7.92764 70.8026 8.07651L70.8068 8.07581Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M88.8068 8.07581L85.6428 10.806L86.6068 14.8891C86.66 15.1107 86.6463 15.3432 86.5674 15.5571C86.4886 15.7709 86.3481 15.9566 86.1638 16.0907C85.9794 16.2248 85.7595 16.3012 85.5317 16.3104C85.304 16.3195 85.0786 16.2609 84.8841 16.1421L81.3333 13.9567L77.7804 16.1421C77.586 16.2603 77.3609 16.3183 77.1335 16.3088C76.9062 16.2993 76.6867 16.2228 76.5027 16.0888C76.3188 15.9548 76.1786 15.7694 76.0998 15.556C76.021 15.3425 76.0071 15.1104 76.0599 14.8891L77.0274 10.806L73.8633 8.07581C73.6913 7.92711 73.5668 7.73101 73.5056 7.51201C73.4443 7.29301 73.4489 7.06081 73.5188 6.84441C73.5887 6.62801 73.7208 6.437 73.8986 6.29523C74.0765 6.15347 74.2921 6.06723 74.5186 6.04729L78.6671 5.71261L80.2674 1.83979C80.354 1.62873 80.5014 1.44819 80.6909 1.32113C80.8804 1.19406 81.1034 1.12622 81.3316 1.12622C81.5597 1.12622 81.7827 1.19406 81.9722 1.32113C82.1617 1.44819 82.3091 1.62873 82.3958 1.83979L83.9954 5.71261L88.1438 6.04729C88.3708 6.06649 88.5871 6.15225 88.7655 6.29381C88.944 6.43538 89.0767 6.62647 89.147 6.84313C89.2174 7.05979 89.2222 7.2924 89.161 7.5118C89.0997 7.7312 88.975 7.92764 88.8026 8.07651L88.8068 8.07581Z"
                        fill="#FF9800"
                      />
                    </svg>
                  </div>
                  <p className="ff_inter mt-[15px] text-sm">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                    enim tortor nulla facilisi magna. Aenean ac commodo nisi
                    vitae. In volutpat placerat urna consectetur sollicitudin
                    maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus
                    enim potenti viverra a auctor quis ipsum integer placerat.{" "}
                  </p>
                  <button className="text-[#C04000] text-sm font-medium mt-[15px]">
                    Read More
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </main>
    <Footer/>

    </>
  );
}
