import React from 'react'

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const DetailWithIcon = ({ icon, title, description }: Props) => {
    return (
        <div className='flex gap-4 items-center'>
            <div>{icon}</div>
            <div>
                <h2 className={'text-lg max-sm:text-sm font-bold'}>{title}</h2>
                <p className='text-lg max-sm:text-sm font-bold'>{description}</p>
            </div>
        </div>
    )
}

export default DetailWithIcon
