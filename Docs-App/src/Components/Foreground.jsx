import React from 'react'
import Cards from './Cards'

function Foreground() {
  return (
   <div className='fixed top-0 left-0 w-full h-screen z-[3]'>
    <Cards/>
     
   </div>
  )
}

export default Foreground