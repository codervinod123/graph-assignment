import React from 'react'
import User from "../assets/vinod.png"
import {CiSearch} from "react-icons/ci";


const Title=()=>{
    return(
        <>
           <div className='h-[22px] w-[22px] rounded-full bg-red-700'></div>
           <span><b>Market</b>Lens.ai</span>
        </>
    )
}

const Header = () => {
  return (
    <div >

        <div className='items-center py-3 flex justify-between pr-8 '>
        <div className='flex items-center gap-2 pr-8'>
           <Title/>
        </div>

        <div className='flex items-center'>
           <CiSearch className='bg-gray-100 rounded-l h-8'/> <input type="text" placeholder='Search by company or beands' className='rounded-r w-[500px] pr-8 pl-2 py-1 bg-gray-100 focus:outline-none placeholder:text-[14px]'/>
        </div>

        <div className='flex gap-[4px] border border-gray-100 p-[2px] rounded'>
            <div>
                <img className='rounded' width={"25px"} src={User} alt="user" />
            </div>
            <div>
                <p className='text-[12px]'>Vinod P</p>
                <p className='text-[8px]'>vinodpr73@gmail.com</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header
