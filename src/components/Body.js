import React from 'react'
import {breadcrumb} from "../constants.js"

import GrowthCard from './GrowthCard.js'
import LineBar from './LineBar.js';

import {CiSearch} from "react-icons/ci";

const Body = () => {

    // const emptyArray=Array.form({length:3});
    const emptyArrayCard = Array.from({ length: 3 });
    const emptyArrayMonth = Array.from({ length: 29 });

  return (
    <div className='bg-gray-100 col-span-10 '>
         <div className='px-12 py-[1px] bg-white'>
              {
              breadcrumb.map((data,index)=>{
                return(
                    <>
                      <span key={index} className='text-[10px] text-gray-500'>{data} &gt; </span>
                    </>
                )
              })
              }
         </div>


           <div className='px-12 py-[1px] bg-white flex gap-4 items-center pt-6'>
              <div className='bg-gray-400 h-[20px] w-[20px] rounded'></div>
              <h1 className='text-2xl font-bold'>Industry Name</h1>
              <button className='bg-red-600 px-2 py-[1px] text-[12px] rounded text-white'>+ COMPARE</button>
           </div>

           <div className='px-12 py-2 bg-white'>
               <p className='text-[12px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  </p>
               <p className='text-[12px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  </p>
           </div>




            <div className='px-6 py-2 bg-gray-100 flex gap-4 justify-center'>
                {
                   emptyArrayCard.map((index)=>{
                    return(
                         <>
                          <GrowthCard key={index}/>
                         </>
                    )
                   }) 
                }
            </div>


            <div className='px-12 py-2 bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white px-6 py-8 border-b'>
            
                <div className='border-b pb-4'>
                  <h1 className='text-lg font-bold'>Transaction Frequemcy</h1>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu </p>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  </p>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  ultrices posu ultrices posu </p>
               </div>

             <div className='flex items-center gap-4 py-4'>
                 <div className='bg-red-500 h-2 w-2 '></div><span className='text-[10px] font-bold'>NEW CUSTOMERS</span>
                 <div className='bg-black h-2 w-2 '></div><span className='text-[10px] font-bold'>NEW CUSTOMERS</span>
             </div>

             <div className='flex'>
                 {
                   emptyArrayMonth.map(()=>{
                    return(
                        <>
                          <LineBar/>
                        </>
                    )
                   })
                 }    
             </div>


             <div className='flex justify-between py-4'>
                <p className='text-[12px] text-gray-500'>2023 JULY 01</p>
                <p className='text-[12px] text-gray-500'>2023 JULY 31</p>
             </div>

            </div>
           </div>



           <div className='px-12 py-2 bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white px-6 py-8 border-b'>
            
                <div className='border-b pb-4'>
                  <h1 className='text-lg font-bold'>Transaction Frequemcy</h1>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu </p>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  </p>
              </div>

             <div className='flex items-center gap-4 py-4'>
                 <div className='bg-yellow-500 h-2 w-2 '></div><span className='text-[10px] font-bold'>TIER 1</span>
                 <div className='bg-red-500 h-2 w-2 '></div><span className='text-[10px] font-bold'>TIER 2</span>
                 <div className='bg-blue-500 h-2 w-2 '></div><span className='text-[10px] font-bold'>TIER 3</span>
             </div>

           

             <div className='flex justify-between py-4'>
                <p className='text-[12px] text-gray-500'>2023 JULY 01</p>
                <p className='text-[12px] text-gray-500'>2023 JULY 31</p>
             </div>

            </div>
           </div>



           <div className='px-12 py-2 bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white px-6 py-8 border-b'>
            
                <div className='border-b pb-4'>
                  <h1 className='text-lg font-bold'>Transaction Frequemcy</h1>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu </p>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  </p>
              </div>

             <div className='flex items-center gap-4 py-4'>
                 <div className='bg-yellow-500 h-2 w-2 '></div><span className='text-[10px] font-bold'>TIER 1</span>
                 <div className='bg-red-500 h-2 w-2 '></div><span className='text-[10px] font-bold'>TIER 2</span>
                 <div className='bg-blue-500 h-2 w-2 '></div><span className='text-[10px] font-bold'>TIER 3</span>
             </div>

           

             <div className='flex justify-between py-4'>
                <p className='text-[12px] text-gray-500'>2023 JULY 01</p>
                <p className='text-[12px] text-gray-500'>2023 JULY 31</p>
             </div>

            </div>
           </div>



          <div className='flex flex-col justify-center py-12 px-12'>

              <h1 className='flex justify-center text-center text-xl font-bold'>Brands Under the Spotlight</h1>
             
              <p className='flex justify-center px-[100px] text-[10px] py-2 text-center'>
                 ante ipsum primis in faucibus orci luctus et ante ipsum primis
                 in faucibus orci luctus et ante ipsum primis in faucibus orci
                luctus et ante ipsum primis in faucibus orci luctus et 
              </p>

              <div className='flex items-center justify-center px-2'>
                <CiSearch className='bg-white rounded-l h-10'/> <input type="text" placeholder='Search by company or beands' className='rounded-r w-[500px] pr-8 pl-2 py-2  bg-white focus:outline-none placeholder:text-[14px]'/>
             </div>


          </div>


    </div>
  )
}

export default Body
