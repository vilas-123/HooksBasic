import React from 'react'

function Buttton({handleClick,children}) {
    console.log('rendering button')
  return (
     <button onClick={handleClick}>
        {children}
     </button>
  )
}

export default React.memo(Buttton) //add this line to make the component reactive and avoid unnecessary rendersexport default Buttton;export default Buttton;