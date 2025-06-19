import React from 'react'
import { Button } from 'react-bootstrap'
function CallAsAPropInFuncation({PassedFuncation}) {



  return (
    <div>
      <Button onClick={()=>(PassedFuncation())}>Pass Button</Button>
    </div>
  )
}

export default CallAsAPropInFuncation
