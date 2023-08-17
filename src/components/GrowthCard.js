import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"

const GrowthCard = ({key}) => {
    return (

        <div key={key} className='px-4 py-2 bg-white w-[214px] h-[170px] rounded'>
            <div className='flex justify-between'>
                <h1>GROWTH RATE</h1>
                <button className='bg-green-500 px-1 rounded-full'><AiOutlineArrowUp /></button>
            </div>
            <h1 className='text-[30px] flex items-center  justify-center py-6'>+ 99.99 %</h1>
        </div>

    )
}

export default GrowthCard
