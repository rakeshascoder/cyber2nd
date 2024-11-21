/* eslint-disable react/no-unescaped-entities */
import  { useState,useEffect } from "react";
import { useRef } from "react";
import Logo from "../assets/Images/Png/Logo.png";
import Herosection from "../assets/Images/Png/Herosection.png";
import CirclePlus from "../assets/Images/svg/CirclePlus";
// import CirclePlus from '../assets/Images/Png/pluscircle.png'
import Metting from "../assets/Images/Png/Metting.png";
import foursquare from "../assets/Images/Png/foursquare.png";
import Discussing from "../assets/Images/Png/Discussing.png";
import Regent from "../assets/Images/Png/Regent.png";
import Workingman from "../assets/Images/Png/Workingman.png";
import BlackMan from "../assets/Images/Png/BlackMan.png";
import STSM from "../assets/Images/Png/STSM.png";

import Wised from "../assets/Images/Png/Wised.png";
import Namo from "../assets/Images/Png/Namo.png";
import { Link } from "react-router-dom";
import Accordian from "./Accordian";
import Slider from "react-slick";
import { value } from "./Common/Helper";
import Footer from "./Common/Footer";
import NavBar from "./Common/NavBar";
import Header from "../Components/Common/Header";
import SubHeader from "../Components/Common/SubHeader";
import { Arrowred, Roundedred, Star } from "./Common/Icons";


