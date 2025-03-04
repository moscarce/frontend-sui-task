import React from 'react'
import Header from './header'
import { MdCircle } from 'react-icons/md';

interface Props {
    title: string;
    listItems: string[];
    className?: string; // Optional prop for additional styling classes for the header and list items.
    icon?: React.ReactNode;
    headerClassName?: string;
}

const HeaderAndList = ({ title, listItems, className, icon, headerClassName }: Props) => {
    return (
        <div className={className}>
            <div className='mb-3'>

                <Header text={title} classname={headerClassName} />
            </div>
            <div>
                {listItems.map((item, index) => (
                    <div key={index} className='mt-2 flex gap-2 items-center max-md:items-start pl-1'>
                        <div className='max-md:pt-2'>
                            {icon ? icon : < MdCircle size={6} color='#2463EB' />}
                        </div>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeaderAndList
