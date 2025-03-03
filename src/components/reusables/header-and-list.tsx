import React from 'react'
import Header from './header'
import { MdCircle } from 'react-icons/md';

interface Props {
    title: string;
    listItems: string[];
    className?: string; // Optional prop for additional styling classes for the header and list items.
    icon?: React.ReactNode;
}

const HeaderAndList = ({ title, listItems, className, icon }: Props) => {
    return (
        <div className={className}>
            <Header text={title} />
            <div>
                {listItems.map((item, index) => (
                    <div key={index} className='mt-4 flex gap-2 items-center pl-1'>
                        <div>
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