export default function Data() {
  const [isNavbaropen, setIsNavbaropen] = useState(false);
  const [popup, setPopup] = useState(false);
  const btnRef=useRef(null)

  useEffect(() => {
    // Add or remove the no-scroll class when popup state changes
    if (popup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the class on unmount
    return () => document.body.classList.remove("no-scroll");
  }, [popup]);

  const cardData = [
    {
      id: 1,
      title: "Expertise & Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing typesetting industry.",
    },
    {
      id: 2,
      title: "Proactive Approach",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing typesetting industryProactive ApproachProactive Approach.",
    },
    {
      id: 3,
      title: "Robust Security Measures",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing typesetting industry.",
    },
    {
      id: 4,
      title: "Solutions and Scalability",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing typesetting industry.",
    },
  ];



  
  

  if (isNavbaropen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

  

  return (
    <>
      <header className="max-h-[100vh]  relative">
        <div className="container mx-auto px-4 lg:max-w-[1360px] mt-0 pt-5">
        
         <div className="shadow-lg rounded-[20px] border  px-4 lg:px-6 bg-white py-4 lg:py-6 ">
            {" "}
            <SubHeader />
            <Header />
          </div>

          {/* Hero Section */}
          <div className=" mt-10 lg:mt-16" id="home">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
              {/* Text Content */}
              <div className="text-center lg:text-left w-full lg:w-5/12 px-4 lg:px-0 mt-5 lg:mt-0">
                <p className="text-[24px] md:text-[45px] lg:text-[50px] xl:text-[72px] font-normal leading-tight lg:leading-[70px] 2xl:leading-[89px] ff_georgie">
                  Top Managed Provider &
                   <span className="text-[#EE0000]">IT Services</span>
                </p>
                <p className="mt-4 lg:mt-7 text-sm lg:text-base ff_inter">
                  Strategic technology advice to help plan your future growth.
                </p>
                <button className="mt-5 lg:mt-8 bg-[#EE0000] text-white py-2 px-4 lg:py-3 lg:px-5 font-normal text-sm lg:text-base rounded-lg ff_inter">
                  Read More
                </button>
              </div>
              {/* Hero Image */}
              <div className="w-10/12 md:w-7/12 lg:w-6/12 mx-auto   xl:absolute top-0 xl:top-[150px] right-0 px-4 lg:px-0">
                <img className="w-full" src={Herosection} alt="Hero Section" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mb-[50px]">
          <div className="container mx-auto px-3 max-w-[1360px]">
            <div className="flex flex-col sm:flex-row flex-wrap mt-[50px] sm:mt-[80px] md:mt-[80px] lg:mt-[150px]">
              {value.map((card, index) => (
                <div
                  key={card.id}
                  className="w-full h-full sm:w-6/12 lg:w-3/12 px-3 lg:px-0 mt-5 "
                >
                  <div
                    className={`border-[0.5px] border-[#0000004D] px-8 py-5 relative ${index === 0
                      ? "lg:rounded-tl-[15px] lg:rounded-bl-[15px]"
                      : ""
                      } ${index === 3
                        ? "lg:rounded-tr-[15px] lg:rounded-br-[15px]"
                        : ""
                      }`}
                  >
                    <div className="flex items-center">
                      <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
                      <p className="text-sm font-normal text-[#00000099] ms-2">
                        {card.id}
                      </p>
                    </div>
                    <div className="lg:max-w-[210px]">
                      <p className="text-xl font-normal ff_outfit my-3 md:my-6 whitespace-nowrap hover:text-[#EE0000]">
                        {card.title}
                      </p>
                      <p className="font-normal text-sm text-[#00000099] leading-[16px]">
                        {card.description}
                      </p>
                    </div>
                    {card.showicon && (
                      <div className="hidden lg:block absolute z-10 right-[-23px] top-[40%] bg-[#FFFFFF] h-[44px] w-[44px] rounded-[50px] border border-[#0000004D]">
                        <CirclePlus />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div
            className=" container mx-auto px-3  max-w-[1360px] "
            id="aboutSection"
          >
            <div className="mt-[80px] sm:mt-[90px] md:mt-[100px] lg:mt-[150px] flex flex-col lg:flex-row  justify-between items-center">
              <div className="sm:w-6/12 lg:w-6/12">
                <img className="w-full" src={Metting} alt="meeting" />
              </div>
              <div className="sm:w-11/12 w-10/12 lg:w-5/12 mt-5">
                <div className="flex items-center">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
                  <p className="font-normal text-xl ms-2 ff_inter">
                    About Grey Token
                  </p>
                </div>
                <p className="text-[#EE0000] leading-[35px] sm:leading-[50px] md:leading-[40px] lg:leading-[62px] text-[25px] lg:text-[30px] xl:text-[48px] font-normal mt-[30px] ff_jomolhari">
                  The Comprehensive Solution for Your Need
                </p>
                <p className="text-sm font-normal text-[#00000099] my-[30px] ff_inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8437 7.875C18.7064 9.78141 17.2922 11.25 15.75 11.25C14.2078 11.25 12.7912 9.78188 12.6562 7.875C12.5156 5.89172 13.8923 4.5 15.75 4.5C17.6076 4.5 18.9844 5.92781 18.8437 7.875Z"
                      stroke="#EE0000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.75 14.25C12.6952 14.25 9.7575 15.7673 9.02156 18.7223C8.92406 19.1133 9.16922 19.5 9.57093 19.5H21.9295C22.3312 19.5 22.575 19.1133 22.4789 18.7223C21.743 15.72 18.8053 14.25 15.75 14.25Z"
                      stroke="#EE0000"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M9.37499 8.71594C9.2653 10.2384 8.12249 11.4375 6.89061 11.4375C5.65874 11.4375 4.51405 10.2389 4.40624 8.71594C4.29421 7.13203 5.40655 6 6.89061 6C8.37468 6 9.48702 7.16109 9.37499 8.71594Z"
                      stroke="#EE0000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.65625 14.3437C8.81016 13.9561 7.87828 13.807 6.89063 13.807C4.45313 13.807 2.10469 15.0187 1.51641 17.3789C1.43906 17.6911 1.635 18 1.95563 18H7.21875"
                      stroke="#EE0000"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="font-normal text-xl mt-3 ff_outfit">
                    Highly Professional Members
                  </p>
                  <p className="text-sm font-normal text-[#00000099] mt-[10px] ff_inter">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard Lorem Ipsum is simply dummy text of the printing
                    typesetting industry.
                  </p>
                  <svg
                    className="mt-[30px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_46_143)">
                      <path
                        d="M7.23333 18.2933C7.51194 18.2335 7.76825 18.0969 7.97326 17.8989C8.17826 17.701 8.32377 17.4496 8.39333 17.1733C8.75333 17.0799 9.1 16.9599 9.45333 16.8333V16.0333C9.45692 15.919 9.4703 15.8053 9.49333 15.6933C9.09701 15.8538 8.69191 15.9918 8.28 16.1066C8.13613 15.8219 7.9063 15.5896 7.62308 15.4427C7.33986 15.2958 7.0176 15.2418 6.70196 15.2882C6.38631 15.3347 6.09329 15.4793 5.86441 15.7016C5.63552 15.9238 5.48237 16.2125 5.42666 16.5266H5.12666C3.96033 15.1726 3.28398 13.4653 3.20666 11.6799C4.1027 10.4244 5.23493 9.35556 6.54 8.53328C6.73418 8.73193 6.98013 8.8722 7.24996 8.93818C7.5198 9.00417 7.80273 8.99323 8.06666 8.90662C8.84861 10.19 9.85854 11.3197 11.0467 12.24C11.0905 12.1842 11.1372 12.1308 11.1867 12.08L11.82 11.4733C10.6567 10.6056 9.67197 9.52124 8.92 8.27995C9.07111 8.04037 9.15195 7.7632 9.15333 7.47995V7.33328C11.5909 6.51467 14.2291 6.51467 16.6667 7.33328C16.4869 8.09946 16.23 8.84549 15.9 9.55995H17.0667C17.3143 8.97165 17.5171 8.36548 17.6733 7.74662C17.96 7.87328 18.2333 8.01995 18.5133 8.17328C18.8945 9.03578 19.1202 9.95887 19.18 10.9C19.4317 10.76 19.7123 10.6801 20 10.6666C20.1533 10.6694 20.3057 10.6918 20.4533 10.7333C20.3357 8.93501 19.6999 7.20925 18.6228 5.76442C17.5457 4.31959 16.0734 3.21748 14.3836 2.59118C12.6938 1.96488 10.8588 1.84117 9.10026 2.235C7.3417 2.62882 5.73475 3.52334 4.47348 4.81052C3.21221 6.09771 2.35056 7.72251 1.99258 9.48872C1.6346 11.2549 1.7956 13.087 2.45614 14.7637C3.11668 16.4404 4.2485 17.89 5.71494 18.9375C7.18137 19.985 8.9197 20.5855 10.72 20.6666C10.5507 20.2383 10.5507 19.7616 10.72 19.3333C9.4929 19.2614 8.29929 18.9054 7.23333 18.2933ZM11.1733 3.33328C12.2447 3.3349 13.3049 3.55172 14.2909 3.97086C15.2769 4.39 16.1687 5.00293 16.9133 5.77328C16.9133 5.93995 16.9133 6.11328 16.86 6.27995C14.1824 5.39695 11.2881 5.42273 8.62666 6.35328C8.39995 6.16034 8.12198 6.03757 7.82666 5.99995C7.64821 5.44895 7.51226 4.88507 7.42 4.31328C8.57074 3.68106 9.8604 3.34433 11.1733 3.33328ZM6.44 4.90662C6.52655 5.33868 6.63558 5.76592 6.76666 6.18662C6.54858 6.32317 6.36872 6.51286 6.24396 6.7379C6.1192 6.96294 6.0536 7.21597 6.05333 7.47328C6.05333 7.47328 6.05333 7.53995 6.05333 7.57328C5.04627 8.20741 4.13106 8.97682 3.33333 9.85995C3.70681 7.876 4.81655 6.1066 6.44 4.90662Z"
                        fill="#EE0000"
                      />
                      <path
                        d="M16.6667 14.1267C16.1607 14.132 15.6676 14.2871 15.2497 14.5725C14.8318 14.8579 14.5079 15.2607 14.3188 15.7301C14.1298 16.1995 14.084 16.7143 14.1874 17.2097C14.2908 17.705 14.5387 18.1586 14.8998 18.5132C15.2608 18.8677 15.7189 19.1073 16.216 19.2017C16.7132 19.296 17.2271 19.241 17.693 19.0434C18.1589 18.8458 18.5557 18.5146 18.8334 18.0916C19.1111 17.6686 19.2573 17.1727 19.2533 16.6667C19.2428 15.9883 18.9655 15.3413 18.4813 14.8658C17.9972 14.3904 17.3452 14.1249 16.6667 14.1267ZM16.6667 18.1801C16.3734 18.1748 16.0881 18.0833 15.8465 17.9169C15.6049 17.7505 15.4177 17.5166 15.3081 17.2445C15.1986 16.9724 15.1717 16.674 15.2307 16.3866C15.2897 16.0993 15.432 15.8357 15.6399 15.6287C15.8477 15.4217 16.112 15.2806 16.3996 15.2228C16.6872 15.1651 16.9855 15.1934 17.2571 15.3041C17.5288 15.4148 17.7618 15.6031 17.9271 15.8454C18.0924 16.0877 18.1827 16.3734 18.1867 16.6667C18.1876 16.8663 18.1488 17.064 18.0727 17.2484C17.9965 17.4329 17.8845 17.6004 17.7431 17.7412C17.6016 17.8819 17.4337 17.9932 17.2489 18.0686C17.0641 18.1439 16.8662 18.1818 16.6667 18.1801Z"
                        fill="#EE0000"
                      />
                      <path
                        d="M22.78 16.0933C22.7865 15.938 22.7453 15.7845 22.6619 15.6533C22.5784 15.5222 22.4568 15.4198 22.3133 15.36L21.2733 15.0533C21.2245 14.9111 21.1667 14.7711 21.1 14.6333L21.58 13.7466C21.6554 13.6024 21.6825 13.4377 21.6573 13.2769C21.6321 13.1161 21.5559 12.9676 21.44 12.8533L20.5467 11.9733C20.4316 11.8585 20.2828 11.7835 20.122 11.7595C19.9612 11.7355 19.7969 11.7637 19.6533 11.84L18.76 12.3133C18.6145 12.2434 18.4654 12.1811 18.3133 12.1266L18 11.14C17.9474 10.9912 17.8499 10.8626 17.7209 10.7718C17.5918 10.681 17.4378 10.6326 17.28 10.6333H16C15.839 10.6345 15.6825 10.6867 15.5531 10.7826C15.4237 10.8784 15.328 11.0129 15.28 11.1666L14.9867 12.12C14.8324 12.1742 14.6811 12.2365 14.5333 12.3066L13.6533 11.84C13.5112 11.7645 13.3487 11.7361 13.1894 11.7588C13.03 11.7816 12.882 11.8544 12.7667 11.9666L11.8533 12.84C11.7359 12.9547 11.6588 13.1044 11.6336 13.2667C11.6084 13.4289 11.6363 13.595 11.7133 13.74L12.18 14.5933C12.1089 14.7355 12.0467 14.88 11.9933 15.0266L11.0533 15.3333C10.8967 15.3795 10.7594 15.4754 10.662 15.6065C10.5646 15.7375 10.5124 15.8967 10.5133 16.06V17.3066C10.5209 17.4647 10.5777 17.6165 10.6757 17.7408C10.7737 17.8651 10.908 17.9557 11.06 18L12.04 18.2933C12.0933 18.4355 12.1556 18.5778 12.2267 18.72L11.7467 19.62C11.6688 19.7643 11.6398 19.9299 11.6638 20.0921C11.6878 20.2543 11.7637 20.4044 11.88 20.52L12.7733 21.4C12.8884 21.5148 13.0373 21.5897 13.1981 21.6137C13.3588 21.6377 13.5231 21.6096 13.6667 21.5333L14.58 21.0533C14.7178 21.1155 14.8578 21.1733 15 21.2266L15.2933 22.2066C15.3417 22.3614 15.4383 22.4967 15.5691 22.5927C15.6998 22.6886 15.8578 22.7402 16.02 22.74H17.2867C17.4466 22.7374 17.6016 22.6845 17.7297 22.5888C17.8577 22.493 17.9523 22.3593 18 22.2066L18.2933 21.2266C18.4333 21.18 18.5733 21.12 18.7067 21.06L19.6267 21.5466C19.7695 21.6213 19.9324 21.6486 20.0918 21.6247C20.2512 21.6007 20.3988 21.5267 20.5133 21.4133L21.4067 20.5333C21.5241 20.4185 21.6012 20.2688 21.6264 20.1066C21.6517 19.9444 21.6237 19.7783 21.5467 19.6333L21.06 18.74C21.1222 18.6066 21.1778 18.4733 21.2267 18.34L22.2267 18.0466C22.3836 18.0035 22.5223 17.9106 22.622 17.782C22.7218 17.6535 22.7772 17.496 22.78 17.3333V16.0933ZM21.7133 17.0933L20.38 17.48L20.3 17.76C20.2259 18.0121 20.1253 18.2557 20 18.4866L19.86 18.74L20.5267 19.9333L19.9533 20.4933L18.74 19.8266L18.4933 19.96C18.2558 20.088 18.0056 20.1907 17.7467 20.2666L17.4667 20.3466L17.0733 21.68H16.2533L15.86 20.38L15.58 20.3C15.3194 20.2258 15.067 20.1252 14.8267 20L14.58 19.8666L13.3733 20.5333L12.8 19.9666L13.4667 18.7533L13.32 18.5C13.1838 18.2616 13.0742 18.009 12.9933 17.7466L12.9067 17.4733L11.6067 17.0866V16.28L12.9 15.8933L12.98 15.62C13.0599 15.3551 13.1695 15.1002 13.3067 14.86L13.4533 14.6L12.7867 13.4466L13.3667 12.8866L14.5467 13.5133L14.8 13.3733C15.0473 13.2362 15.3089 13.1267 15.58 13.0466L15.8533 12.9666L16.2467 11.6933H17.0667L17.4533 12.96L17.7267 13.04C17.9953 13.1183 18.2546 13.2256 18.5 13.36L18.7533 13.5L19.9533 12.8666L20.5267 13.4333L19.86 14.6133L20 14.8666C20.1322 15.1053 20.2373 15.358 20.3133 15.62L20.3933 15.9L21.68 16.28L21.7133 17.0933Z"
                        fill="#EE0000"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_143">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className="font-normal text-xl mt-3 ff_outfit">
                    Infrastructure Integration Technology
                  </p>
                  <p className="text-sm font-normal text-[#00000099] mt-[10px] ff_inter">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard Lorem Ipsum is simply dummy text of the printing
                    typesetting industry.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-img py-[30px] sm:py-[0px] mt-[80px] sm:mt-[90px] md:mt-[100px] lg:mt-[150px]"
          id="services"
        >
          <div className=" container mx-auto px-3  max-w-[1360px] ">
            <div className="mt-[30px] sm:py-[40px]   lg:py-[98px]">
              <p className="font-normal text-xl text-white text-center ff_inter">
                What we Do
              </p>
              <p className="ff_jomolhari text-center font-normal text-[30px] sm:text-[40px] lg:text-[48px] text-white my-[14px]">
                Our Extensive Network Security Services
              </p>

              <div className="flex items-center flex-wrap flex-col sm:flex-row justify-between mt-[48px]">
                <div className="w-10/12 mx-auto sm:w-6/12 lg:w-3/12">
                  <div className="flex items-center">
                    <img src={foursquare} alt="foursquare" />
                    <div className="ms-2">
                      {" "}
                      <p className="mb-2 font-normal text-sm  sm:text-lg lg:text-xl text-white leading-[18px] sm:leading-[20px] lg:leading-[26px] ff_outfit">
                        Unleashing Ability through Network Management
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div className="w-10/12 mx-auto sm:w-6/12 lg:w-3/12 mt-5 sm:mt-0">
                  <div className="flex items-center">
                    <img src={foursquare} alt="foursquare" />
                    <div className="ms-2">
                      {" "}
                      <p className="mb-2 font-normal text-sm  sm:text-lg lg:text-xl text-white leading-[18px] sm:leading-[20px] lg:leading-[26px] ff_outfit">
                        Unleashing Ability through Network Management
                      </p>
                     
                    </div>
                  </div>
                </div>
                <div className="w-10/12 mx-auto sm:w-6/12 lg:w-3/12 mt-5 sm:mt-10 lg:mt-0">
                  <div className="flex items-center  ">
                    <img src={foursquare} alt="foursquare" />
                    <div className="ms-2 ">
                      <p className="mb-2 font-normal text-sm  sm:text-lg lg:text-xl text-white leading-[18px] sm:leading-[20px] lg:leading-[26px] ff_outfit">
                        Unleashing Ability through Network Management
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" container mx-auto px-3  max-w-[1360px]" id="clients">
            <div className="flex flex-col-reverse md:flex-row  mt-[100px]">
              <div className=" md:w-6/12 xl:w-5/12 w-full sm:w-10/12 mx-auto  mt-5 md:mt-0">
                <div className="flex items-center ">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
                  <p className="text-xl font-normal ms-2 ff_inter">
                    Why Choose us
                  </p>
                </div>
                <p className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-normal text-[#EE0000] leading-[30px] sm:leading-[35px] md:leading-[50px] lg:leading-[62px] lg:mt-[40px] md:mt-[30px] sm:mt=[25px] mt-[18px] ff_jomolhari">
                  We do things differently at Reliable Technology Services
                </p>
              </div>
              <div className="md:w-6/12 w-full sm:w-10/12 mx-auto ">
                <img
                  className="w-full rounded-[10px]"
                  src={Discussing}
                  alt="discussing"
                />
              </div>
            </div>

            <div className="flex justify-between mt-[30px] sm:mt-[100px] md:mt-[100px]   mx-[-12px]  flex-wrap flex-col sm:flex-row">
      
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto mt-6 px-3"
                >
                  {/* Apply `group` class to the parent div */}
                  <div className="card h-full group p-6 border rounded-md">
                    <div className="flex items-center">
                      <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
                      <p className="text-sm font-normal text-[#00000099] ms-2 ff_inter">
                        0{card.id}
                      </p>
                    </div>
                    {/* Apply the hover effect to the title */}
                    <p className="text-[#000000] text-xl font-normal my-6 ff_outfit group-hover:text-[#EE0000]">
                      {card.title}
                    </p>
                    <p className="font-normal text-sm text-[#00000099] ff_inter">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#F1F1F1] py-[30px] sm:py-[60px] lg:py-[100px]  mt-[60px] sm:mt-[90px]  lg:mt-[100px]">
            <div className=" container mx-auto px-3  max-w-[1360px]">
              <p className="text-[30px] lg:text-[48px] font-normal text-[#EE0000] text-center ff_jomolhari">
                Organizations succeeding with Grey Token
              </p>
              <p className="text-[#00000099] text-sm font-normal mt-[30px] max-w-[514px] mx-auto text-center leading-[16px] ff_inter">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>

              <div className="flex flex-wrap items-center mt-[30px] w-[90%] mx-auto justify-center">
                <div className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 mt-6 px-3">
                  <div className="card2 h-[122px]">
                    <img src={Regent} alt="Regent" />
                  </div>
                </div>
                <div className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 mt-6 px-3">
                  <div className="card2 h-[122px]">
                    <img src={Namo} alt="Namo" />
                  </div>
                </div>
                <div className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 mt-6 px-3">
                  <div className="card2 h-[122px]">
                    <img src={Wised} alt="Wised" />
                  </div>
                </div>
                <div className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 mt-6 px-3">
                  <div className="card2 h-[122px]">
                    <img src={STSM} alt="STSM" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-black mb-5">
          <div className=" container mx-auto px-3 py-3 lg:py-[0px]  max-w-[1360px]">
            <div className="flex flex-col lg:flex-row items-center justify-between xl:justify-end relative">
              <div className="w-9/12 lg:w-6/12">
                <img
                  className="xl:absolute left-[-141px] top-0"
                  src={Workingman}
                  alt="workingman"
                />
              </div>
              <div className="w-10/12 lg:w-5/12">
                <div className="lg:py-[80px] md:py-[60px] sm:py-[40px] py-[20px] xl:py-[102px]">
                  <p className="text-[29px] sm:text-[30px] md:text-[40px] lg:text-[38px] xl:text-[48px] font-normal text-[#EE0000] ff_jomolhari">
                    Subscribe our newsletter
                  </p>
                  <p className="text-sm font-normal text-[#FFFFFF99] mt-[20px] md:mt-[30px] ff_inter">
                    Teaches You How To Communicate Your Unique Comedy Skilfully.
                    Virtual comedy workshop. Virtual stands up comedy. Virtual
                    comedy class.
                  </p>
                  <div className="flex  max-xs:flex-col flex-row gap-2.5 mt-[30px]">
                    <input
                      type="text"
                      placeholder="Entre your E-mail address"
                      className="ff_outfit bg-transparent border xl:py-[12.5px] py-[10px] px-[12px] xl:px-[15px] max-xs:w-full w-[70%] border-[#FFFFFF4D] rounded-[10px] text-[#FFFFFF4D] placeholder:text-[#FFFFFF4D] outline-none"
                    />
                    <button className="text-[12px] xl:text-base xl:py-[12.5px] py-[10px] px-[12px] xl:px-[15px] bg-[#EE0000] rounded-[10px] text-white ff_outfit">
                      Subscribe Now
                    </button>
                  </div>
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

            <Slider ref={btnRef} {...settings}>
                           
                           {[...Array(6)].map((_, index) => (
                           <div
                               key={index}
                               className="w-full px-3"
                           >
                            
                               <div className="hover:bg-[#EE0000] group hover:text-[white] duration-300 p-5 border border-[#00000033] rounded-es-[20px] rounded-se-[20px] mt-[50px]">
                                   <div className="flex items-center justify-between">
                                       <div className="flex items-center gap-5">
                                           <img
                                               src={BlackMan}
                                               alt="BlackMan"
                                               className="w-10 h-10 rounded-full"
                                           />
                                           <div>
                                               <p className="ff_inter text-sm font-normal">
                                                   John doe
                                               </p>
                                               <p className="ff_inter text-sm font-normal">
                                                   STSM (CEO)
                                               </p>
                                           </div>
                                       </div>
                                       <Star />
                                   </div>
                                   <p className="ff_inter mt-[15px] text-sm">
                                       Lorem ipsum dolor sit amet consectetur. Imperdiet
                                       vulputate enim tortor nulla facilisi magna. Aenean ac
                                       commodo nisi vitae. In volutpat placerat urna
                                       consectetur sollicitudin maecenas viverra. Viverra
                                       egestas amet sed arcu eu. Faucibus enim potenti
                                       viverra a auctor quis ipsum integer placerat.
                                   </p>
                                   <button className="text-[#EE0000] group-hover:text-white text-sm font-medium mt-[15px]">
                                       Read More
                                   </button>
                               </div>
                           </div>
                       ))}
                          
                          
                       </Slider>

                       <div className='flex items-center justify-center gap-[50px] mt-[50px]'>
                        <span onClick={() => btnRef.current.slickPrev()} className="text-red-600 hover:text-red-800">   <Roundedred /></span>
                        <span onClick={() => btnRef.current.slickNext()} className="text-red-600 hover:text-red-800">   <Arrowred /></span>




                    </div>
                       
          </div>
        </section>
        <section>
          <Accordian />
        </section>
      </main>

    <Footer/>
    </>
  );
}
