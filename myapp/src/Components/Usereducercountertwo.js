import React, { useReducer } from 'react'


const  initialState = {
    firstcounter:0
}
const reducer  = (state, action) => {
    switch(action.type){
        case "INCREMENT": return {firstcounter:state.firstcounter+ action.value}
        case "DECREMENT": return {firstcounter:state.firstcounter- action.value}
        case "RESET" :return initialState
        default: return state;
    }
}
        


    function Usereducercountertwo() {
        const[count,dispatch]=useReducer(reducer, initialState)
  return (
    <div> 
        Count:{count.firstcounter}
        <br/>
        <button onClick={()=> dispatch( {type:"INCREMENT",value:1})}>Increment</button>
        <button onClick={ ()=> dispatch({type:'DECREMENT',value:1})}>Decrement</button>
        <button onClick={()=> dispatch( {type:"INCREMENT",value:5})}>Increment 5</button>
        <button onClick={ ()=> dispatch({type:'DECREMENT',value:5})}>Decrement 5</button>
        <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}


export default Usereducercountertwo;
    