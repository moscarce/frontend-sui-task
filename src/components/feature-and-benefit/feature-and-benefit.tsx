import React from 'react'
import HeaderAndList from '../reusables/header-and-list'

const FeatureAndBenefit = () => {
    return (
        <div className='grid lg:grid-cols-2 mb-32'>
            <div className=" py-16 lg:pl-44 md:pl-20 px-5  bg-[#DBE9FE]">
                <HeaderAndList
                    title={'Features of the Hacker House'}
                    listItems={[
                        'Brainstorming and Ideation Sessions',
                        'Workshops and Tutorials',
                        "Coaching and Mentorship from Move Experts, including the Sui Foundation's Head of Developer Relations",
                        'Access to Resources',
                        'Networking Opportunities',
                        'Solution Demonstrations',
                    ]} />
            </div>
            <div className=" py-16 lg:pr-44 md:px-20 px-5 bg-[#FBFCFF] ">
                <HeaderAndList
                    title={'Benefits for Participating Teams'}
                    listItems={[
                        'Access Mentorship & Coaching',
                        'Engage with the Sui Foundation',
                        "Hands-On Learning",
                        'Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses',
                        'Showcase your skills',
                        'Connect with other developers & potential mentors and partners',
                        'All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100',
                        'Participants would build robust solutions using Sui and prepare for the Sui Overflow 2025 Hackathon, a virtual global competition with over $500,00 in combined prizes.',
                    ]} />
            </div>
        </div>
    )
}

export default FeatureAndBenefit
