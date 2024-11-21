/* eslint-disable react/no-unescaped-entities */

import Slider from "react-slick";
import BlackMan from "../assets/Images/Png/BlackMan.png";
import { Arrowred, Roundedred, Star } from './Common/Icons';
import { useRef } from "react";

function Clientfeeds() {
    const btnRef = useRef(null)
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
        <div>
            <section className=' md:py-[50px] py-[40px] '>
                <div className="max-w-[1360px] px-3 mx-auto container">
                    <p className="text-center font-normal text-[20px] ff_outfit">
                        Our Client’s
                    </p>
                    <p className="text-[30px] md:text-[38px] lg:text-[48px] font-medium leading-[30px] md:leading-[50px] lg:leading-[62px] text-center mt-[20px] lg:mt-[30px] ff_outfit">
                        Insights from Our Happy Clients
                    </p>
                    <p className="max-w-[898px] text-center mx-auto text-sm font-normal ff_outfit opacity-[60%] mt-[30px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    {/* <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 mt-[50px]"> */}
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
                                    <button className="text-[#EE0000] group-hover:text-white  text-sm font-medium mt-[15px]">
                                        Read More
                                    </button>
                                </div>
                                
                            </div>
                        ))}


                    </Slider>
                    {/* </div> */}


                    <div className='flex items-center justify-center gap-[50px] mt-[50px]'>
                        <span onClick={() => btnRef.current.slickPrev()} className="text-red-600 hover:text-red-800">   <Roundedred/></span>
                        <span onClick={() => btnRef.current.slickNext()} className="text-red-600 hover:text-red-800">   <Arrowred /></span>




                    </div>
                </div>
            </section>

        </div>
    );
}

export default Clientfeeds;
