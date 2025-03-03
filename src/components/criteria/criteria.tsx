import React from "react";
import Header from "../reusables/header";
import Image from "next/image";

const Criteria = () => {
    return (
        <div className="mx-auto mb-20 max-w-5xl rounded-2xl bg-[#0A1739] p-8 md:p-10">
            <div className="flex flex-col items-center justify-between md:flex-row">
                {/* Left Content */}
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

                {/* Right Image */}
                <div className="mt-8 flex justify-center md:mt-0 md:w-1/2 md:justify-end">
                    <Image
                        src="/eligibility-image.svg"
                        alt="Eligibility Criteria"
                        width={400}
                        height={300}
                        className="h-auto w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Criteria;
