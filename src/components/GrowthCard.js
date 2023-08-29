import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"

const GrowthCard = ({key,data}) => {
    console.log(data);
    return (

        <div key={key} className='px-4 py-2 bg-white w-[250px] h-[170px] rounded'>
            <div className='flex justify-between'>
                <h1>{data.name}</h1>
                <button className='bg-[green] px-1 py-1 rounded-full'><AiOutlineArrowUp className='text-[20px]'/></button>
            </div>
            <h1 className='text-[35px] flex items-center  justify-center py-6'>+ {data.percantage}</h1>
        </div>

    )
}

export default GrowthCard
