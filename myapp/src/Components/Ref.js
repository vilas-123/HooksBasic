import React, { useEffect, useRef } from 'react'

function Ref() {
    const inputref = useRef(null)
  

   useEffect(()=>{
     inputref.current.focus()
    } )
  return (
    <div>
        <input ref={inputref} type='text'></input>
    </div>
  )
}

export default Ref