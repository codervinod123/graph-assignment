import React from 'react'

const LineBar = () => {
  return (
  
       <div className='border-x border-dotted px-2 flex flex-col gap-2'>
                       <div className='w-[4px] h-[70px] bg-black rounded-full'></div>
                       <div className='w-[4px] h-[200px] bg-red-500 rounded-full'></div>
                   </div>   
 
  )
}

export default LineBar;