import Link from 'next/link'
import React from 'react'

function Sideicons({src,alt, style="",link="/"}) {
  return (
    <div className={`${style} rounded-full flex justify-center items-center`}>
      <Link href={link}>
      <img src={src} alt={alt} />
      </Link>
    </div>
  )
}

export default Sideicons
