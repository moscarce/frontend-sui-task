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
            icon: <IoCalendarClearOutline className='text-[#2463EB] text-5xl max-md:text-3xl max-lg:text-4xl' />
        },
        {
            title: '312 Herbert Macaulay,',
            description: 'Sabo, Yaba, Lagos, Nigeria',
            icon: <IoLocationOutline className='text-[#2463EB] text-5xl max-md:text-3xl max-lg:text-4xl' />
        },
        {
            title: 'Application Deadline:',
            description: 'March 12, 2025',
            icon: <FaRegClock className='text-[#2463EB] text-5xl max-md:text-3xl max-lg:text-4xl' />
        },
    ]
    return (
        <div className='bg-radial mb-24 from-[#082844] from-40% to-[#051127] flex flex-col items-center gap-16 py-16 px-8 max-md:px-5 w-full relative rounded-bl-[100px] max-md:rounded-bl-[50px]'>
            <Logo />
            <Image
                className=""
                src="/HackerHouseNew.svg"
                alt="Sui Logo"
                width={500}
                height={500}
            />
            <p className='text-[#6FE4E7] italic font-semibold text-2xl mb-5'>Road to Sui Overflow</p>
            <div className=' flex max-md:flex-col max-md:-mb-48 bg-white shadow-2xl py-5 px-20 justify-between gap-4 rounded-2xl -mb-28'>
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
