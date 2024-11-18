import {
  Callicon,
  Facebookicon,
  Linkedinicon,
  Locationicons,
  Messageicon,
  Twittericon,
} from "./Icons";

const SubHeader = () => {
  return (
    <div>
      {" "}
      <div className="flex md:flex-row items-center justify-between space-y-4 md:space-y-0">
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
    </div>
  );
};

export default SubHeader;
