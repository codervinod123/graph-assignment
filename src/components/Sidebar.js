import React from 'react'
import {TfiWorld} from "react-icons/tfi"
import {CiLocationOn} from "react-icons/ci"

const Sidebar = () => {
  return (
    <div className='bg-white W-[300px] pt-12 flex flex-col justify-between '>
        <div className=''>
            <div className='py-2 px-2'>
               <ul className='flex flex-col gap-3 border-b pb-4'>
                 <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-200 px-2 py-2 rounded hover:text-red-500 '><TfiWorld className=''/><li className='text-[12px]'>Home</li></div>
                 <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-200 px-2 py-2 rounded hover:text-red-500'><TfiWorld/><li className='text-[12px]'>Industries</li></div>
                 <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-200 px-2 py-2 rounded hover:text-red-500'><TfiWorld/><li className='text-[12px]'>Brands</li></div>
              </ul>
            </div>

            <div className='py-2 px-2'>
               <ul className='flex flex-col gap-3 border-b pb-4'>
                 <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-200 px-2 py-2 rounded hover:text-red-500'><TfiWorld/><li className='text-[12px]'>My dashboard-1</li></div>
                 <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-200 px-2 py-2 rounded hover:text-red-500'><TfiWorld/><li className='text-[12px]'>My dashboard-2</li></div>
              </ul>
            </div>

            <div className='py-2 px-2'>
               <ul className='flex flex-col gap-3 pb-4'>
                 <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-200 px-2 py-2 rounded hover:text-red-500'><TfiWorld/><li className='text-[12px]'>Subscription & Plans</li></div>
                 <div className='flex items-center gap-2 cursor-pointer hover:bg-slate-200 px-2 py-2 rounded hover:text-red-500'><TfiWorld/><li className='text-[12px]'>Account Setting</li></div>
              </ul>
            </div>


            <div className=' py-2 px-6'>
              <div className='flex gap-2'>
               <CiLocationOn/><span className='text-[12px] text-red-600 font-semibold'>INDIA</span>
             </div>
             <div className="w-30">
                <p className='text-[10px]'>India has succesfully landed the chandr yan 3 on moon  yan 3 on moon  yan </p>
            </div>
          </div> 

        </div>

        {/* <div className=' py-2 px-2'>
            <div className='flex gap-2'>
               <CiLocationOn/><span className='text-[12px]'>INDIA</span>
            </div>
            <div className="w-30">
               <p className='text-[10px]'>enean  venenati</p>
               <p className='text-[10px]'>enean  venenati</p>
              
            </div>
        </div> */}

    </div>
  )
}

export default Sidebar
