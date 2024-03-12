import React, { useState } from 'react'

function Hooktwo() {
    const intialCount = 0
    const [count, setCount] = useState(intialCount)

   const Incrementfive = () => {
        setCount(prevCount => prevCount+5);
    }
    
  return (
    <div>
        
         <button onClick={()=>setCount(intialCount)}>Reset</button>
         <button onClick={() => setCount(prevCount => prevCount+1)}>+</button>
         <button onClick={()=>setCount(prevCount => prevCount -1 )}>-</button>
         <button onClick={Incrementfive}>Increment5</button>

    </div>
    

  )
}

export default Hooktwo