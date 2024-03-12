import React from 'react'

function Count({text,Count}) {
    console.log('rendering count')
  return (
    <div>{text}-{Count}</div>
  )
}

export default React.memo (Count)