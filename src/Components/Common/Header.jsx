import  { useEffect, useState } from 'react'
import Contactpopup from '../Contactpopup'
import Logo from "../../assets/Images/Png/Logo.png";
import hamburger from "../../assets/Images/Png/hamburger.png";

import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';


const Header = () => {
    
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



  function navOpen() {
    setIsNavbaropen(!isNavbaropen);
  }
  return (
    <div>
          <div className="flex flex-wrap items-center justify-between pt-5">
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
                  { name: "Home", id: "/" },
                  { name: "About us", id: "/about-us" },
                  { name: "Services", id: "/services" },
                  { name: "Clients", id: "/clients" },
                  { name: "Testimonials", id: "/testimonials" },
                ].map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.id}
                      smooth={true}
                      duration={1000}
                      className="font-normal text-sm lg:text-base text-black lg:text-black hover:text-[#EE0000] duration-300 cursor-pointer scroll-smooth"
                      onClick={() => setIsNavbaropen(false)}
                    >
                      {item.name}
                    </NavLink>
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
    </div>
  )
}

export default Header