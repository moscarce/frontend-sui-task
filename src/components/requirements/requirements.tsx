import Image from 'next/image'
import React from 'react'
import Header from '../reusables/header'
import HeaderAndList from '../reusables/header-and-list'

const Requirements = () => {
    return (
        <div className="p-10 max-md:p-5 rounded-2xl mb-20 grid gap-6 lg:grid-cols-2 overflow-hidden md:mx-40 place-items-center">
            <div className="">
                <Image
                    src="/participation-requirement-image.png"
                    alt="Eligibility Criteria"
                    width={200}
                    height={200}
                    style={{ borderRadius: "20px", width: '500px', height: '300px' }}

                />
            </div>
            <div className="">
                <HeaderAndList
                    title='Participation Requirements'
                    listItems={[
                        'Teams must be physically present at the venue in Lagos throughout the duration of the hacker house (March 24-29).',
                        'Teams should ensure they can be fully engaged and attentive to their projects throughout the period.',
                        'All participants will be required to adhere to the event guidelines and code of conduct.',
                        'TIntellectual property created by teams during the hacker house will be retained by those teams.',
                    ]}
                    headerClassName='text-center text-3xl font-bold text-[#2463EB]'
                    icon={<div className='text-white italic bg-[#05B6D3] rounded-4xl px-1 font-bold'>✓</div>}
                />

            </div>

        </div>
    )
}

export default Requirements
