import React, { useState,useMemo} from 'react'
import Counter from './Counter'


function Memo() {
    const[counter, setCounter] = useState(0)
    const[counterOne,setCounterOne]=useState(0)

    const Increment = () => {
        setCounter(counter+1)
    }
    const IncrementOne = () => {
        setCounterOne(counterOne+1)
    }
    const IsEven =useMemo (() =>{
        let i =0
        while(i<2000000000) i++
        return counter % 2 === 0;
    },[counter])

  return (
    <div>
        <button onClick={Increment}>Clicked {counter} times</button><br></br>
        <span>
            {IsEven ? 'Even' : 'Odd'}
        </span> 
        <br></br>
        <button onClick={IncrementOne}>ClickedTwo{counterOne}</button>
    </div>
  )
}

export default Memo

