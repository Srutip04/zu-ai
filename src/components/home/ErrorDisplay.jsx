import React from 'react'

function Error({errormssg,customClass="-top-5 right-5"}) {
  return (
    <div className={`absolute  -rotate-45 ${customClass}`}>
        <img src="/home/finger.gif" alt="error" width={40} />
    </div>
  )
}

export default Error