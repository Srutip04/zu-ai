import React from 'react'

function FeedbackCard({type,textData}) {
 
  const strength={
    good:["#3CC28AB8","#3CC28A05"],
    average:["rgba(249, 201, 78, 0.5)","rgba(249, 201, 78, 0.02)"],
    bad:["",""]
  }
  if (!textData) {
    return
  }

// Extract the colors for border and background
const borderColor = strength?.[type]?.[0];
const backgroundColor = strength?.[type]?.[1];
const imgtype=type=="good"? "tick":type=="average"?"info":"redcross"
const headerType=type=="good"? "Strengths":type=="average"?"Scope of Improvement":"Weakness"

  return (
    <div className='mt-6'>
      <h1 className='text-[#000000] font-extrabold text-xl'>{headerType}</h1>
      <div className={`rounded-2xl border-[1px] p-4  mt-4`}  style={{ borderColor: borderColor, backgroundColor: backgroundColor }}
      >
        <ul className='flex gap-2 flex-col'>
          {textData?.map((text)=>{
            return(
          <li className='flex gap-4' key={text}>
            <img src={`/home/${imgtype}.svg`} alt="check" height={24} width={24} />
            <span className='font-bold text-sm'>{text}</span>
            
          </li>
            )
          })}
          
          
        </ul>
      </div>
    </div>
  )
}

export default FeedbackCard
