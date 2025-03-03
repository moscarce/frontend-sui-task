import React from 'react'
import Image from "next/image";
import Header from '../reusables/header';


const AboutSection = () => {
    return (
        <div className='mt-24 px-32'>
            <div className='relative'>
                <Image
                    className="mb-24 rounded-[500px] bg-[#0A1739]"
                    src="/about-sui-image.svg"
                    alt="Sui Logo"
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <Header text='About SUI Lagos Hacker House' />
            </div>
        </div>
    )
}

export default AboutSection
