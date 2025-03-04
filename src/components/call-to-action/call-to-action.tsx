import React from 'react'
import CallToActionCard from './call-to-action-card'
import { MdArrowForward, MdPeopleOutline } from 'react-icons/md'

const CallToAction = () => {
    return (
        <div className='flex flex-col items-center justify-center my-16'>
            <div className='flex gap-20 max-lg:gap-10 max-md:flex-col mb-6 w-full justify-center items-center relative'>
                <div className='absolute bg-[#EAF2FF] top-11 bottom-11 right-0 left-0 -z-20'></div>
                <div className='p-10 shadow rounded-2xl flex flex-col justify-center items-center bg-[#F7FAFF] mx-5 max-w-[300px]' >
                    <MdPeopleOutline size={50} color='#38D2D7' />
                    <p className='my-4 text-center'>To apply as an<span className='font-bold'> Individual</span>, click here</p>
                    <p className='flex px-4 py-2 items-center justify-center rounded-3xl bg-[#09183A] text-[#F9F9F9} gap-2'><a href="#" target='blank' className='text-[#F9F9F9} | link'>Individual</a> <span><MdArrowForward color='#F9F9F9' /></span></p>
                </div>
                <div className='p-10 shadow rounded-2xl flex flex-col justify-center items-center bg-[#F7FAFF] mx-5 max-w-[300px]'>
                    <MdPeopleOutline size={50} color='#38D2D7' />
                    <p className='my-4 text-center'>To apply as a<span className='font-bold'> Team,</span>, click here</p>
                    <div className='flex px-4 py-2 items-center justify-center rounded-3xl bg-[#09183A] text-[#F9F9F9} gap-2'><a href="#" target='blank' className='text-[#F9F9F9} | link'>Team</a> <span><MdArrowForward color='#F9F9F9' /></span></div>
                </div>
            </div>
            <p className='mx-5'>We will inform applicants if they were selected by <span className='font-semibold'>Monday, March 17, 2025.</span></p>
        </div>
    )
}

export default CallToAction
