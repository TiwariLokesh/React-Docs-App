import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";   //React-icons from react icon website   
import { AiOutlineDownload } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


function Cards({data}) {
  return (
    <div className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
<FaRegFileLines/>

<p className=' text-sm leading-tight font-semibold mt-5'>{data.desc}</p>

<div className='footer absolute  w-full bottom-0 left-0 '>
<div className='flex items-center justify-between  px-8 py-3 mb-3'>
    <h5>{data.filesize}</h5>
    <span className='rounded-full bg-zinc-600 w-7 h-7 flex items-center justify-center'>
      {data.close ? <IoMdClose/>: <AiOutlineDownload size=".7em" color="#fff"/>}
   
    </span>
</div>
{
  data.tag.isOpen && (
<div className={`tag width-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
   <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
</div>
  )}

    </div>
    </div>
  )
}

export default Cards