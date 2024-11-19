import Clientfeeds from "../Components/Clientfeeds";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import SubHeader from "../Components/Common/SubHeader";

const Testimonials = () => {
  return (
    <div>
         <div className="bg-client_bg_img  pt-5  pb-[50px] md:pb-[70px] lg:pb-[100px] bg-black">
        <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
          <div className="shadow-lg rounded-[20px] border  px-4 lg:px-6 bg-white py-4 lg:py-6">
            {" "}
            <SubHeader />
            <Header />
          </div>
          <div className="flex flex-col justify-center items-center mt-14">
            <div className="flex items-center gap-[10px]">
              <div className="w-2 h-2 bg-[#EE0000] rounded-[50%]"></div>{" "}
              <p className=" text-[16px] lg:text-xl ff_inter text-white">
              Testimonials
              </p>
            </div>
            <p className="text-[25px] md:text-[35px] lg:text-[48px] ff_jomolhari text-white mt-[20px] lg:mt-[30px] md:w-[606px] text-center lg:leading-[63px]">
            Your Trust, Our Greatest Achievement
            </p>
          </div>
        </div>
      </div>
      <Clientfeeds />
    <Footer/>

    </div>
  );
};

export default Testimonials;
