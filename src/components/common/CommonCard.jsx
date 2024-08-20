import React from 'react'

function CommanCard({children ,classes="mt-4 rounded-3xl bg-[#FFFFFF]"}) {
  return (
    <div className={`${classes} p-4  `}>{children}</div>
  )
}

export default CommanCard