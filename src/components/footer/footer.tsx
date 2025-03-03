
import React from 'react'
import Logo from '../hero-section/Logo'
import HeaderAndList from '../reusables/header-and-list'
import { MdCircle } from 'react-icons/md'
import Header from '../reusables/header'

const Footer = () => {
    return (
        <div className='bg-radial from-[#082844] from-40% to-[#051127] py-16 md:px-40 p-10 max-md:p-5 max-md:px-5 w-full text-[#DEE1E5]'>
            <div className='grid lg:grid-cols-2'>
                <div>
                    <HeaderAndList
                        title='Logistics'
                        listItems={[
                            'Accommodation will be provided for teams near the hacker house venue in Lagos',
                            'Meals will be provided'
                        ]}
                        icon={< MdCircle size={6} color='#DEE1E5' />}
                        className='text-[#DEE1E5]'
                        headerClassName='text-[#39D1D6] text-2xl font-bold'
                    />
                </div>
                <div className='max-lg:my-6'>
                    <Header text='Resources and Support' classname='text-[#39D1D6] text-2xl font-bold' />
                    <p className='py-5'>Semicolon is providing free training on Sui Move, sponsored by the Sui
                        Foundation. It isn’t too late to register for the current round of classes. Click on
                        this link to register:<a href="https://bit.ly/SC-SUI-Training" target='blank' className=' underline'>https://bit.ly/SC-SUI-Training</a></p>
                    <p>Semicolon is a workforce development company that is solving the problem
                        of youth unemployment by training software engineers and techpreneurs.
                        Through our one-year techpreneurship program, we help individuals develop
                        required skills to compete as software engineers in the global market. To
                        learn more about Semicolon, please visit <a href="www.semicolon.africa" target='blank' className='underline'>www.semicolon.africa</a></p>
                </div>
            </div>
            <div className='mt-5 max-lg:flex justify-center'>
                <Logo />
            </div>
        </div>
    )
}

export default Footer
