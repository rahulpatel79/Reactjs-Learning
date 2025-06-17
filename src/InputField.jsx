import React, { useState } from 'react'

function InputField() {
    const [input, setInput] = useState();

  return (
    <div>
      <h1>Hello Input Field Page</h1>

      <input type="text" value={input}  onChange={(event)=>setInput(event.target.value)} placeholder='Please Enter Name' style={{padding:"20px", fontSize:"20px", fontWeight:"600"}} />
        <h2>{input}</h2>
  
  <button onClick={()=>setInput("")}>Clear Text</button>
    </div>
  )
}

export default InputField
