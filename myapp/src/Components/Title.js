import React from 'react'

function Title() {
    console.log('rendering title')
  return (
    <div>
        <h1>Rendering title</h1>
    </div>
  )
}

export default React.memo (Title)