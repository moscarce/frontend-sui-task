import React from 'react'
import Logo from './Logo'
import Image from "next/image";
import { IoCalendarClearOutline, IoLocationOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';
import DetailWithIcon from '../reusables/detail-with-icon';


const HeroSection = () => {
    const infos = [
        {
            title: 'March 24-29,',
            description: '2025',
            icon: <IoCalendarClearOutline className='text-[#2463EB] text-5xl' />
        },
        {
            title: '312 Herbert Macaulay,',
            description: 'Sabo, Yaba, Lagos, Nigeria',
            icon: <IoLocationOutline className='text-[#2463EB] text-5xl' />
        },
        {
            title: 'Application Deadline:',
            description: 'March 12, 2025',
            icon: <FaRegClock className='text-[#2463EB] text-5xl' />
        },
    ]
    return (
        <div className='bg-radial from-[#082844] from-40% to-[#051127] flex flex-col items-center gap-16 py-16 px-8 max-md:px-5 w-full relative rounded-bl-[100px]'>
            <Logo />
            <Image
                className="mb-24"
                src="/HackerHouseNew.svg"
                alt="Sui Logo"
                width={500}
                height={500}
            />
            <div className='flex bg-white lg:absolute bottom-[-10%] mx-auto max-lg:flex-col rounded-2xl shadow-2xl justify-arround px-20 gap-20 py-5 max-md:px-5 max-md:gap-5'>
                {
                    infos.map((info, index) => (
                        <DetailWithIcon icon={info.icon} title={info.title} description={info.description} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default HeroSection
