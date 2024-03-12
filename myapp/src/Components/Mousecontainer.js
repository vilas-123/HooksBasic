import React, { useState } from 'react'
import Hookmouse from './Hookmouse'

function Mousecontainer() {
    const[display,setdisplay]=useState(true)
  return (
    <div>
    <button onClick={()=> setdisplay(!display)}>Click me!</button>
    {display && <Hookmouse />}
    </div>
  )
}

export default Mousecontainer