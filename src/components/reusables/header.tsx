import React from 'react'

const Header = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <div>
            <h2 className={classname ? classname : 'text-3xl font-bold text-[#2463EB]'}>{text}</h2>
        </div>
    )
}

export default Header
