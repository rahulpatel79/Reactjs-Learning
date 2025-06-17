import React from 'react'

function PropUser({children,color="orange"}) { // defult name 
  return (
    <div style={{color:color, border:"2px solid red", margin : '10px'}}>
     {children}
    </div>
  )
}

export default PropUser
