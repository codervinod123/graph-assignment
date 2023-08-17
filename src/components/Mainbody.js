import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'

const Mainbody = () => {
  return (
    <div className='grid grid-flow-col'>
         <Sidebar/>
         <Body/>
    </div>
  )
}

export default Mainbody
