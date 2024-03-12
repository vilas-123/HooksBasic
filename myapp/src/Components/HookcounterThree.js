import React, { useState } from 'react'

function HookcounterThree() {
    const[name,setname] = useState({firstname:'',lastname:''})

  return (
     <form>
        <input type='text'  value={name.firstname} onChange={(e)=>setname({...name,firstname:e.target.value})}/>
        <input type='text'  value={name.lastname} onChange={(e)=>setname({...name, lastname : e.target.value})}/>
        <h2>firstname is {name.firstname}</h2> 
        <h2>lastname is {name.lastname}</h2> 
        <h2>{JSON.stringify(name)}</h2>
     
     </form>

  )
}

export default HookcounterThree