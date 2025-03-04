import React from "react";
import Header from "../reusables/header";
import Image from "next/image";

const Criteria = () => {
    return (
        <div className="mb-10  max-sm:mb-10 md:p-10 max-md:p-5 xl:mx-52">
            <div className="flex flex-col items-center justify-between lg:py-10 lg:flex-row  rounded-2xl bg-[#0A1739] p-4 lg:pl-16 lg:pr-12">
                <div className="md:w-1/2 md:pr-6">
                    <Header
                        text="Eligibility Criteria"
                        classname="text-2xl font-bold text-[#05B6D3]"
                    />
                    <h2 className="mt-4 text-md font-semibold text-white">
                        <span className="text-[#05B6D3]">Team Size:</span> Maximum of 4
                        (individuals are eligible to apply but will be paired to make the team)
                    </h2>
                    <h2 className="mt-4 text-md font-semibold text-white">
                        <span className="text-[#05B6D3]">Participants:</span> Open to
                        developers, designers, entrepreneurs, and blockchain enthusiasts
                    </h2>
                </div>
                <div className="mt-8 flex justify-center lg:relative md:w-1/2 lg:-mr-28">
                    <Image
                        src="/eligibility-image.svg"
                        alt="Eligibility Criteria"
                        width={500}
                        height={500}
                        className="object-cover lg:absolute lg:z-10 lg:right-[-500px] lg:bottom-0 lg:left-0 lg:top-[-220px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Criteria;
