import React, { useState } from 'react'
import Cards from './Cards'

function Foreground() {
  const data = [
 {
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam placeat deserunt quasi!", 
  filesize:".9mb", 
  close: true, 
  tag: {isOpen:true, tagTitle:"Download Now", tagColor:"green"}
},

{
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam placeat deserunt quasi!", 
  filesize:".9mb", 
  close: true, 
  tag: {isOpen:true, tagTitle:"Download Now", tagColor:"green"}
},

{
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam placeat deserunt quasi!", 
  filesize:".9mb", 
  close: true, 
  tag: {isOpen:true, tagTitle:"Download Now", tagColor:"green"}
},
  ];
  useState()

  return (
   <div className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
    {data.map((item, index)=>(
      <Cards data={item}/>
    ))}
     
   </div>
  )
}

export default Foreground