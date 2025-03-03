import React from 'react'

const Header = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <div className={classname ? classname : ''}>
            <h2 className='text-3xl font-bold text-[#2463EB]'>{text}</h2>
        </div>
    )
}

export default Header
