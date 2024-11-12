import React, { useState,useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

import {
  Callicon,
  Facebookicon,
  Linkedinicon,
  Locationicons,
  Messageicon,
  Twittericon,
} from "./Common/Icons";
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
import close from "../assets/Images/Png/close.png";
import hamburger from "../assets/Images/Png/hamburger.png";
import STSM from "../assets/Images/Png/STSM.png";

import Wised from "../assets/Images/Png/Wised.png";
import Namo from "../assets/Images/Png/Namo.png";
import { Link } from "react-router-dom";
import Accordions from "./Accordian";
import Accordian from "./Accordian";
import Slider from "react-slick";
import { value } from "./Common/Helper";
import { Hidden } from "@mui/material";
import Contactpopup from "./Contactpopup";


export default function Data() {
  const [isNavbaropen, setIsNavbaropen] = useState(false);
  const [popup, setPopup] = useState(false);

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

  function navtoggle() {
    setOpen(!open);
  }

  function contactButton(item) {
    if (item === "Contact us") {
      setPopup(true);
    }
  }

  const closePopup = () => {
    setPopup(false);
  };

  if (isNavbaropen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }



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

  function navOpen() {
    setIsNavbaropen(!isNavbaropen);
  }
  console.log(cardData);

  return (
    <>
      <header className="max-h-[100vh]  relative">
        <div className="container mx-auto px-4 lg:max-w-[1360px] mt-0">
          {/* Contact Info & Social Icons */}
          <div className="flex  md:flex-row items-center justify-between py-4 space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
              <Messageicon />
              <p className="text-sm lg:text-base font-normal hidden md:block ff_outfit">
                cybersecurity@gmail.com
              </p>
              <div className="hidden md:block h-[25px] w-[1px] bg-[#EE0000]"></div>
              <Locationicons />
              <p className="text-sm lg:text-base font-normal hidden md:block ff_outfit">
                Jones Street, New York, USA
              </p>
              <div className="hidden md:block h-[25px] w-[1px] bg-[#EE0000]"></div>
              <Callicon />
              <p className="text-sm lg:text-base font-normal hidden md:block ff_outfit">
                +91 8295236699
              </p>
            </div>
            <div className="flex items-center !mt-0 gap-3">
              <Facebookicon />
              <Twittericon />
              <Linkedinicon />
            </div>
          </div>
          {/* Navigation */}
          <nav>
            <div className="flex flex-wrap items-center justify-between border py-4 lg:py-6 shadow-lg rounded-[20px] px-4 lg:px-6">
              <div>
                <img className="w-[60%] lg:w-auto" src={Logo} alt="Logo" />
              </div>

              {/* Overlay */}
              {isNavbaropen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-10"
                  onClick={() => setIsNavbaropen(false)}
                ></div>
              )}

              <ul
                className={`flex-col lg:flex-row items-center gap-8 bg-[white] lg:bg-transparent fixed w-full sm:w-1/2 lg:w-1/2 top-0 lg:right-0 ${isNavbaropen ? "right-0" : "-right-full"
                  } flex justify-center h-full sm:h-[100%] lg:relative transition-all duration-300 z-20`}
              >
                {[
                  { name: "Home", id: "home" },
                  { name: "About us", id: "aboutSection" },
                  { name: "Services", id: "services" },
                  { name: "Clients", id: "clients" },
                  { name: "Testimonials", id: "testimonials" },
                ].map((item) => (
                  <li key={item.name}>
                    <ScrollLink
                      to={item.id}
                      smooth={true}
                      duration={1000}
                      className="font-normal text-sm lg:text-base text-black lg:text-black hover:text-[#EE0000] duration-300 cursor-pointer scroll-smooth"
                      onClick={() => setIsNavbaropen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
                <ul className="md:hidden flex flex-col gap-6">
                  {["Get Started", "Contact us"].map((item) => (
                    <li key={item}>
                      <Link
                        className="text-sm lg:text-lg font-normal hover:bg-[#EE0000] duration-300 hover:text-white px-4 py-2 rounded-full border border-[#EE0000] text-black"
                        to=""
                        onClick={() => contactButton(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>

              {/* Action Buttons */}
              <div>
                <ul className="hidden md:flex items-center gap-2">
                  {["Get Started", "Contact us"].map((item) => (
                    <li key={item}>
                      <Link
                        className="text-sm lg:text-lg font-normal hover:bg-[#EE0000] duration-300 hover:text-white px-4 py-2 rounded-full border border-[#EE0000]"
                        to=""
                        onClick={() => contactButton(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

                {popup && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
                    onClick={closePopup}
                  >
                    <div
                      className="bg-white p-4 sm:p-6 rounded-lg max-w-lg w-[90%] relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                   <Contactpopup/>
                      <button
                        className="absolute top-[-2px] z-40 right-2 text-2xl"
                        onClick={closePopup}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="lg:hidden" onClick={navOpen}>
                {!isNavbaropen ? (
                  <img className="text-black w-5 h-5" src={hamburger} alt="" />
                ) : (
                  <img
                    className="w-5 h-5 z-[400] fixed right-5 top-5"
                    src={close}
                    alt=""
                  />
                )}
              </button>
            </div>
          </nav>


          {/* Hero Section */}
          <div section className=" mt-10 lg:mt-16" id="home">
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
                      <p className="text-xl font-normal text-[#EE0000] my-3 md:my-6 whitespace-nowrap">
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
              <div className="sm:w-7/12 w-10/12 lg:w-5/12 mt-5">
                <div className="flex items-center">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
                  <p className="font-normal text-xl ms-2 ff_inter">
                    About Grey Token
                  </p>
                </div>
                <p className="text-[#C04000] leading-[35px] sm:leading-[50px] md:leading-[40px] lg:leading-[62px] text-[25px] lg:text-[30px] xl:text-[48px] font-normal mt-[30px] ff_jomolhari">
                  The Comprehensive Solution for Your Need
                </p>
                <p className="text-sm font-normal text-[#00000099] my-[30px] ff_inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 14.25C12.6952 14.25 9.7575 15.7673 9.02156 18.7223C8.92406 19.1133 9.16922 19.5 9.57093 19.5H21.9295C22.3312 19.5 22.575 19.1133 22.4789 18.7223C21.743 15.72 18.8053 14.25 15.75 14.25Z"
                      stroke="#EE0000"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M9.37499 8.71594C9.2653 10.2384 8.12249 11.4375 6.89061 11.4375C5.65874 11.4375 4.51405 10.2389 4.40624 8.71594C4.29421 7.13203 5.40655 6 6.89061 6C8.37468 6 9.48702 7.16109 9.37499 8.71594Z"
                      stroke="#EE0000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.65625 14.3437C8.81016 13.9561 7.87828 13.807 6.89063 13.807C4.45313 13.807 2.10469 15.0187 1.51641 17.3789C1.43906 17.6911 1.635 18 1.95563 18H7.21875"
                      stroke="#EE0000"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="font-normal text-xl mt-3 ff_outfit">
                    Highly Professional Members
                  </p>
                  <p className="text-sm font-normal text-[#00000099] mt-[10px] ff_inter">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard Lorem Ipsum is simply dummy text of the printing
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
                    <g clip-path="url(#clip0_46_143)">
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard Lorem Ipsum is simply dummy text of the printing
                    typesetting industry.
                  </p>
                  <button className=" ff_inter mt-8 bg-[#EE0000] text-white py-3 px-5 font-normal text-base rounded-[10px]">
                    Know More About
                  </button>
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
                      <p className="text-[#EE0000] font-medium text-sm ff_inter">
                        Read more
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
                      <p className="text-[#EE0000] font-medium text-sm ff_inter">
                        Read more
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
                      <p className="text-[#EE0000] font-medium text-sm ff_inter">
                        Read more
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
              {/* {cardData.map((card) => (
                <div
                  key={card.id}
                  className="w-full  sm:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto mt-6 px-3"
                >
                  <div className="card">
                    <div className="flex items-center">
                      <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
                      <p className="text-sm font-normal text-[#00000099] ms-2f ff_inter">
                        0{card.id}
                      </p>
                    </div>
                    <p className="text-[#EE0000] text-xl font-normal my-6 ff_outfit">
                      {card.title}
                    </p>
                    <p className="font-normal text-sm text-[#00000099] ff_inter">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))} */}
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
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
                  <div className="flex flex-col sm:flex-row items-center  mt-[30px]">
                    <input
                      type="text"
                      placeholder="Entre your E-mail address"
                      className="ff_outfit mr-[10px]  bg-transparent border xl:py-[12.5px] py-[10px] px-[12px] xl:px-[15px]  w-[70%] border-[#FFFFFF4D] rounded-[10px] text-[#FFFFFF4D] placeholder:text-[#FFFFFF4D] outline-none"
                    />
                    <button className=" mt-3 sm:mt-0 lg:text-[12px] xl:text-base xl:py-[12.5px] py-[10px] px-[12px] xl:px-[15px] bg-[#EE0000] rounded-[10px] text-white ff_outfit">
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

            <Slider {...settings}>
              <div className="w-full sm:w-[80%] py-5 md:w-[70%] lg:w-[50%] px-3">
                <div className="p-5 border  border-[#00000033]  rounded-es-[20px] rounded-se-[20px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img src={BlackMan} alt="BlackMan" />
                      <div>
                        <p className="ff_inter text-sm font-normal">John doe</p>
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
                  <p className="ff_inter mt-[15px]">
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
                <div className="p-5 border  border-[#00000033] rounded-es-[20px] rounded-se-[20px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img src={BlackMan} alt="BlackMan" />
                      <div>
                        <p className="ff_inter text-sm font-normal">John doe</p>
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
                  <p className="ff_inter mt-[15px]">
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
                <div className="p-5 border border-[#00000033]  rounded-es-[20px] rounded-se-[20px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img src={BlackMan} alt="BlackMan" />
                      <div>
                        <p className="ff_inter text-sm font-normal">John doe</p>
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
                  <p className="ff_inter mt-[15px]">
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
        <section>
          <Accordian />
        </section>
      </main>

      <footer>
        <div className="bg-black pt-[100px]">
          <div className="max-w-[1360px] px-3 mx-auto container">
            <div className="flex flex-row flex-wrap  lg:justify-around xl:justify-between justify-around lg:pb-[100px] md:pb-[60px] pb-[40px]">
              <div className=" lg:w-3/12 md:w-5/12 w-11/12 px-3 text-center md:text-start ">
                <p className="text-white font_jacques font-normal text-[24px] leading-[31px] cursor-pointertext-white ff_Jacques_Francois">
                  Grey Token
                </p>
                <p className="opacity-[60%] text-white font_inter text-[14px] font-normal leading-[16px] mt-[30px] text-[#00000099]">
                  Cybersecurity is crucial in today's digital age, where many
                  individuals and organizations store a significant amount of
                  sensitive data on computers...
                </p>

                <div className="flex items-center mt-[30px] justify-center md:justify-start ">
                  <span className="me-[20px]  duration-500 hover:translate-y-[-10px] span_hover">
                    <a
                      target="blank"
                      href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.303 2.25H6.697C5.51758 2.25 4.38647 2.71852 3.5525 3.5525C2.71852 4.38647 2.25 5.51758 2.25 6.697V17.303C2.25 18.4824 2.71852 19.6135 3.5525 20.4475C4.38647 21.2815 5.51758 21.75 6.697 21.75H17.303C18.4824 21.75 19.6135 21.2815 20.4475 20.4475C21.2815 19.6135 21.75 18.4824 21.75 17.303V6.697C21.75 5.51758 21.2815 4.38647 20.4475 3.5525C19.6135 2.71852 18.4824 2.25 17.303 2.25ZM8.843 17.992C8.84614 18.0464 8.83811 18.1009 8.81942 18.1521C8.80072 18.2034 8.77176 18.2502 8.7343 18.2898C8.69684 18.3294 8.65167 18.361 8.60158 18.3825C8.55149 18.404 8.49752 18.4151 8.443 18.415H6.663C6.55574 18.4121 6.45386 18.3674 6.37911 18.2904C6.30437 18.2135 6.2627 18.1103 6.263 18.003V10.6C6.26153 10.5466 6.27079 10.4934 6.29023 10.4435C6.30967 10.3937 6.3389 10.3483 6.3762 10.31C6.41349 10.2717 6.45808 10.2413 6.50734 10.2205C6.5566 10.1997 6.60953 10.189 6.663 10.189H8.443C8.49651 10.1888 8.5495 10.1994 8.59882 10.2202C8.64815 10.2409 8.6928 10.2714 8.73012 10.3097C8.76744 10.3481 8.79666 10.3935 8.81605 10.4434C8.83544 10.4933 8.84461 10.5465 8.843 10.6V17.992ZM7.52 8.632C7.32729 8.63056 7.13674 8.59117 6.95925 8.51608C6.78176 8.441 6.62079 8.33169 6.48554 8.1944C6.35029 8.05711 6.24341 7.89452 6.171 7.71593C6.09858 7.53733 6.06206 7.34621 6.0635 7.1535C6.06494 6.96079 6.10433 6.77024 6.17942 6.59275C6.2545 6.41526 6.36381 6.25429 6.5011 6.11904C6.63839 5.98379 6.80098 5.87691 6.97957 5.8045C7.15817 5.73208 7.34929 5.69556 7.542 5.697C7.92452 5.70944 8.28703 5.87087 8.55219 6.14686C8.81734 6.42284 8.96415 6.79152 8.96128 7.17423C8.9584 7.55694 8.80609 7.92337 8.53682 8.19535C8.26755 8.46732 7.90266 8.6233 7.52 8.63M18.337 17.98C18.3368 18.0811 18.2972 18.1782 18.2266 18.2506C18.1561 18.323 18.0601 18.3651 17.959 18.368H16.08C15.9788 18.3649 15.8828 18.3226 15.8123 18.25C15.7418 18.1774 15.7022 18.0802 15.702 17.979V14.555C15.702 14.044 15.858 12.332 14.346 12.332C13.167 12.332 12.934 13.532 12.889 14.066V18.057C12.889 18.1584 12.8496 18.2558 12.779 18.3286C12.7085 18.4014 12.6123 18.4439 12.511 18.447H10.688C10.6368 18.447 10.5862 18.4369 10.5389 18.4173C10.4916 18.3977 10.4487 18.3689 10.4126 18.3327C10.3764 18.2965 10.3478 18.2535 10.3283 18.2062C10.3088 18.1589 10.2989 18.1082 10.299 18.057V10.564C10.3019 10.4626 10.3443 10.3663 10.4171 10.2957C10.49 10.2251 10.5875 10.1857 10.689 10.186H12.511C12.6125 10.1857 12.71 10.2251 12.7829 10.2957C12.8557 10.3663 12.8981 10.4626 12.901 10.564V11.209C13.167 10.8196 13.5343 10.5103 13.9633 10.3143C14.3922 10.1183 14.8665 10.0432 15.335 10.097C18.37 10.097 18.359 12.932 18.359 14.544L18.337 17.98Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </span>

                  <span className="me-[20px]  duration-500 hover:translate-y-[-10px] telegram_hover">
                    <a target="blank" href="https://telegram.org/">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_149_751)">
                          <path
                            d="M12 0.454102C5.57775 0.454102 0.375 5.6576 0.375 12.0791C0.375 18.5006 5.5785 23.7041 12 23.7041C18.4215 23.7041 23.625 18.5006 23.625 12.0791C23.625 5.6576 18.4215 0.454102 12 0.454102ZM17.7098 8.41835L15.8018 17.4094C15.6608 18.0469 15.2812 18.2014 14.7518 17.9014L11.8455 15.7594L10.4438 17.1094C10.2893 17.2639 10.158 17.3951 9.858 17.3951L10.0642 14.4371L15.45 9.5711C15.6848 9.36485 15.3982 9.24785 15.0885 9.4541L8.43225 13.6444L5.5635 12.7489C4.94025 12.5524 4.926 12.1256 5.69475 11.8256L16.9028 7.50335C17.4233 7.31585 17.8778 7.6301 17.709 8.4176L17.7098 8.41835Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_149_751">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 0.0791016)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </span>

                  <span className="me-[20px]  duration-500 hover:translate-y-[-10px] github_hover">
                    <a target="blank" href="https://github.com/">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3276 11.4042C20.4276 11.2519 19.4901 11.1522 18.7281 11.1252L18.5931 11.1207C18.6246 11.0532 18.6478 11.0082 18.6553 11.0007C18.6718 10.9872 18.6853 10.9302 18.6868 10.8747C18.6868 10.8447 18.7003 10.7442 18.7213 10.6122C18.9283 10.6197 19.2013 10.6257 19.5013 10.6272C20.6533 10.6369 21.8593 10.7299 22.6866 10.8762C23.1793 10.9632 23.3421 10.9602 22.9791 10.8717C22.6101 10.7817 21.5181 10.6512 20.6481 10.5942C20.0101 10.5558 19.3709 10.5403 18.7318 10.5477C18.7468 10.4622 18.7618 10.3677 18.7798 10.2702C18.8488 9.89217 18.8721 9.51267 18.8736 8.75742C18.8751 7.58742 18.8121 7.26492 18.4311 6.48942C18.2871 6.19063 18.1043 5.91222 17.8873 5.66142C18.0726 5.11392 18.0673 4.26792 17.8761 3.52542C17.7186 2.91642 17.6623 2.87742 17.1111 2.99442C16.6423 3.09417 16.2673 3.22992 15.7866 3.47217C15.5586 3.58692 15.2451 3.76467 15.0178 3.90567C14.4253 3.69792 13.8126 3.56067 13.1578 3.48567C12.4956 3.41067 10.8703 3.45267 10.2928 3.55917C9.73032 3.66417 9.22182 3.79167 8.76282 3.94167C8.53257 3.80067 8.20032 3.60942 7.96182 3.48942C7.47882 3.24642 7.10382 3.11142 6.63432 3.01167C6.08382 2.89392 6.02682 2.93367 5.86932 3.54267C5.67432 4.29492 5.67282 5.15517 5.86557 5.70117C5.88807 5.76342 5.90157 5.80767 5.90682 5.84217C5.12532 6.82617 4.87032 7.92717 5.03982 9.46467C5.08482 9.86442 5.15232 10.2319 5.24832 10.5687C4.74957 10.5657 4.04082 10.5837 3.52782 10.6167C2.65632 10.6744 1.56432 10.8042 1.19532 10.8942C0.83307 10.9819 0.99432 10.9842 1.48782 10.8987C2.31507 10.7532 3.52182 10.6587 4.67382 10.6512C4.89132 10.6497 5.09382 10.6452 5.26932 10.6407C5.32182 10.8184 5.38182 10.9879 5.44932 11.1492H5.44557C4.68432 11.1762 3.74757 11.2767 2.84682 11.4267C2.17182 11.5407 1.17432 11.7672 1.05732 11.8317C0.93432 11.9007 1.03482 11.8857 1.55757 11.7529C2.51232 11.5114 3.75357 11.3254 5.29107 11.1979L5.46357 11.1829C5.79357 11.9479 6.30132 12.5329 7.01982 12.9904C7.45932 13.2694 8.16357 13.5567 8.51832 13.6017C8.61582 13.6137 8.89932 13.6722 9.14832 13.7307C9.39807 13.7892 9.88632 13.8769 10.2328 13.9272H10.2403L10.2223 13.9392C9.80232 14.1567 9.52932 14.4972 9.34482 15.0319C9.26232 15.0567 9.16032 15.0904 9.04932 15.1294C8.65182 15.2644 8.49807 15.2914 8.09682 15.2944C7.67907 15.2974 7.57932 15.2794 7.33182 15.1624C6.94802 14.9737 6.62671 14.6784 6.40632 14.3119C6.03132 13.6924 5.38107 13.2544 4.83882 13.2544C4.37682 13.2544 4.28907 13.4419 4.62357 13.7157C5.12757 14.1282 5.50407 14.5482 5.65857 14.8692L5.95632 15.4872C6.03882 15.6574 6.21282 15.8884 6.37932 16.0482C6.77082 16.4217 7.14882 16.6002 7.71282 16.6842C8.09082 16.7397 8.18382 16.7397 8.63007 16.6827C8.84532 16.6564 9.02757 16.6257 9.18957 16.5874V17.2279C9.18957 18.5524 9.17457 18.9784 9.12207 19.1029C9.02232 19.3399 8.79957 19.5829 8.58432 19.6932C8.36907 19.8034 8.30232 19.9242 8.39307 20.0352C8.44407 20.0952 8.54082 20.1057 8.86557 20.0847C9.48207 20.0472 9.91782 19.8184 10.1406 19.4172C10.2111 19.2874 10.2276 19.0272 10.2501 17.6772C10.2741 16.2132 10.2846 16.0722 10.3798 15.8622C10.4368 15.7384 10.5201 15.6034 10.5673 15.5667C10.6446 15.5022 10.6498 15.6297 10.6498 17.3817C10.6498 19.3152 10.6296 19.5492 10.4361 19.9204C10.3926 20.0052 10.3101 20.1154 10.2523 20.1679C10.1511 20.2602 10.1083 20.4964 10.1788 20.5677C10.2951 20.6832 10.8778 20.5017 11.1958 20.2512C11.7373 19.8222 11.8018 19.4674 11.8063 16.9062L11.8086 15.4024L11.9736 15.4174L12.1371 15.4324L12.1641 17.3974C12.1941 19.6114 12.1986 19.6437 12.5751 20.0712C12.7888 20.3127 13.0041 20.4462 13.3551 20.5512C13.8231 20.6914 13.9641 20.4739 13.6491 20.0967C13.3063 19.6857 13.2891 19.5289 13.3086 17.1004C13.3213 15.5434 13.3213 15.5434 13.4211 15.6342C13.6333 15.8262 13.6738 16.1412 13.6738 17.6014C13.6738 19.4149 13.7263 19.5874 14.3661 19.9039C14.6661 20.0502 14.7486 20.0689 15.1326 20.0689C15.5406 20.0712 15.5653 20.0652 15.5803 19.9587C15.5931 19.8724 15.5428 19.8139 15.3523 19.6977C15.1172 19.5588 14.9315 19.3498 14.8213 19.0999C14.7801 19.0054 14.7523 18.3814 14.7336 17.0974C14.7066 15.3019 14.7006 15.2202 14.5888 14.9389C14.4388 14.5609 14.2078 14.2624 13.9161 14.0644C13.8411 14.0149 13.7646 13.9744 13.6663 13.9429C13.7863 13.9309 13.9041 13.9182 14.0173 13.9017C15.1963 13.7442 15.8196 13.6137 16.3198 13.4202C17.3773 13.0129 18.0936 12.3364 18.4813 11.3772C18.5158 11.2917 18.5503 11.2107 18.5788 11.1447L18.8788 11.1702C20.4163 11.2999 21.6576 11.4852 22.6123 11.7274C23.1358 11.8609 23.2348 11.8774 23.1133 11.8069C22.9993 11.7432 22.0018 11.5174 21.3268 11.4042H21.3276ZM16.8171 11.3802C16.6423 11.7642 16.1548 12.2577 15.7611 12.4512C15.3726 12.6432 14.7636 12.7887 14.0736 12.8592C13.6011 12.9072 10.9708 12.9214 10.5366 12.8787C9.09882 12.7377 8.29407 12.4609 7.69932 11.9067C7.13682 11.3802 6.87432 10.6654 6.91932 9.78567C6.94932 9.23517 7.08207 8.88942 7.42932 8.46942C7.74432 8.08692 8.07732 7.85067 8.46882 7.73067C8.79732 7.63017 9.80382 7.62117 11.1553 7.70817C11.7531 7.74567 12.2473 7.74567 12.8443 7.70817C14.2588 7.61817 15.2031 7.62867 15.5518 7.73667C16.0993 7.90617 16.5996 8.36217 16.8996 8.96967C17.0346 9.24117 17.0616 9.35667 17.0811 9.77592C17.1081 10.3534 17.0083 10.9662 16.8186 11.3794L16.8171 11.3802ZM9.68457 8.90067C8.87982 8.75967 8.42007 10.1382 9.03732 10.8409C9.32982 11.1739 9.59007 11.2287 9.91482 11.0262C10.2171 10.8387 10.3798 10.4862 10.3798 10.0302C10.3798 9.42117 10.1038 8.97417 9.68382 8.89917L9.68457 8.90067ZM14.5693 8.98317C13.7646 8.84217 13.3041 10.2184 13.9213 10.9227C14.2161 11.2564 14.4763 11.3127 14.8018 11.1079C15.1018 10.9204 15.2668 10.5679 15.2668 10.1119C15.2668 9.50592 14.9893 9.05742 14.5693 8.98317ZM12.4048 11.6922C12.3868 11.7477 12.3028 11.8302 12.2173 11.8744C12.0036 11.9847 11.8498 11.9464 11.6226 11.7394C11.4823 11.6134 11.4186 11.5467 11.3751 11.6794C11.3361 11.8024 11.5851 12.0492 11.7786 12.1249C11.9556 12.1962 12.0823 12.1984 12.2736 12.1174C12.4648 12.0387 12.6313 11.8249 12.6313 11.6862C12.6313 11.5572 12.4461 11.5632 12.4041 11.6937L12.4048 11.6922ZM12.1663 11.2609C12.2886 11.1522 12.3163 10.9309 12.1993 10.8124C12.0823 10.6939 11.8446 10.7127 11.7516 10.8447C11.6428 10.9992 11.7006 11.1169 11.7778 11.2422C11.8978 11.3352 12.0591 11.3547 12.1656 11.2602L12.1663 11.2609Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </span>

                  <span className=" duration-500 hover:translate-y-[-10px] whatapp_hover">
                    <a target="blank" href="https://web.whatsapp.com/">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9249 6.43907C17.7899 1.57907 11.3699 0.139067 6.40493 3.15407C1.55993 6.16907 -7.16448e-05 12.7391 3.13493 17.5841L3.38993 17.9741L2.33993 21.9041L6.26993 20.8541L6.65993 21.1091C8.35493 22.0241 10.1999 22.5491 12.0299 22.5491C13.9949 22.5491 15.9599 22.0241 17.6549 20.9741C22.4999 17.8241 23.9399 11.3891 20.9249 6.40907V6.43907ZM18.1799 16.5491C17.6549 17.3291 16.9949 17.8541 16.0799 17.9891C15.5549 17.9891 14.8949 18.2441 12.2849 17.2091C10.0649 16.1591 8.21993 14.4491 6.91493 12.4841C6.13493 11.5691 5.72993 10.3841 5.60993 9.19907C5.60993 8.14907 5.99993 7.23407 6.65993 6.57407C6.91493 6.31907 7.18493 6.18407 7.43993 6.18407H8.09993C8.35493 6.18407 8.62493 6.18407 8.75993 6.70907C9.01493 7.36907 9.67493 8.94407 9.67493 9.07907C9.80993 9.21407 9.74993 10.2191 9.14993 10.7891C8.81993 11.1641 8.75993 11.1791 8.89493 11.4491C9.41993 12.2291 10.0799 13.0241 10.7249 13.6841C11.5049 14.3441 12.2999 14.8691 13.2149 15.2591C13.4699 15.3941 13.7399 15.3941 13.8749 15.1241C14.0099 14.8691 14.6549 14.2091 14.9249 13.9391C15.1799 13.6841 15.3149 13.6841 15.5849 13.8041L17.6849 14.8541C17.9399 14.9891 18.2099 15.1091 18.3449 15.2441C18.4799 15.6341 18.4799 16.1591 18.2099 16.5491H18.1799Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              <div className="xl:w-2/12 lg:w-3/12 md:w-5/12 sm:w-4/12 w-3/12 mt-[50px] md:mt-0 lg:mt-0">
                <p className="text-[#EE0000] font_inter font-medium text-[18px] leading-[21px] ff_inter ">
                  Category
                </p>

                <p className="text-white font_inter font-normal text-[14px] leading-[16px] text-[#00000099] mt-[30px] cursor-pointer hover:translate-x-[20px] duration-500 ff_inter whitespace-nowrap">
                  Tech Solutions
                </p>
                <p className="text-white font_inter font-normal text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500 ff_inter whitespace-nowrap">
                  Digital Marketing
                </p>
                <p className="text-white font_inter font-normal text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500 ff_inter whitespace-nowrap">
                  Web Development
                </p>
                <p className="text-white font_inter font-normal text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500 ff_inter whitespace-nowrap">
                  IT Consulting
                </p>
                <p className="text-white font_inter font-normal text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500 ff_inter whitespace-nowrap">
                  Data Analytics
                </p>
              </div>

              <div className="xl:w-2/12 lg:w-3/12 md:w-5/12 sm:w-4/12 w-3/12 mt-[50px] lg:mt-0">
                <p className="font_inter font-medium text-[18px] leading-[21px] text-[#EE0000] ff_inter whitespace-nowrap">
                  Quicks Links
                </p>

                <div>
                  {[
                    { name: "Home", id: "home" },
                    { name: "About us", id: "aboutSection" },
                    { name: "Services", id: "services" },
                    { name: "Clients", id: "clients" },
                    { name: "Testimonials", id: "testimonials" },
                  ].map((item, index) => (
                    <li
                      className={`list-none leading-[16px] ff_inter hover:translate-x-[20px] duration-500 ${index === 0 ? "mt-[30px]" : "mt-[20px]"
                        }`}
                      key={item.id}
                    >
                      <ScrollLink
                        to={item.id}
                        smooth={true}
                        duration={1000}
                        className="font-normal text-[14px] text-white duration-300 cursor-pointer scroll-smooth"
                      >
                        {item.name}
                      </ScrollLink>
                    </li>
                  ))}
                </div>

              </div>

              <div className="xl:w-2/12 lg:w-3/12 md:w-5/12 sm:w-4/12 w-full mt-[50px] lg:mt-0">
                <p className="font_inter font-medium text-[18px] leading-[21px] text-[#EE0000] ff_inter">
                  Subsribe
                </p>
                ff_inter
                <p className="text-white font_inter font-normal text-[14px] leading-[16px] text-[#00000099]  cursor-pointer hover:translate-x-[20px] duration-500 opacity-[60%] ff_inter">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate
                  enim tortor nulla facilisi magna. Aenean ac commodo nisi
                  vitae.
                </p>
                <input
                  type="text"
                  placeholder="Entre your E-mail address"
                  className=" mt-[20px] mr-[10px]  bg-transparent border py-[8px] px-[15px] w-[100%] border-white rounded-[108px] text-white placeholder:text-white outline-none text-sm"
                />
                <button className="mt-4 bg-[#EE0000] text-white py-2 px-4 lg:py-2 lg:px-5 font-normal text-sm lg:text-base rounded-[50px]">
                  Subsribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EE0000] w-full">
          <div className="max-w-[1360px] px-3 mx-auto container">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="py-[20px] text-sm ff_outfit font-normal text-white text-center sm:text-start">
                ©2024 Hexabirds Private Limited. All rights reserved.
              </p>
              <p className="ff_outfit text-base font-normal text-white">
                Designed & Developed By{" "}
                <span className="text-black">HEXABIRDS</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
