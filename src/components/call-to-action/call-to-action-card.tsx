import React from 'react'
import { MdArrowForward, MdPeopleOutline } from 'react-icons/md'

const CallToActionCard = () => {
    return (
        <div className='p-10 shadow rounded-2xl flex flex-col justify-center items-center'>
            <MdPeopleOutline size={50} color='#38D2D7' />
            <p>To apply as an<span className='font-bold'> Individual</span>, click here</p>
            <p className='flex px-4 py-2 items-center justify-center rounded-3xl bg-[#09183A] text-[#F9F9F9} gap-2'><a href="#" target='blank' className='text-[#F9F9F9}'>Individual</a> <span><MdArrowForward color='#F9F9F9' /></span></p>

        </div>
    )
}

export default CallToActionCard
