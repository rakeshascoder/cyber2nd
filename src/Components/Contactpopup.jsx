import React from "react";

function Contactpopup() {
  const formHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center relative z-30">
      <div className="bg-white rounded-2xl  !max-w-[772px] p-[50px] overflow-x-scroll mx-2">
        <div className="text-center mb-1 sm:mb-5">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-red-600"></div>
            <p className="text-sm sm:text-lg  font-medium ms-2 ">
              Send Us A Message
            </p>
          </div>
          <h2 className="text-base sm:text-2xl lg:text-3xl font-normal text-red-600 mt-2 sm:mt-5 ff_jomolhari">
            Get in touch With Us Today
          </h2>
          <p className="text-gray-500 my-3 sm:my-3 font-normal text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            Lorem Ipsum has been the industry's standard
          </p>
        </div>

        <form onSubmit={formHandle} className="space-y-2 sm:space-y-5 ff_inter">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-5">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg p-2 sm:p-3 w-full focus:outline-none text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-2 sm:p-3 w-full focus:outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border border-gray-300 rounded-lg p-2 sm:p-3 w-full focus:outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-2 sm:p-3 w-full focus:outline-none text-sm sm:text-base"
            />
          </div>
          <textarea
            placeholder="Type your message"
            rows="2"
            className="border border-gray-300 rounded-lg p-2 sm:p-3 w-full focus:outline-none text-sm sm:text-base"
          ></textarea>

          <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-4">
            <input
              type="radio"
              id="saveInfo"
              className="mr-2 accent-[#EE0000] border-[#EE0000]"
            />
            <label htmlFor="saveInfo">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          <button
            type="submit"
            className="mt-[15px] sm:mt-[30px] font-normal text-base p-[8px] sm:p-[12px] lg:p-[18px] bg-[#EE0000] text-white rounded-[10px] "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contactpopup;
