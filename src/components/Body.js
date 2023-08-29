import React from 'react'
import {breadcrumb} from "../constants.js"
import { growthData } from '../constants.js';
import { options } from '../constants.js';

import GrowthCard from './GrowthCard.js'
import LineBar from './LineBar.js';

import {CiSearch} from "react-icons/ci";
import LineChart from './Linechart.js';
import Brandgrowth from './Brandgrowth.js';
import HorizontalLineChart from "./HorizontalLineChart.js"

import ColumnChart from './ColumnChart.js';
import Circle from './Circle.js';

const Body = () => {

    // const emptyArray=Array.form({length:3});
    const emptyArrayCard = Array.from({ length: 3 });
    const emptyArrayMonth = Array.from({ length: 29 });

  return (
    <div className='bg-gray-100 w-[700px] '>
         <div className='px-6 py-[1px] bg-white'>
              {
              breadcrumb.map((data,index)=>{
                return(
                    <>
                      <span key={index} className='text-[7px] text-gray-500 font-semibold'>{data} &gt; </span>
                    </>
                )
              })
              }
         </div>


           <div className='px-6 py-[1px] flex gap-4 items-center pt-6  bg-gradient-to-b from-white from-50% via-gray-100'>
              <div className='bg-gray-400 h-[20px] w-[20px] rounded'></div>
              <h1 className='text-2xl font-bold'>Industry Name</h1>
              <button className='bg-red-600 px-3 py-[4px] text-[9px] rounded text-white'>+ &nbsp; COMPARE</button>
           </div>

           <div className='px-6 py-2 bg-gray-100 '>
               <p className='text-[12px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  </p>
               <p className='text-[12px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;  </p>
           </div>




            <div className='px-6 py-2 bg-gray-100 flex gap-4 justify-center'>
                {
                   growthData.map((data,index)=>{
                    return(
                         <>
                          <GrowthCard key={index} data={data}/>
                         </>
                    )
                   }) 
                }
            </div>


            <div className='px-6 py-2 bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white py-3 px-6 border-b'>
            
                <div className='border-b pb-4 pt-6'>
                  <h1 className='text-lg font-semibold'>Transaction Frequemcy</h1>
                  <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu ere cubilia curae  ultrices posu</p>
               </div>

             <div className='flex items-center gap-4 py-4'>
                 <div className='bg-red-500 h-[10px] w-[10px] rounded-sm '></div><span className='text-[10px] font-bold'>NEW CUSTOMERS</span>
                 <div className='bg-black h-[10px] w-[10px] rounded-sm '></div><span className='text-[10px] font-bold'>NEW CUSTOMERS</span>
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


             <div className='flex justify-between '>
                <p className='text-[12px] text-gray-500'>2023 JULY 01</p>
                <p className='text-[12px] text-gray-500'>2023 JULY 31</p>
             </div>

            </div>
           </div>


{/* ================================================== */}


           <div className='px-6 py-2 bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white py-3 px-6 border-b'>
            
                <div className='border-b pb-4 pt-6'>
                  <h1 className='text-lg font-semibold'>Tier-wise Growth</h1>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu cubilia curae  ultrices posu curae  ultrices posu cubilia curae  ultrices posu  curae  ultrices posu cubilia curae  ultrices posu </p>
               </div>

               <div className='flex items-center gap-4 pt-4 px-4'>
                 <div className='bg-yellow-500 h-3 w-3 rounded-sm '></div><span className='text-[10px] font-bold'>TIER 1</span>
                 <div className='bg-red-500 h-3 w-3 rounded-sm '></div><span className='text-[10px] font-bold'>TIER 2</span>
                 <div className='bg-blue-500 h-3 w-3 rounded-sm '></div><span className='text-[10px] font-bold'>TIER 3</span>
             </div>

           
             <div>
                <LineChart />
             </div>

             <div className='flex justify-between'>
                <p className='text-[12px] text-gray-500'>2023 JULY 01</p>
                <p className='text-[12px] text-gray-500'>2023 JULY 31</p>
             </div>

            </div>
           </div>



{/* ================================================== */}



           <div className='px-6 py-2 bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white py-3 px-6 border-b'>
            
                <div className='border-b pb-4 pt-6'>
                  <h1 className='text-lg font-semibold'>Projected Growth</h1>
                 <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu cubilia curae  ultrices posu curae  ultrices posu cubilia curae  ultrices posu  curae  ultrices posu cubilia curae  ultrices posu </p>
               </div>

             <div className='flex items-center gap-4 pt-4 px-4'>
                 <div className='bg-yellow-500 h-3 w-3 rounded-sm '></div><span className='text-[10px] font-bold'>TIER 1</span>
                 <div className='bg-red-500 h-3 w-3 rounded-sm '></div><span className='text-[10px] font-bold'>TIER 2</span>
                 <div className='bg-blue-500 h-3 w-3 rounded-sm '></div><span className='text-[10px] font-bold'>TIER 3</span>
             </div>

           
             <div>
                <LineChart/>
             </div>

             <div className='flex justify-between'>
                <p className='text-[12px] text-gray-500'>2023 JULY 01</p>
                <p className='text-[12px] text-gray-500'>2023 JULY 31</p>
             </div>

            </div>
           </div>


{/* ================================================== */}


           <div className='px-6 py-2  bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white px-6  border-b'>
            
                <div className='border-b pb-4 pt-6'>
                  <h1 className='text-[17px] font-semibold'>Sub-industry Growth</h1>
                  <p className='text-[10px] text-gray-500'>Vestibulum ante posu Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posuVestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu</p>
                </div>

             <div>
                <HorizontalLineChart/>
             </div>
           
          
            </div>
           </div>

{/* ================================================== */}


       <div className='px-6 py-2  bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white px-6  border-b'>
            
                <div className='border-b pb-4 pt-6'>
                  <h1 className='text-lg font-semibold'>Top brand growth constructions</h1>
                  <p className='text-[10px] text-gray-500'>Vestibulum ante posu ere cubilia curae  ultrices posu Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posuVestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu</p>
                </div>

             <div className='flex items-center gap-4 py-4'>
                
             </div>


             <div>
                <HorizontalLineChart/>
             </div>
           
          
            </div>
           </div>

{/* ================================================== */}


          <div className='px-6 py-2  bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white px-6'>
            
                <div className='border-b border-gray-100 pb-4 pt-6'>
                  <h1 className='text-[16px] font-semibold'>Top State & city growth contributions</h1>
                  <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posuVestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu</p>
                </div>

             <div className='flex flex-col pt-4'>
                 <div className='flex gap-3'>
                     <h1 className='text-[10px] font-semibold'>OUTER RING</h1>
                     <p className='text-[10px] font-semibold text-gray-500'>REPRESENTING THE CITIES IN RESPECTIVE STATES</p>
                 </div>
                 <div className='flex gap-3'>
                     <h1 className='text-[10px] font-semibold'>INNER RING</h1>
                     <p className='text-[10px] font-semibold  text-gray-500'>REPRESENTING THE CITIES IN RESPECTIVE STATES</p>
                 </div>
             </div>


             <div>
               <Circle/>
             </div>
           
          
            </div>
           </div>


{/* ================================================== */}


       <div className='px-6 py-2  bg-gray-100 gap-4 justify-center rounded'>
            <div className='bg-white px-6'>
            
                <div className='border-b border-gray-100 pb-4 pt-6'>
                  <h1 className='text-[17px] font-semibold'>Customer Brand Loyality Index</h1>
                  <p className='text-[10px] text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posu Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posu ere cubilia curae  ultrices posuVestibulum ante ipsum primis in faucibus orci</p>
                </div>

                <div className='flex items-center gap-4 py-4'>
                    <div className='bg-red-500 h-3 w-3 rounded-sm'></div><span className='text-[10px] font-bold'>NEW CUSTOMERS</span>
                    <div className='bg-black h-3 w-3 rounded-sm'></div><span className='text-[10px] font-bold'>RETURN CUSTOMERS</span>
                </div>


             <div>
                <ColumnChart/>
             </div>
           
          
            </div>
           </div>

{/* ================================================== */}



          <div className='flex flex-col justify-center py-12 px-12'>

              <h1 className='flex justify-center text-center text-[22px] font-bold'>Brands Under the Spotlight</h1>
             
              <p className='flex justify-center px-[100px] text-[10px] text-gray-500 py-2 text-center'>
                 ante ipsum primis in faucibus orci luctus et ante ipsum primis
                 in faucibus orci luctus et ante ipsum primis in faucibus orci
                luctus et ante ipsum primis in
              </p>

              <div className='flex items-center justify-center px-2'>
                <CiSearch className='bg-white rounded-l h-10'/> <input type="text" placeholder='Search by company or beands' className='rounded-r w-[500px] pr-8 pl-2 py-2  bg-white focus:outline-none placeholder:text-[14px]'/>
              </div>


              <div className='flex  pb-2'>
                <div className='flex gap-12  text-[10px] text-gray-500 pt-8 ml-12'>
                  <h1>BRAND</h1>
                  <h1 className='ml-28'>GROWTH RATE</h1>
                  <h1>MARKET SIZE</h1>
                  <h1>TRANS. FREQ</h1>
                </div>
             </div>
             
              <div className='flex flex-col gap-2 items-center justify-center'>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
                <Brandgrowth/>
              </div>




          </div>


    </div>
  )
}

export default Body
