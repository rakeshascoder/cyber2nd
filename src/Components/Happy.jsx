

import umbrella from "../assets/Images/Png/umbrella.png";
import msp from "../assets/Images/Png/msp.png";
import panda from "../assets/Images/Png/panda.png";

function Happy() {
  return (
    <div>
      <section>
        <div className="px-3 mx-auto my-[50px]">
          <p className="text-[28px] font-medium ff_outfit text-center mb-[30px] md:mb-[45px] lg:mb-[50px]">
            Our Happy Client's
          </p>
          <div className="relative overflow-hidden">
            <div className="marquee flex items-center gap-[50px]">
              <img src={panda} alt="panda" />
              <img src={umbrella} alt="umbrella" />
              <img src={panda} alt="panda" />
              <img src={msp} alt="msp" />
              <img src={umbrella} alt="umbrella" />
              <img src={msp} alt="msp" />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .marquee {
          display: flex;
          animation: scroll 10s linear infinite;
          white-space: nowrap;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Happy;

