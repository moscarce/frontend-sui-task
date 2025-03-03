import React from 'react'
import Image from "next/image";


const Logo = () => {
    return (
        <div>
            <div className='flex gap-4'>
                <Image
                    src="/semicolon-logo.svg"
                    alt="Sui Logo"
                    width={120}
                    height={100}
                />
                <p className='text-xl text-white'>|</p>
                <Image
                    src="/sui-logo.svg"
                    alt="Sui Logo"
                    width={50}
                    height={50}
                />
            </div>
        </div>
    )
}

export default Logo
