import React from 'react'
import Image from "next/image";
import Header from '../reusables/header';
import { FaCube } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';


const AboutSection = () => {
    return (
        <div className='my-32 px-52'>
            <div className='grid grid-cols-2'>

                <div className='relative'>

                    <Image
                        className="mb-24 bg-[#0A1739] object-contain absolute top-0 left-0 bottom-0 right-0"
                        src="/about-sui-image.svg"
                        alt="Sui Logo"
                        width={100}
                        height={0}
                        style={{ width: "400px", height: "100%", borderRadius: "100%", }}
                    />
                    <p className='absolute bg-[#ECECEC] p-1 px-3 rounded-[4px] top-[10%] font-semibold flex items-center gap-2'><span><FiBox /></span><span>Web 3.0</span></p>
                    <p className='absolute bg-[#ECECEC] p-1 px-3 rounded-[4px] bottom-[30%] right-[30%] font-semibold flex items-center gap-2'><span><FiBox /></span><span>Blockchain Tech</span></p>
                </div>
                <div>
                    <Header text='About SUI Lagos Hacker House' />
                    <div className='text-xl mt-6'>
                        <span className='font-bold text-[#2463EB]'>Sui Lagos Hacker House </span>
                        is a 6-day event that is designed to bring together developers, engineers, builders, innovators, and blockchain enthusiasts who are interested in building on the Sui blockchain.
                    </div>
                    <div className='text-xl mt-4'>
                        The event will feature workshops, mentorship and coaching sessions, hacking, and networking opportunities to encourage innovation and collaboration. Attendees will learn about the Sui blockchain, develop skills to build robust solutions using Sui and prepare for the <a href='https://sui.io/overflow' target='blank' className='font-bold text-[#2463EB] underline'>Sui Overflow 2023 Hackathon</a>
                        , a global competition with over $500,000 in combined prizes.
                    </div>
                    <div className='text-xl mt-4'>
                        The Sui Lagos Hacker House is implemented by <a href='https://semicolon.africa/' target='blank' className='font-bold underline'>Semicolon</a> and sponsored by <a href='https://sui.io/about' className='font-bold underline'>Sui Foundation</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
