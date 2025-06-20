import React from 'react'
import CallAsAPropInFuncation from './CallAsAPropInFuncation'

function PassAsAFunctionInProp() {

    const Pass=()=>{
        return alert("This is Pass Funcation...")
    }

  return (
    <div>
      <CallAsAPropInFuncation  PassedFuncation={Pass}/>
    </div>
  )
}

export default PassAsAFunctionInProp
