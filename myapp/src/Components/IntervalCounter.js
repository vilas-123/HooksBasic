import React, { useEffect, useState } from 'react'

function IntervalCounter() {
    const [count,setcount] = useState(0);
    const tick = () =>{
        setcount(count+1)
    }
    useEffect(()=>{
        const id=setInterval(tick,5000)
        return ()=> clearInterval(id)
    },[count])
  return (
    <div>
    {count}
    </div>
  )
}

export default IntervalCounter