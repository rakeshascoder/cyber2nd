import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

export default function Accordian() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? null : value);

    const renderIcon = (value) => {
        return open === value ? "-" : "+";
    };

    return (
        <div className="container mx-auto px-3  max-w-[1360px] lg:py-[80px]  sm:py-[40px] py-[20px]">
              <div className="flex items-center justify-center ">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#EE0000]"></div>
                  <p className="text-xl font-normal ms-2 ff_inter">FAQS</p>
                </div>
                <p className=" text-[30px] lg:text-[48px] font-normal text-[#EE0000] max-w-[954px] text-center mx-auto mt-[30px] ff_jomolhari">A Dedication to Supporting All Aspects of Your Life.</p>
            <div className="flex flex-col md:flex-row justify-between sm:my-[40px] my-[30px] lg:my-[80px]">
                <div className="w-full md:w-6/12 px-2">
                    <Accordion expanded={open === 1} className="mb-5 !rounded-[10px] !border-[0.5px] bg-white p-2 lg:p-[12px]">
                        <AccordionSummary
                            onClick={() => handleOpen(1)}
                            className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
                        >
                            <div className="flex items-center"><span className="text-[20px] lg:text-2xl me-2 lg:me-5 mb-2">
                                {renderIcon(1)}
                            </span>
                            Frequently Asked Questions?</div>
                        </AccordionSummary>
                        <AccordionDetails className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                            tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                            volutpat placerat urna consectetur sollicitudin maecenas viverra.
                            Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
                            auctor quis ipsum integer placerat.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={open === 2} className="mb-5 !rounded-[10px] !border-[0.5px] bg-white p-2 lg:p-3">
                        <AccordionSummary
                            onClick={() => handleOpen(2)}

                            className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
                        >
                               <div className="flex items-center"><span className="text-[20px] lg:text-2xl me-2 lg:me-5 mb-2">
                                {renderIcon(1)}
                            </span>
                            Frequently Asked Questions?</div>
                        </AccordionSummary>
                        <AccordionDetails className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7 ff_inter">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                            tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                            volutpat placerat urna consectetur sollicitudin maecenas viverra.
                            Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
                            auctor quis ipsum integer placerat.
                        </AccordionDetails>
                    </Accordion>

                    {/* Add more accordions as needed */}
                </div>
                <div className="w-full md:w-6/12 px-2">
                    <Accordion expanded={open === 3} className="mb-5 rounded-[10px] bg-white p-2 lg:p-[12px]">
                        <AccordionSummary
                            onClick={() => handleOpen(3)}

                            className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
                        >
                               <div className="flex items-center"><span className="text-[20px] lg:text-2xl me-2 lg:me-5 mb-2">
                                {renderIcon(1)}
                            </span>
                            Frequently Asked Questions?</div>
                        </AccordionSummary>
                        <AccordionDetails className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                            tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                            volutpat placerat urna consectetur sollicitudin maecenas viverra.
                            Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
                            auctor quis ipsum integer placerat.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={open === 4} className="mb-5 !rounded-[10px] !border-[0.5px]  p-2 lg:p-3">
                        <AccordionSummary
                            onClick={() => handleOpen(4)}

                            className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
                        >
                               <div className="flex items-center"><span className="text-[20px] lg:text-2xl me-2 lg:me-5 mb-2">
                                {renderIcon(1)}
                            </span>
                            Frequently Asked Questions?</div>
                        </AccordionSummary>
                        <AccordionDetails className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7 ff_inter">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                            tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                            volutpat placerat urna consectetur sollicitudin maecenas viverra.
                            Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
                            auctor quis ipsum integer placerat.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={open === 5} className="mb-5 !rounded-[10px] !border-[0.5px] bg-white p-2 lg:p-3">
                        <AccordionSummary
                            onClick={() => handleOpen(5)}

                            className="border-b-0 transition-colors flex justify-start items-center w-full text-left text-[14px] lg:text-[16px] font-medium"
                        >
                               <div className="flex items-center"><span className="text-[20px] lg:text-2xl me-2 lg:me-5 mb-2">
                                {renderIcon(1)}
                            </span>
                            Frequently Asked Questions?</div>
                        </AccordionSummary>
                        <AccordionDetails className="mt-2 text-[12px] lg:text-[14px] text-gray-600 font-inter leading-[17px] ms-[18px] lg:ms-7 ff_inter">
                            Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                            tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                            volutpat placerat urna consectetur sollicitudin maecenas viverra.
                            Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
                            auctor quis ipsum integer placerat.
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </div>
    );
}
