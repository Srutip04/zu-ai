import React from 'react'

function TypeCard({icon ,text}) {
  return (
    <div className='bg-[#FFFFFF] px-2 rounded-sm flex gap-2'>
      <img src={icon} alt={icon} />
      <span className='text-[11px] font-bold'>{text}</span>
      
    </div>
  )
}

export default TypeCard
