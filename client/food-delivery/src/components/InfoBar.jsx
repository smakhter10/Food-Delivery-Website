import React from 'react'


const InfoBar = ({logo, info, tag}) => {

  return (
    <div >
        <div className='flex flex-col items-center'>
            <div className='w-11 h-11 bg-[#F48E28] rounded-full flex items-center justify-center text-2xl text-[#FFF]'>{logo}</div>
            <h1 className='text-lg font-semibold'>{info}</h1>
            <p className='text-xs font-normal'>{tag}</p>
        </div>
    </div>
  )
}

export default InfoBar